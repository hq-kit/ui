'use client'

import { IconBrandReact, IconBrandTypescript, IconFolder, IconFolderOpen } from '@tabler/icons-react'
import { useEffect, useState } from 'react'
import { CLI } from '@/components/mdx/cli'
import { Code } from '@/components/mdx/code'
import { Tabs } from '@/components/ui/tabs'
import { Tree } from '@/components/ui/tree'

export function ManualInstall({ component }: { component: string }) {
  const [content, setContent] = useState<string | null>(null)
  const [selectedFile, setSelectedFile] = useState<string>(component)
  const [deps, setDeps] = useState<string[]>([])
  const [uiComponents, setUiComponents] = useState<string[]>([])

  const [libComponents, setLibComponents] = useState<string[]>([])
  const [hooksComponents, setHooksComponents] = useState<string[]>([])

  useEffect(() => {
    fetch(`/r/${component}.json`)
      .then((res) => res.json())
      .then((data) => {
        setContent(data.files[0].content)
        setDeps(data.dependencies)
        setUiComponents(
          data.registryDependencies
            .filter((dep: string) => dep !== 'utils' && dep !== 'use-mobile')
            .map((dep: string) => dep.split('/').pop())
        )
        setLibComponents(data.registryDependencies.filter((dep: string) => dep === 'utils'))
        setHooksComponents(data.registryDependencies.filter((dep: string) => dep === 'use-mobile'))
      })
  }, [component])

  function getContent(name: string) {
    fetch(`/r/${name}.json`)
      .then((res) => res.json())
      .then((data) => setContent(data.files[0].content))
      .then(() => setSelectedFile(name))
  }

  return (
    <>
      <p className='mb-4'>First install the dependencies</p>
      <CLI command='install' items={deps} />

      <p className='mb-4'>Add the files to your project</p>
      <div className='relative mb-4 grid overflow-hidden rounded-xl border shadow-sm lg:h-96 lg:grid-cols-4 lg:*:last:col-span-3 lg:*:first:col-span-1'>
        <div>
          <h2 className='px-4 py-2 font-medium text-sm'>Files</h2>
          <Fleet
            components={deps}
            hooksComponents={hooksComponents}
            libComponents={libComponents}
            selectedFile={selectedFile}
            setSelectedFile={(file: string) => getContent(file)}
            uiComponents={[component, ...uiComponents]}
          />
        </div>
        <div className='**:my-0 **:[pre]:min-h-96'>
          <Code code={content || ''} copy lang='tsx' />
        </div>
      </div>
    </>
  )
}

interface FleetProps {
  uiComponents: string[]
  libComponents: string[]
  hooksComponents: string[]
  components: string[]
  selectedFile: string
  setSelectedFile: (file: string) => void
}

export function Fleet({ uiComponents, libComponents, hooksComponents, selectedFile, setSelectedFile }: FleetProps) {
  return (
    <Tree
      aria-label='Files'
      className='gap-0 [--radius:0] **:data-[slot=indicator]:hidden **:data-[slot=tree-item]:pl-1'
      defaultExpandedKeys={['components', 'ui']}
      onSelectionChange={(value) =>
        Array.from(value).flat().toString() ? setSelectedFile(Array.from(value).flat().toString()) : null
      }
      selectedKeys={[selectedFile]}
      selectionMode='single'
    >
      <Tree.Item id='components' textValue='components'>
        <Tree.ItemLabel icon={<IconFolder />} iconExpanded={<IconFolderOpen />}>
          components
        </Tree.ItemLabel>
        {uiComponents.length > 0 && (
          <Tree.Item id='ui' textValue='ui'>
            <Tree.ItemLabel icon={<IconFolder />} iconExpanded={<IconFolderOpen />}>
              ui
            </Tree.ItemLabel>
            {uiComponents.map((uiComponent) => (
              <Tree.Item id={uiComponent} key={uiComponent} textValue={uiComponent}>
                <Tree.ItemLabel icon={<IconBrandReact color='blue' />}>{uiComponent}.tsx</Tree.ItemLabel>
              </Tree.Item>
            ))}
          </Tree.Item>
        )}
      </Tree.Item>
      {libComponents.length > 0 && (
        <Tree.Item id='lib' textValue='lib'>
          <Tree.ItemLabel icon={<IconFolder />} iconExpanded={<IconFolderOpen />}>
            lib
          </Tree.ItemLabel>
          {libComponents.map((libComponent) => (
            <Tree.Item id={libComponent} key={libComponent} textValue={libComponent}>
              <Tree.ItemLabel icon={<IconBrandTypescript color='blue' />}>{libComponent}.ts</Tree.ItemLabel>
            </Tree.Item>
          ))}
        </Tree.Item>
      )}
      {hooksComponents.length > 0 && (
        <Tree.Item id='hooks' textValue='hooks'>
          <Tree.ItemLabel icon={<IconFolder />} iconExpanded={<IconFolderOpen />}>
            hooks
          </Tree.ItemLabel>
          {hooksComponents.map((hookComponent) => (
            <Tree.Item id={hookComponent} key={hookComponent} textValue={hookComponent}>
              <Tree.ItemLabel icon={<IconBrandTypescript color='blue' />}>{hookComponent}.ts</Tree.ItemLabel>
            </Tree.Item>
          ))}
        </Tree.Item>
      )}
    </Tree>
  )
}

export function Install({ component }: { component: string }) {
  return (
    <Tabs>
      <Tabs.List>
        <Tabs.Trigger id='cli'>CLI</Tabs.Trigger>
        <Tabs.Trigger id='manual'>Manual</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content id='cli'>
        <CLI command='add' items={component} />
      </Tabs.Content>
      <Tabs.Content id='manual'>
        <ManualInstall component={component} />
      </Tabs.Content>
    </Tabs>
  )
}
