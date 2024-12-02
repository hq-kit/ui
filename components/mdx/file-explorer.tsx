'use client'

import React from 'react'

import {
    IconBrandReact,
    IconBrandTypescript,
    IconFolder,
    IconPanelLeftClose,
    IconPanelRightClose
} from 'hq-icons'
import { Button, Collection } from 'react-aria-components'

import previews from '@/components/docs/generated/previews.json'
import Code from '@/components/mdx/code'
import { cn, Tree, TreeItem } from '@/components/ui'
import { convertToKebabCase } from '@/lib/utils'

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

        if (componentNames || layoutName) {
            const components = componentNames
                ? componentNames.map((c: string) => 'block/' + c.replaceAll("'", ''))
                : []
            const componentExists = components.filter((component: string) => component in previews)
            setComponents(componentExists)
            setLayout('block/' + layoutName[0].replaceAll("'", ''))
            let allComponents = componentData
            /* @ts-expect-error unknown-types */ // prettier-ignore
            if (previews[`block/${layoutName[0].replaceAll("'", '')}`].raw)
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
                const componentExists = uiComponents.filter(
                    (component: string) => component in previews
                )
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
    const renderItem = (item: FileNode): React.ReactNode => {
        return (
            <TreeItem key={item.id} id={item.id} textValue={item.title}>
                <TreeItem.Content>
                    {item.children.length > 0 && (
                        <>
                            <TreeItem.Indicator />
                            <IconFolder className='mx-1 size-4' />
                        </>
                    )}
                    <TreeItem.Label
                        className={cn(
                            '-ml-4 px-4 py-1 -my-1 rounded w-full text-xs',
                            selected === item.id && 'text-primary-foreground bg-primary/80'
                        )}
                        slot={item.children.length > 0 ? 'chevron' : null}
                        onPress={() => {
                            if (item.children.length === 0) setSelected(item.id as string)
                        }}
                    >
                        {item.title.includes('.tsx') ? (
                            <IconBrandReact />
                        ) : item.title.includes('.ts') ? (
                            <IconBrandTypescript />
                        ) : null}
                        {item.title}
                    </TreeItem.Label>
                </TreeItem.Content>
                {item.children.length > 0 && (
                    <Collection items={item.children}>{renderItem}</Collection>
                )}
            </TreeItem>
        )
    }

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
        <div
            className={cn('flex flex-col lg:flex-row w-full border rounded-lg', className)}
            {...props}
        >
            <Tree
                defaultExpandedKeys={[1, 2, 3, 4]}
                className={cn(
                    'w-full lg:border-r transition-all rounded-b-none lg:w-[24rem] lg:rounded-r-none lg:rounded-l-lg max-h-none min-w-0 border-x-0 border-t-0 lg:border-b-0',
                    !sidebarOpen
                        ? 'lg:w-0 lg:h-auto h-0 p-0 overflow-hidden border-none'
                        : 'min-h-40'
                )}
                aria-label='Files'
                selectionMode='none'
                items={files}
            >
                {files.map(renderItem)}
            </Tree>
            <div className='w-full grid'>
                <div className='px-4 py-1.5 max-h-12 border-b flex items-center gap-2 relative'>
                    <Button
                        onPress={() => setSidebarOpen(!sidebarOpen)}
                        className='size-6 lg:-ml-7 absolute lg:relative lg:left-0 lg:translate-x-0 left-1/2 -translate-x-1/2 rotate-90 lg:rotate-0 flex items-center justify-center -mt-7 lg:mt-0'
                    >
                        {sidebarOpen ? <IconPanelLeftClose /> : <IconPanelRightClose />}
                    </Button>
                    <IconBrandReact className='size-4' />
                    {selected.split('/').pop() + '.tsx'}
                </div>
                <Code
                    code={code}
                    className='[&_pre]:max-h-[38rem] [&_pre]:min-h-[38rem] border-none'
                />
            </div>
        </div>
    )
}
