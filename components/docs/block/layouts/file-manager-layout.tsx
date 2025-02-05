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

import { Link, Sidebar, SidebarInset, SidebarProvider } from '@/components/ui'

interface Props {
    rootDir: string
    setRootDir: (rootDir: string) => void
    children: React.ReactNode
}

export default function FileManagerLayout({ children, rootDir, setRootDir }: Props) {
    return (
        <SidebarProvider>
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
                        <SidebarItem
                            onPress={() => setRootDir('')}
                            isCurrent={rootDir === ''}
                            icon={IconHome}
                            href='#'
                            tooltip='Home'
                        />
                        <SidebarItem
                            onPress={() => setRootDir('Downloads/')}
                            isCurrent={rootDir.startsWith('Downloads/')}
                            icon={IconDownload}
                            href='#'
                            tooltip='Downloads'
                        />
                        <SidebarItem
                            onPress={() => setRootDir('Documents/')}
                            isCurrent={rootDir.startsWith('Documents/')}
                            icon={IconFolders}
                            href='#'
                            tooltip='Documents'
                        />
                        <SidebarItem
                            onPress={() => setRootDir('Music/')}
                            isCurrent={rootDir.startsWith('Music/')}
                            icon={IconImages}
                            href='#'
                            tooltip='Music'
                        />
                        <SidebarItem
                            onPress={() => setRootDir('Videos/')}
                            isCurrent={rootDir.startsWith('Videos/')}
                            icon={IconFilm}
                            href='#'
                            tooltip='Videos'
                        />
                    </Sidebar.Section>
                    <Sidebar.Section>
                        <SidebarItem
                            onPress={() => setRootDir('Trash/')}
                            isCurrent={rootDir === 'Trash/'}
                            icon={IconTrash}
                            href='#'
                            tooltip='Trash'
                        />
                    </Sidebar.Section>
                </Sidebar.Content>
                <Sidebar.Rail />
            </Sidebar>
            <SidebarInset>{children}</SidebarInset>
        </SidebarProvider>
    )
}

function SidebarItem({
    icon: Icon,
    ...props
}: React.ComponentProps<typeof Sidebar.Item> & { icon: React.FC<React.SVGProps<SVGSVGElement>> }) {
    return (
        <Sidebar.Item tooltip={props.tooltip} isCurrent href='#' {...props}>
            <Icon />
            <Sidebar.Label>{props.tooltip}</Sidebar.Label>
        </Sidebar.Item>
    )
}
