'use client'

import React from 'react'

import { getFileIcon, mapFilePaths, rootFolders } from 'components/file-manager/file-list'
import { IconLayoutGrid, IconLayoutList, IconSearch, IconSquare, IconSquareCheckBig } from 'hq-icons'
import FileManagerLayout from 'layouts/file-manager-layout'

import { Breadcrumbs, Button, GridList, SearchField, Toggle } from '@/components/ui'

export default function FileManager() {
    const [view, setView] = React.useState<'grid' | 'stack'>('grid')
    const [selectionMode, setSelectionMode] = React.useState<'single' | 'multiple'>('single')
    const [dir, setDir] = React.useState('')
    const paths = mapFilePaths(rootFolders)

    const [files, setFiles] = React.useState(paths)

    React.useEffect(() => {
        setFiles(paths.filter((path) => path.startsWith(dir)))
    }, [dir, paths])

    return (
        <FileManagerLayout rootDir={dir} setRootDir={setDir}>
            <header className='sticky top-0 flex h-[3.57rem] items-center justify-between gap-x-2 px-4'>
                <span className='flex items-center gap-x-4'>
                    <Breadcrumbs
                        onAction={(v) => setDir(`${v}/`)}
                        className='hidden md:flex'
                        items={dir
                            .split('/')
                            .filter((item) => item !== '')
                            .map((item) => ({ id: item }))}
                    >
                        {(item) => <Breadcrumbs.Item id={item.id}>{item.id}</Breadcrumbs.Item>}
                    </Breadcrumbs>
                </span>
                <div className='flex items-center gap-x-2'>
                    <Button variant='ghost' className='md:hidden' aria-label='Search...' icon>
                        <IconSearch />
                    </Button>
                    <SearchField aria-label='Search' className='hidden md:inline-flex' />
                    <Button
                        icon
                        variant='ghost'
                        aria-label='View'
                        onPress={() => setView(view === 'stack' ? 'grid' : 'stack')}
                    >
                        {view === 'stack' ? <IconLayoutList /> : <IconLayoutGrid className='size-5' />}
                    </Button>
                    <Toggle
                        icon
                        aria-label='Selection Mode'
                        isSelected={selectionMode === 'multiple'}
                        onChange={() => setSelectionMode(selectionMode === 'multiple' ? 'single' : 'multiple')}
                    >
                        {({ isSelected }) => (isSelected ? <IconSquareCheckBig /> : <IconSquare />)}
                    </Toggle>
                </div>
            </header>
            <div className='p-4 lg:p-6'>
                <GridList
                    aria-label='Files'
                    selectionBehavior='toggle'
                    selectionMode={selectionMode}
                    columns={view === 'stack' ? 1 : 'auto'}
                    gap={view === 'stack' ? 0 : 2}
                    items={[
                        ...new Map(
                            files.map((item) => [
                                item.replace(dir, '').split('/')[0],
                                { id: item.replace(dir, '').split('/')[0] }
                            ])
                        ).values()
                    ]}
                >
                    {(item) => (
                        <GridList.Item
                            textValue={item.id}
                            id={item.id}
                            onAction={() => !item.id.includes('.') && setDir(`${dir + item.id.split('/')[0]}/`)}
                        >
                            {getFileIcon(item.id.split('.').pop() || 'folder')}
                            {item.id}
                        </GridList.Item>
                    )}
                </GridList>
            </div>
        </FileManagerLayout>
    )
}
