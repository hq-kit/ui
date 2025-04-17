'use client'

import type React from 'react'

import { IconBrandCleon, IconDownload, IconFilm, IconFolders, IconHome, IconMusicNotes, IconTrash } from 'hq-icons'

import { Link, Sidebar, SidebarInset } from '@/components/ui'

interface Props {
    rootDir: string
    setRootDir: (rootDir: string) => void
    children: React.ReactNode
}

export default function FileManagerLayout({ children, rootDir, setRootDir }: Props) {
    return (
        <div className='flex'>
            <Sidebar collapsible='dock' variant='inset'>
                <Sidebar.Header>
                    <Link
                        className='flex items-center gap-x-2 group-data-[collapsible=dock]:size-10 group-data-[collapsible=dock]:justify-center'
                        href='#'
                    >
                        <IconBrandCleon className='size-5' />
                        <Sidebar.Label className='font-medium'>FILE MANAGER</Sidebar.Label>
                    </Link>
                </Sidebar.Header>
                <Sidebar.Content>
                    <Sidebar.Section>
                        <Sidebar.Item onPress={() => setRootDir('')} isCurrent={rootDir === ''} href='#'>
                            <IconHome />
                            <Sidebar.Label>Home</Sidebar.Label>
                        </Sidebar.Item>
                        <Sidebar.Item
                            onPress={() => setRootDir('Downloads/')}
                            isCurrent={rootDir.startsWith('Downloads/')}
                            href='#'
                        >
                            <IconDownload />
                            <Sidebar.Label>Downloads</Sidebar.Label>
                        </Sidebar.Item>
                        <Sidebar.Item
                            onPress={() => setRootDir('Documents/')}
                            isCurrent={rootDir.startsWith('Documents/')}
                            href='#'
                        >
                            <IconFolders />
                            <Sidebar.Label>Documents</Sidebar.Label>
                        </Sidebar.Item>
                        <Sidebar.Item
                            onPress={() => setRootDir('Music/')}
                            isCurrent={rootDir.startsWith('Music/')}
                            href='#'
                        >
                            <IconMusicNotes />
                            <Sidebar.Label>Music</Sidebar.Label>
                        </Sidebar.Item>
                        <Sidebar.Item
                            onPress={() => setRootDir('Videos/')}
                            isCurrent={rootDir.startsWith('Videos/')}
                            href='#'
                        >
                            <IconFilm />
                            <Sidebar.Label>Videos</Sidebar.Label>
                        </Sidebar.Item>
                    </Sidebar.Section>
                    <Sidebar.Section>
                        <Sidebar.Item onPress={() => setRootDir('Trash/')} isCurrent={rootDir === 'Trash/'} href='#'>
                            <IconTrash />
                            <Sidebar.Label>Trash</Sidebar.Label>
                        </Sidebar.Item>
                    </Sidebar.Section>
                </Sidebar.Content>
                <Sidebar.Rail />
            </Sidebar>
            <SidebarInset>{children}</SidebarInset>
        </div>
    )
}
