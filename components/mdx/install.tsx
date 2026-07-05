"use client"
import type { RegistryItem } from "shadcn/schema"
import { type PropsWithChildren, useEffect, useState } from "react"
import { IconPlaceholder } from "@/components/icon-placeholder"
import { CLI } from "@/components/mdx/cli"
import { Code } from "@/components/mdx/code-client"
import { FileIcon } from "@/components/mdx/file-icon"
import { useStyle } from "@/components/style-provider"
import { Button } from "@/components/ui/button"
import { Tabs } from "@/components/ui/tabs"
import { type Selection, Tree, TreeItem } from "@/components/ui/tree"
import { cn } from "@/lib/utils"

export function ManualInstall({ component }: { component: string }) {
  const { style } = useStyle()
  const [registry, setRegistry] = useState<RegistryItem | null>(null)
  const [expanded, setExpanded] = useState<boolean>(true)
  const [selectedFile, setSelectedFile] = useState<{
    id: string
    name: string
    content: string
  }>({
    id: "",
    name: "",
    content: ""
  })

  useEffect(() => {
    fetch(`/r/styles/${style}/${component}`)
      .then((res) => res.json())
      .then((data: RegistryItem) => {
        setRegistry(data)
        const file = data.files?.[0]
        setSelectedFile({
          id: file?.path || "",
          name: file?.path.split("/").pop() || "",
          content: file?.content || ""
        })
      })
  }, [component, style])

  const getCode = (value: Selection) => {
    const name = [...value].join("")
    if (name.includes("blocks")) {
      const file = registry?.files?.find((file) => file.path === name)
      setSelectedFile({
        id: name,
        name: file?.path.split("/").pop() || "",
        content: file?.content || ""
      })
    } else {
      fetch(`/r/styles/${style}/${name.split("/").pop()}`)
        .then((res) => res.json())
        .then((data: RegistryItem) => {
          const file = data.files?.[0]
          setSelectedFile({
            id: name,
            name: file?.path.split("/").pop() || "",
            content: file?.content || ""
          })
        })
    }
  }

  return (
    <div className="space-y-4">
      {registry?.dependencies && (
        <>
          <p>First install the dependencies</p>
          <CLI command="install" items={registry?.dependencies} />
        </>
      )}
      <p>Add these files to your project</p>
      <div className="cn-skeleton flex flex-col overflow-hidden border bg-transparent shadow-sm sm:flex-row">
        <div
          className={cn(
            "shrink-0 overflow-auto transition-[width,height]",
            expanded ? "h-64 w-full sm:h-full sm:max-h-110 sm:w-64" : "h-0 sm:w-0"
          )}
        >
          <div className="flex h-10 items-center border-b bg-muted p-2">Files</div>
          <Tree
            aria-label="Files"
            className="p-2"
            defaultExpandedKeys={["components", "ui"]}
            onSelectionChange={getCode}
            selectedKeys={[selectedFile.id]}
            selectionMode="single"
          >
            {registry?.type === "registry:block" && (
              <TreeItem id="app" textValue="app">
                <TreeFolder>app</TreeFolder>
                {registry?.files
                  ?.filter((file) => file.type === "registry:page")
                  .map((file) => (
                    <TreeItem id={file.path} key={file.path} textValue={file.path}>
                      <TreeFile>{file.path.split("/").pop()}</TreeFile>
                    </TreeItem>
                  ))}
              </TreeItem>
            )}
            <TreeItem id="components" textValue="components">
              <TreeFolder>components</TreeFolder>
              {registry?.registryDependencies && (
                <TreeItem id="ui" textValue="ui">
                  <TreeFolder>ui</TreeFolder>
                  {registry.type === "registry:ui" && (
                    <TreeItem id={component} textValue={component}>
                      <TreeFile>{component}.tsx</TreeFile>
                    </TreeItem>
                  )}
                  {registry.registryDependencies
                    .filter((c) => !c.includes("utils") && !c.includes("use-"))
                    .map((c) => (
                      <TreeItem id={c} key={c} textValue={c}>
                        <TreeFile>{c.split("/").pop()}.tsx</TreeFile>
                      </TreeItem>
                    ))}
                </TreeItem>
              )}
              {registry?.type === "registry:block" && (
                <TreeItem id="blocks" textValue="blocks">
                  <TreeFolder>block-components</TreeFolder>
                  {registry?.files
                    ?.filter((file) => file.type !== "registry:page")
                    .map((file) => (
                      <TreeItem id={file.path} key={file.path} textValue={file.path}>
                        <TreeFile>{file.path.split("/").pop()}</TreeFile>
                      </TreeItem>
                    ))}
                </TreeItem>
              )}
            </TreeItem>
            {registry?.registryDependencies?.join().includes("utils") && (
              <TreeItem id="lib" textValue="lib">
                <TreeFolder>lib</TreeFolder>
                {registry.registryDependencies
                  .filter((c) => c.includes("utils"))
                  .map((c) => (
                    <TreeItem id={c} key={c} textValue={c}>
                      <TreeFile>{c.split("/").pop()}.ts</TreeFile>
                    </TreeItem>
                  ))}
              </TreeItem>
            )}
            {registry?.registryDependencies?.join().includes("use-") && (
              <TreeItem id="hooks" textValue="hooks">
                <TreeFolder>hooks</TreeFolder>
                {registry.registryDependencies
                  .filter((c) => c.includes("use-"))
                  .map((c) => (
                    <TreeItem id={c} key={c} textValue={c}>
                      <TreeFile>{c.split("/").pop()}.ts</TreeFile>
                    </TreeItem>
                  ))}
              </TreeItem>
            )}
          </Tree>
        </div>
        <div
          className={cn(
            "isolate flex flex-1 flex-col overflow-x-auto overflow-y-hidden **:my-0",
            expanded && "border-l"
          )}
        >
          <div className="flex h-10! items-center gap-2 border-b bg-muted p-2">
            <Button onPress={() => setExpanded(!expanded)} size="icon-sm" variant="outline">
              <IconPlaceholder
                className="rotate-90 sm:rotate-0"
                hugeicons="SidebarLeftIcon"
                lucide="PanelLeftIcon"
                phosphor="SidebarIcon"
                remixicon="RiSideBarLine"
                tabler="IconLayoutSidebar"
              />
            </Button>
            <FileIcon className="size-4" lang={selectedFile?.name.split(".").pop() || "tsx"} />
            <span>{selectedFile?.name}</span>
          </div>
          <Code
            className="rounded-none **:w-full *:max-w-full **:[pre]:min-h-100"
            code={selectedFile?.content.replaceAll(`blocks/${component}/components`, "block-components")}
            copy
          />
        </div>
      </div>
    </div>
  )
}

