'use client'

import React from 'react'

import {
    IconBrandReact,
    IconBrandTypescript,
    IconFolder,
    IconFolderOpen,
    IconPanelLeftClose,
    IconPanelRightClose
} from 'hq-icons'
import { Button, Collection } from 'react-aria-components'

import previews from '@/components/docs/generated/previews.json'
import Code from '@/components/mdx/code'
import { Tree, TreeItem } from '@/components/ui'
import { cn, convertToKebabCase } from '@/lib/utils'

type FileNode = {
    id: string | number
    title: string
    children: FileNode[]
}

interface FileExplorerProps extends React.HTMLAttributes<HTMLDivElement> {
    page: string
    className?: string
}

export default function FileExplorer({ page, className, ...props }: FileExplorerProps) {
    const [selected, setSelected] = React.useState<string>(page)
    const [code, setCode] = React.useState<string>('')
    const [components, setComponents] = React.useState<string[]>([])
    const [uiComponents, setUiComponents] = React.useState<string[]>([])
    const [layout, setLayout] = React.useState<string | null>(null)

    React.useEffect(() => {
        // @ts-expect-error no-type
        const componentData = previews[page] ? previews[page].raw : ''

        const componentNames: string[] = componentData.match(/'components\/(.*?[^'])'/g)
        const layoutName: string = componentData.match(/'layouts\/([^']*?)'/g)

        if (componentNames || layoutName || componentData) {
            const components = componentNames ? componentNames.map((c: string) => 'block/' + c.replaceAll("'", '')) : []
            const componentExists = components.filter((component: string) => component in previews)
            setComponents(componentExists)
            const layoutExists = layoutName && `block/${layoutName[0].replaceAll("'", '')}`
            setLayout(layoutExists)
            let allComponents = componentData
            if (layoutExists)
                /* @ts-expect-error unknown-types */ // prettier-ignore
                allComponents += previews[`block/${layoutName[0].replaceAll("'", '')}`].raw
            if (componentExists)
                /* @ts-expect-error unknown-types */ // prettier-ignore
                allComponents += componentExists.map((c) => previews[c as string].raw).join('')

            /* @ts-expect-error unknown-types */ // prettier-ignore
            const uiComponentNames = [...new Set((allComponents.match(/import\s+{([^}]+)}\s+from\s+'@\/components\/ui'/g) || []).flatMap(match => match.match(/{([^}]+)}/)[1].split(',').map(comp => comp.trim())))]

            if (uiComponentNames) {
                /* @ts-expect-error unknown-types */ // prettier-ignore
                const uiComponents = uiComponentNames.map((name: string) => convertToKebabCase(name.trim()))
                const componentExists = uiComponents.filter((component: string) => component in previews)
                componentExists.push('utils')
                setUiComponents(componentExists)
            }
        }
    }, [page])

    React.useEffect(() => {
        // @ts-expect-error no-type
        const componentData = previews[selected] ? previews[selected].raw : ''
        if (componentData) {
            setCode(componentData)
        } else {
            if (selected === 'index') {
                setCode(`${uiComponents.map((c) => `export * from './${c}'`).join('\n')}`)
            } else {
                setCode(``)
            }
        }
    }, [selected, uiComponents])

    const renderItem = (item: FileNode): React.ReactNode => (
        <TreeItem
            className={cn(
                selected === item.id && 'bg-primary/10 text-primary',
                'hover:bg-primary/10 hover:text-primary cursor-pointer transition'
            )}
            key={item.id}
            id={item.id}
            textValue={item.title}
            onAction={() => {
                if (item.children.length === 0) setSelected(item.id as string)
            }}
        >
            <TreeItem.Content>
                {({ isExpanded, hasChildItems }) => (
                    <>
                        {isExpanded ? (
                            <IconFolderOpen />
                        ) : hasChildItems ? (
                            <IconFolder />
                        ) : item.title.includes('.tsx') ? (
                            <IconBrandReact />
                        ) : item.title.includes('.ts') ? (
                            <IconBrandTypescript />
                        ) : null}
                        {item.title}
                    </>
                )}
            </TreeItem.Content>
            {item.children.length > 0 && <Collection items={item.children}>{renderItem}</Collection>}
        </TreeItem>
    )

    const files: FileNode[] = []
    if (page) {
        files.push({
            id: 1,
            title: 'pages',
            children: [
                {
                    id: page,
                    title: page.split('/').pop() + '.tsx' || 'page.tsx',
                    children: []
                }
            ]
        })
    }
    if (layout) {
        files.push({
            id: 2,
            title: 'layouts',
            children: [
                {
                    id: layout,
                    title: layout.split('/').pop() + '.tsx' || 'page.tsx',
                    children: []
                }
            ]
        })
    }

    if (uiComponents || components) {
        const componentsUsed = components.sort().map((component: string) => {
            return {
                id: component,
                title: component.split('/').pop() + '.tsx',
                children: []
            }
        })
        const uiComponentsUsed = uiComponents.sort().map((component: string) => {
            return {
                id: component,
                title: component + '.tsx',
                children: []
            }
        })
        uiComponentsUsed.push({
            id: 'index',
            title: 'index.ts',
            children: []
        })

        files.push({
            id: 3,
            title: 'components',
            children: [
                {
                    id: 4,
                    title: 'ui',
                    children: uiComponentsUsed
                },
                ...componentsUsed
            ]
        } as FileNode)
    }

    const [sidebarOpen, setSidebarOpen] = React.useState(true)

    return (
        <div className={cn('flex w-full flex-col rounded-lg border lg:flex-row', className)} {...props}>
            <Tree
                defaultExpandedKeys={[1, 2, 3, 4]}
                className={cn(
                    'max-h-none w-full min-w-0 rounded-b-none border-x-0 border-t-0 transition-all lg:w-[24rem] lg:rounded-l-lg lg:rounded-r-none lg:border-r lg:border-b-0',
                    sidebarOpen ? 'min-h-40 overflow-y-auto' : 'h-0 overflow-hidden border-none p-0 lg:h-auto lg:w-0'
                )}
                aria-label='Files'
                selectionMode='none'
                items={files}
            >
                {files.map(renderItem)}
            </Tree>
            <div className='grid w-full grid-cols-1 place-content-start relative'>
                <div className='relative flex h-12 items-center gap-2 border-b px-4 py-1 bg-primary/10 text-primary'>
                    <Button
                        onPress={() => setSidebarOpen(!sidebarOpen)}
                        className='absolute left-1/2 -mt-7 flex size-6 -translate-x-1/2 rotate-90 items-center justify-center lg:relative lg:left-0 lg:mt-0 lg:-ml-7 lg:translate-x-0 lg:rotate-0'
                    >
                        {sidebarOpen ? <IconPanelLeftClose /> : <IconPanelRightClose />}
                    </Button>
                    <IconBrandReact className='size-4' />
                    {selected.split('/').pop() + '.tsx'}
                </div>
                <Code code={code} className='border-none static [&_pre]:max-h-full overflow-y-auto' />
            </div>
        </div>
    )
}
