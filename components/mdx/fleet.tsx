'use client'

import { blocks } from '@/components/docs/generated/blocks'

import blockSource from '@/components/docs/generated/blocks.json'
import uiSource from '@/components/docs/generated/previews.json'
import { CLI } from '@/components/mdx/cli'
import { Code } from '@/components/mdx/code'
import { Separator, Tooltip } from '@/components/ui'
import { cn } from '@/lib/utils'

import {
    IconBrandCss3,
    IconBrandJavascript,
    IconBrandReact,
    IconBrandTypescript,
    IconChevronRight,
    IconFileCode,
    IconFolder,
    IconLayoutSidebar
} from '@tabler/icons-react'
import { useState } from 'react'
import { Button, Collection, Disclosure, DisclosureGroup, DisclosurePanel } from 'react-aria-components'
import { transform } from 'sucrase'

type FileNode = {
    id: string
    textValue: string
    children?: FileNode[]
}

export function Fleet({ page }: { page: string }) {
    const [file, setFile] = useState<string>('page.tsx')
    const [code, setCode] = useState<string>(blockSource[`${page}/${file}` as keyof typeof blockSource])

    const [explorer, setExplorer] = useState<boolean>(true)

    const [isTs, setIsTs] = useState<boolean>(true)

    const toggleTsx = () => {
        setIsTs(!isTs)
    }

    const block = blocks.find((b) => b.slug === page)!

    const files: FileNode[] = [
        {
            id: 'app',
            textValue: 'app',
            children: [
                { id: 'page.tsx', textValue: 'page.tsx' },
                { id: 'layout.tsx', textValue: 'layout.tsx' },
                { id: 'globals.css', textValue: 'globals.css' }
            ]
        },
        {
            id: 'components',
            textValue: 'components',
            children: [
                {
                    id: 'ui',
                    textValue: 'ui',
                    children: [
                        ...block.uiComponents
                            .sort((a, b) => a.localeCompare(b))
                            .map((c) => ({ id: `ui-${c}`, textValue: c })),
                        { id: 'index.ts', textValue: 'index.ts' }
                    ]
                },
                ...block.components.sort((a, b) => a.localeCompare(b)).map((c) => ({ id: c, textValue: c }))
            ]
        },
        {
            id: 'lib',
            textValue: 'lib',
            children: [
                { id: 'utils.ts', textValue: 'utils.ts' },
                { id: 'hooks.ts', textValue: 'hooks.ts' }
            ]
        }
    ]

    const selectFile = (file: string) => {
        if (file === 'index.ts') {
            const content = block.uiComponents.map((c) => `export * from './${c}'`).join('\n')
            setCode(content)
        } else if (file.startsWith('ui')) {
            const content = uiSource[`${file.replace('ui-', '').replace('.tsx', '')}` as keyof typeof uiSource].raw
            setCode(content)
        } else if (file === 'utils.ts' || file === 'hooks.ts' || file === 'globals.css') {
            const content = blockSource[file as keyof typeof blockSource]
            setCode(content)
        } else {
            const content = blockSource[`${page}/${file}` as keyof typeof blockSource]
            setCode(content)
        }
        setFile(file)
    }

    const renderItem = (item: FileNode) => (
        <Disclosure key={item.id} className='w-full' id={item.id}>
            {item.children && item.children.length > 0 ? (
                <>
                    <Button
                        slot='trigger'
                        className='flex w-full cursor-pointer items-center gap-2 p-2 font-medium text-sm text-white hover:bg-[#34343a] aria-expanded:*:data-[slot=chevron]:rotate-90'
                    >
                        <IconChevronRight className='size-4 transition-transform' data-slot='chevron' />
                        <IconFolder className='size-4' data-slot='folder' />
                        {item.textValue}
                    </Button>
                    <DisclosurePanel
                        data-slot='panel'
                        className='w-full **:data-[slot=chevron]:ml-6 **:data-[slot=file]:**:[svg]:ml-6 **:data-[slot=panel]:**:[svg]:ml-12'
                    >
                        <Collection items={item.children}>{(item) => renderItem(item)}</Collection>
                    </DisclosurePanel>
                </>
            ) : (
                <Button
                    data-slot='file'
                    onPress={() => selectFile(item.id)}
                    className={cn(
                        'flex w-full cursor-pointer items-center gap-2 p-2 font-medium text-sm text-white hover:bg-[#34343a]',
                        file === item.id && 'bg-[#34343a]'
                    )}
                >
                    {item.textValue.endsWith('.tsx') || item.textValue.endsWith('.jsx') ? (
                        <IconBrandReact className='size-4 text-[#00bcd4]' />
                    ) : item.textValue.endsWith('.ts') && isTs ? (
                        <IconBrandTypescript className='size-4 text-[#007acc]' />
                    ) : item.textValue.endsWith('.ts') ? (
                        <IconBrandJavascript className='size-4 text-[#f7df1e]' />
                    ) : item.textValue.endsWith('.css') ? (
                        <IconBrandCss3 className='size-4 text-[#2965f1]' />
                    ) : (
                        <IconFileCode />
                    )}
                    {isTs ? item.textValue.replaceAll('.js', '.ts') : item.textValue.replaceAll('.ts', '.js')}
                </Button>
            )}
        </Disclosure>
    )

    return (
        <section className='flex flex-col gap-4'>
            <CLI noMessage command='add' items={block.uiComponents.map((c) => c.replaceAll('.tsx', ''))} />
            <div className='flex w-full flex-col overflow-hidden rounded-lg **:border-[#3f3f46] lg:aspect-video lg:flex-row'>
                <DisclosureGroup
                    allowsMultipleExpanded
                    defaultExpandedKeys={['app', 'components']}
                    className={cn(
                        'flex flex-col gap-0.5 bg-[#18181b] text-sm outline-hidden dark:bg-[#18181b]',
                        'w-full overflow-hidden rounded-b-none text-white transition-[height] lg:transition-[width]',
                        explorer
                            ? 'h-[20rem] overflow-y-auto border-b lg:h-full lg:w-[24rem] lg:border-r lg:border-b-0'
                            : 'h-0 border-r-none lg:w-0'
                    )}
                    aria-label='Files'
                >
                    {files.map(renderItem)}
                </DisclosureGroup>
                <div
                    className={cn(
                        'relative grid w-full grid-cols-1 place-content-start bg-[#0d1117] dark:bg-[#0d1117]',
                        !explorer && 'col-span-full'
                    )}
                >
                    <div className='relative flex h-12 items-center gap-2 border-b bg-[#18181b] px-2 py-1 text-white'>
                        <Tooltip>
                            <Button
                                className='flex size-9 cursor-pointer items-center justify-center rounded-lg pressed:bg-zinc-400/50 hover:bg-zinc-400/40'
                                onPress={() => setExplorer(!explorer)}
                            >
                                <IconLayoutSidebar className='size-4 rotate-90 lg:rotate-0' />
                            </Button>
                            <Tooltip.Content>Toggle sidebar</Tooltip.Content>
                        </Tooltip>
                        <Separator orientation='vertical' className='mr-2 hidden h-6 bg-[#3f3f46] lg:block' />
                        {file.endsWith('.ts') && isTs ? (
                            <IconBrandTypescript className='size-4 text-[#007acc]' />
                        ) : file.endsWith('.ts') ? (
                            <IconBrandJavascript className='size-4 text-[#f7df1e]' />
                        ) : file.endsWith('.tsx') || file.endsWith('.jsx') ? (
                            <IconBrandReact className='size-4 text-[#00bcd4]' />
                        ) : file.endsWith('.css') ? (
                            <IconBrandCss3 className='size-4 text-[#2965f1]' />
                        ) : (
                            <IconFileCode className='size-4 text-white' />
                        )}
                        <span className='truncate'>
                            {isTs
                                ? file.replaceAll('ui-', '').replaceAll('.js', '.ts')
                                : file.replaceAll('ui-', '').replaceAll('.ts', '.js')}
                        </span>
                        <Tooltip>
                            <Button
                                onPress={toggleTsx}
                                className='mr-10 ml-auto flex size-9 cursor-pointer items-center justify-center rounded-lg pressed:bg-zinc-400/50 hover:bg-zinc-400/40'
                            >
                                <IconBrandJavascript
                                    className={cn(
                                        'size-6 rotate-0 scale-100 text-[#f7df1e] transition-all duration-200',
                                        isTs && 'rotate-90 scale-0'
                                    )}
                                />
                                <IconBrandTypescript
                                    className={cn(
                                        'absolute size-6 rotate-90 scale-0 text-[#007acc] transition-all duration-200',
                                        isTs && 'rotate-0 scale-100'
                                    )}
                                />
                            </Button>
                            <Tooltip.Content>{isTs ? 'Switch to JavaScript' : 'Switch to TypeScript'}</Tooltip.Content>
                        </Tooltip>
                    </div>
                    <Code
                        code={
                            isTs
                                ? code
                                : transform(code, {
                                      transforms: ['typescript', 'jsx'],
                                      jsxRuntime: 'preserve',
                                      disableESTransforms: true
                                  }).code
                        }
                        withoutSwitcher
                        lang={isTs ? 'tsx' : 'jsx'}
                        keepBackground={true}
                        className='**:[button]:-mt-0.5 dark static overflow-auto rounded-none border-none p-4 **:[pre]:max-h-full **:[svg]:text-white'
                    />
                </div>
            </div>
        </section>
    )
}