const TreeFolder = ({ children }: PropsWithChildren) => {
  return (
    <Tree.ItemLabel
      icon={
        <IconPlaceholder
          hugeicons="Folder01Icon"
          lucide="FolderIcon"
          phosphor="FolderIcon"
          remixicon="RiFolderLine"
          tabler="IconFolder"
        />
      }
      iconExpanded={
        <IconPlaceholder
          hugeicons="Folder02Icon"
          lucide="FolderOpenIcon"
          phosphor="FolderOpenIcon"
          remixicon="RiFolderOpenLine"
          tabler="IconFolderOpen"
        />
      }
    >
      {children}
    </Tree.ItemLabel>
  )
}

const TreeFile = ({ children }: PropsWithChildren) => {
  const lang = children?.toString().split(".").pop() || "tsx"
  return <Tree.ItemLabel icon={<FileIcon className="size-4" lang={lang} />}>{children}</Tree.ItemLabel>
}

export function Install({ component }: { component: string }) {
  return (
    <Tabs>
      <Tabs.List>
        <Tabs.Trigger id="cli">CLI</Tabs.Trigger>
        <Tabs.Trigger id="manual">Manual</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content id="cli">
        <CLI command="add" items={component} />
      </Tabs.Content>
      <Tabs.Content id="manual">
        <ManualInstall component={component} />
      </Tabs.Content>
    </Tabs>
  )
}
