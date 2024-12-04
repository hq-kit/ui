'use client'

import React from 'react'

import {
    IconBrandCleon,
    IconDownload,
    IconFilm,
    IconFolders,
    IconHome,
    IconImages,
    IconTrash
} from 'hq-icons'

import { Link, Sidebar } from '@/components/ui'

interface Props {
    rootDir: string
    setRootDir: (rootDir: string) => void
    children: React.ReactNode
}

export default function FileManagerLayout({ children, rootDir, setRootDir }: Props) {
    return (
        <Sidebar.Provider>
            <Sidebar collapsible='dock' variant='inset'>
                <Sidebar.Header>
                    <Link
                        className='flex items-center group-data-[collapsible=dock]:size-10 group-data-[collapsible=dock]:justify-center gap-x-2'
                        href='#'
                    >
                        <IconBrandCleon className='size-5' />
                        <strong className='font-medium group-data-[collapsible=dock]:hidden'>
                            FILE MANAGER
                        </strong>
                    </Link>
                </Sidebar.Header>
                <Sidebar.Content>
                    <Sidebar.Section>
                        <SidebarItem
                            onPress={() => setRootDir('')}
                            isCurrent={rootDir === ''}
                            icon={IconHome}
                            href='#'
                        >
                            Home
                        </SidebarItem>
                        <SidebarItem
                            onPress={() => setRootDir('Downloads/')}
                            isCurrent={rootDir.startsWith('Downloads/')}
                            icon={IconDownload}
                            href='#'
                        >
                            Downloads
                        </SidebarItem>
                        <SidebarItem
                            onPress={() => setRootDir('Documents/')}
                            isCurrent={rootDir.startsWith('Documents/')}
                            icon={IconFolders}
                            href='#'
                        >
                            Documents
                        </SidebarItem>
                        <SidebarItem
                            onPress={() => setRootDir('Music/')}
                            isCurrent={rootDir.startsWith('Music/')}
                            icon={IconImages}
                            href='#'
                        >
                            Music
                        </SidebarItem>
                        <SidebarItem
                            onPress={() => setRootDir('Videos/')}
                            isCurrent={rootDir.startsWith('Videos/')}
                            icon={IconFilm}
                            href='#'
                        >
                            Videos
                        </SidebarItem>
                    </Sidebar.Section>
                    <Sidebar.Section>
                        <SidebarItem
                            onPress={() => setRootDir('Trash/')}
                            isCurrent={rootDir === 'Trash/'}
                            icon={IconTrash}
                            href='#'
                        >
                            Trash
                        </SidebarItem>
                    </Sidebar.Section>
                </Sidebar.Content>
                <Sidebar.Rail />
            </Sidebar>
            <Sidebar.Inset>{children}</Sidebar.Inset>
        </Sidebar.Provider>
    )
}

function SidebarItem({ icon: Icon, ...props }: React.ComponentProps<typeof Sidebar.Item>) {
    return <Sidebar.Item isCurrent={props.isCurrent} icon={Icon} {...props} />
}
