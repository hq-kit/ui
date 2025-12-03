import { IconBrandReact, IconBrandTypescript, IconFolderFilled, IconFolderOpen } from '@tabler/icons-react'
import { Card } from 'fumadocs-ui/components/card'
import { Tree } from '@/components/ui/tree'

interface FleetProps {
  uiComponents: string[]
  libComponents: string[]
  hooksComponents: string[]
  components: string[]
  selectedFile: string
  setSelectedFile: (file: string) => void
}

export default function Fleet({
  uiComponents,
  libComponents,
  hooksComponents,
  components,
  selectedFile,
  setSelectedFile
}: FleetProps) {
  return (
    <Card
      className='rounded-lg border p-4 shadow-sm [--accent-foreground:var(--foreground)] [--accent:var(--border)] **:data-[slot=indicator]:hidden'
      title='Files'
    >
      <Tree
        aria-label='Files'
        defaultExpandedKeys={['components', 'ui']}
        onSelectionChange={(value) =>
          Array.from(value).flat().toString() ? setSelectedFile(Array.from(value).flat().toString()) : null
        }
        selectedKeys={[selectedFile]}
        selectionMode='single'
      >
        <Tree.Item id='components' textValue='components'>
          <Tree.ItemLabel icon={<IconFolderFilled />} iconExpanded={<IconFolderOpen />}>
            components
          </Tree.ItemLabel>
          {uiComponents.length > 0 && (
            <Tree.Item id='ui' textValue='ui'>
              <Tree.ItemLabel icon={<IconFolderFilled />} iconExpanded={<IconFolderOpen />}>
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
            <Tree.ItemLabel icon={<IconFolderFilled />} iconExpanded={<IconFolderOpen />}>
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
            <Tree.ItemLabel icon={<IconFolderFilled />} iconExpanded={<IconFolderOpen />}>
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
    </Card>
  )
}
