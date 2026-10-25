"use client"

import { type ComponentProps, type JSX, useCallback, useRef } from "react"
import { FileIcon } from "@/components/mdx/file-icon"
import { useCopyButton } from "@/hooks/use-copy"
import { CopyButton } from "./copy-button"

export const Figure = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  const areaRef = useRef<HTMLDivElement>(null)
  const onCopy = useCallback(() => {
    const pre = areaRef.current?.getElementsByTagName("pre").item(0)

    if (!pre) return

    const clone = pre.cloneNode(true) as HTMLElement
    for (const node of clone.querySelectorAll(".nd-copy-ignore")) {
      node.remove()
    }
    void navigator.clipboard.writeText(clone.textContent ?? "")
  }, [])
  const [checked, onClick] = useCopyButton(onCopy)
  return (
    <figure className="relative my-4 overflow-hidden rounded-lg border text-sm shadow-sm" ref={areaRef}>
      {Array.isArray(children) ? (
        <>
          <figcaption className="flex w-full flex-row items-center justify-between bg-accent p-1 text-accent-foreground">
            <div className="ml-2 flex items-center gap-2">
              <FileIcon
                className="size-4 text-accent-foreground"
                lang={children[0].props?.children.split(".").at(-1) ?? ""}
              />
              <span className="flex-1 truncate font-mono text-accent-foreground">{children[0].props?.children}</span>
            </div>
            <CopyButton className="z-10" isCopied={checked} onPress={onClick} />
          </figcaption>
          <Pre {...children[1].props} />
        </>
      ) : (
        <>
          <CopyButton className="peer absolute top-2 right-2 z-10" isCopied={checked} onPress={onClick} />
          <Pre {...children.props} />
        </>
      )}
    </figure>
  )
}

export const Pre = (props: ComponentProps<"pre">) => {
  return <pre className="max-h-64 w-full overflow-auto p-2 focus-visible:outline-hidden *:[code]:gap-2" {...props} />
}
