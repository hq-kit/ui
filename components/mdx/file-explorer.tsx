'use client'

import { IconBrandReact, IconBrandTypescript, IconFolder, IconFolderOpen, IconLayoutSidebar } from '@tabler/icons-react'
import { type HTMLAttributes, type ReactNode, useEffect, useState } from 'react'
import { Button, Collection } from 'react-aria-components'
import previews from '@/components/docs/generated/previews.json'
import { CLI } from '@/components/mdx/cli'
import { Code } from '@/components/mdx/code'
import { Separator, Tree, TreeItem } from '@/components/ui'
import { cn } from '@/lib/utils'
import { slugify } from '@/lib/utils/modifiers'

type FileNode = {
    id: string | number
    title: string
    children: FileNode[]
}

interface FileExplorerProps extends HTMLAttributes<HTMLDivElement> {
    page: string
    className?: string
}

export function FileExplorer({ page, className, ...props }: FileExplorerProps) {
    const [selected, setSelected] = useState<string>(page)

    const [components, setComponents] = useState<string[] | null>([])
    const [uiComponents, setUiComponents] = useState<string[] | null>([])
    const [layouts, setLayouts] = useState<string[] | null>(null)

    const [code, setCode] = useState<string>('')

    useEffect(() => {
        // @ts-expect-error no-type
        const componentData = previews[page] ? previews[page].raw : ''

        const componentNames: string[] = componentData.match(/'components\/(.*?[^'])'/g)
        const layoutNames: string[] = componentData.match(/'layouts\/([^']*?)'/g)

        if (componentNames || layoutNames || componentData) {
            const components = componentNames?.map((c: string) => `block/${c.replaceAll("'", '')}`)
            const componentExists = components?.filter((component: string) => component in previews)
            setComponents(componentExists)

            const layouts = layoutNames?.map((c: string) => `block/${c.replaceAll("'", '')}`)
            const layoutExists = layouts?.filter((component: string) => component in previews)
            setLayouts(layoutExists)

            let allComponents = componentData
            if (layoutExists)
                /* @ts-expect-error unknown-types */ // prettier-ignore
                allComponents += layoutExists.map((c) => previews[c as string].raw).join('')
            if (componentExists)
                /* @ts-expect-error unknown-types */ // prettier-ignore
                allComponents += componentExists.map((c) => previews[c as string].raw).join('')

            const uiComponentNames = [
                ...new Set(
                    (allComponents.match(/import\s+{([^}]+)}\s+from\s+'@\/components\/ui'/g) || []).flatMap(
                        (match: string) =>
                            match
                                ?.match(/{([^}]+)}/)?.[1]
                                .split(',')
                                .map((comp: string) => comp.trim())
                    )
                )
            ]

            if (uiComponentNames) {
                /* @ts-expect-error unknown-types */ // prettier-ignore
                const uiComponents = uiComponentNames.map((name: string) => slugify(name.trim()))
                const componentExists = uiComponents.filter((component: string) => component in previews)
                setUiComponents(componentExists)
            }
        }
    }, [page])

    useEffect(() => {
        // @ts-expect-error no-type
        const componentData = previews[selected] ? previews[selected].raw : ''
        if (componentData) {
            setCode(componentData)
        } else {
            if (selected === 'index') {
                setCode(`${uiComponents?.map((c) => `export * from './${c}'`).join('\n')}`)
            } else {
                setCode('')
            }
        }
    }, [selected, uiComponents])

    const renderItem = (item: FileNode): ReactNode => (
        <TreeItem
            className={cn(
                selected === item.id && 'bg-primary/10 text-primary',
                'cursor-pointer hover:bg-primary/10 hover:text-primary'
            )}
            id={item.id}
            key={item.id}
            onAction={() => {
                if (item.children.length === 0) setSelected(item.id as string)
            }}
            textValue={item.title}
        >
            <TreeItem.Content>
                {({ isExpanded, hasChildItems }) => (
                    <>
                        {isExpanded ? (
                            <IconFolderOpen className='size-4 text-blue-500' />
                        ) : hasChildItems ? (
                            <IconFolder className='size-4 text-blue-500' />
                        ) : item.title.includes('.tsx') ? (
                            <IconBrandReact className='size-4 text-[#00bcd4]' />
                        ) : item.title.includes('.ts') ? (
                            <IconBrandTypescript className='size-4 text-[#007acc]' />
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
                    title: `${page.split('/').pop()}.tsx` || 'page.tsx',
                    children: []
                }
            ]
        })
    }
    if (layouts) {
        for (const layout of layouts) {
            files.push({
                id: layout,
                title: 'layouts',
                children: [
                    {
                        id: layout,
                        title: `${layout.split('/').pop()}.tsx`,
                        children: []
                    }
                ]
            })
        }
    }

    if (uiComponents || components) {
        const componentsUsed = components?.sort().map((component: string) => ({
            id: component,
            title: `${component.split('/').pop()}.tsx`,
            children: []
        }))

        const uiComponentsUsed = uiComponents?.sort().map((component: string) => {
            return {
                id: component,
                title: `${component}.tsx`,
                children: []
            }
        })

        uiComponentsUsed?.push({
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
                componentsUsed
            ]
        } as FileNode)
    }

    const [sidebarOpen, setSidebarOpen] = useState(true)

    return (
        <div className='space-y-4'>
            <CLI command='add' items={uiComponents || []} />
            <div
                className={cn(
                    'flex w-full flex-col overflow-hidden rounded-lg border bg-[#18181b] **:border-[#3f3f46] lg:flex-row',
                    className
                )}
                {...props}
            >
                <Tree
                    aria-label='Files'
                    className={cn(
                        'max-h-none w-full min-w-0 rounded-b-none border-x-0 border-t-0 border-b text-white transition-[width] lg:w-[24rem] lg:rounded-r-none lg:rounded-l-lg lg:border-r lg:border-b-0',
                        sidebarOpen
                            ? 'min-h-40 overflow-y-auto'
                            : 'h-0 overflow-hidden border-none px-0 py-0 lg:h-auto lg:w-0 lg:py-2'
                    )}
                    defaultExpandedKeys={[1, 2, 3, 4]}
                    items={files}
                    selectionMode='none'
                >
                    {files.map(renderItem)}
                </Tree>
                <div className='relative grid w-full grid-cols-1 place-content-start bg-[#0d1117] dark:bg-[#0d1117]'>
                    <div className='relative flex h-12 items-center gap-2 border-b bg-[#18181b] px-4 py-1 text-white'>
                        <Button onPress={() => setSidebarOpen(!sidebarOpen)}>
                            <IconLayoutSidebar className='size-4 rotate-90 lg:rotate-0' />
                        </Button>
                        <Separator className='mx-2 hidden h-6 bg-[#3f3f46] lg:block' orientation='vertical' />
                        {selected === 'index' ? (
                            <IconBrandTypescript className='size-4 text-[#007acc]' />
                        ) : (
                            <IconBrandReact className='size-4 text-[#00bcd4]' />
                        )}
                        {`${selected.split('/').pop()}.${selected === 'index' ? 'ts' : 'tsx'}`}
                    </div>
                    <Code
                        className='no-scrollbar static overflow-y-auto rounded-none border-none [&_pre]:max-h-full [&_pre]:rounded-none **:[svg]:text-white'
                        code={code}
                        keepBackground={false}
                    />
                </div>
            </div>
        </div>
    )
}
