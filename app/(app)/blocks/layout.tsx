'use client'

import React from 'react'

import { IconAppWindowMac, IconBrandLinux } from 'hq-icons'
import { usePathname } from 'next/navigation'

import previews from '@/components/docs/generated/previews.json'
import { Link, Sidebar, SidebarInset, SidebarProvider } from '@/components/ui'
import { goodTitle } from '@/lib/utils'

export default function Layout({ children }: { children: React.ReactNode }) {
    const [blocks, setBlocks] = React.useState<string[]>([])
    React.useEffect(() => {
        const blocks = Object.keys(previews)
            .filter((c) => c.includes('examples'))
            .map((c) => c.replace('block/', 'blocks/'))
        setBlocks(blocks)
    }, [])

    return (
        <SidebarProvider>
            <Sidebar variant='inset'>
                <Sidebar.Header>
                    <Link
                        className='flex items-center gap-x-2 group-data-[collapsible=dock]:size-10 group-data-[collapsible=dock]:justify-center'
                        href='/docs/components/layouts/sidebar'
                    >
                        <IconBrandLinux className='size-5' />
                        <strong className='font-medium group-data-[collapsible=dock]:hidden'>
                            Linux
                        </strong>
                    </Link>
                </Sidebar.Header>
                <Sidebar.Content>
                    <Sidebar.SectionGroup>
                        <Sidebar.Section title='Auth Section'>
                            {blocks?.map(
                                (block) =>
                                    block.includes('auth') && (
                                        <Sidebar.Item
                                            key={block}
                                            href={`/${block}`}
                                            tooltip={goodTitle(
                                                block.split('/').pop()?.replace('auth-form-', '') ||
                                                    'Sample Page'
                                            )}
                                        >
                                            <Sidebar.Label>
                                                {goodTitle(block.split('/').pop() || 'Sample Page')}
                                            </Sidebar.Label>
                                        </Sidebar.Item>
                                    )
                            )}
                        </Sidebar.Section>
                        <Sidebar.Section title='Pages'>
                            {blocks?.map(
                                (block) =>
                                    !block.includes('auth') && (
                                        <SidebarItem
                                            icon={IconAppWindowMac}
                                            key={block}
                                            href={`/${block}`}
                                            tooltip={goodTitle(
                                                block.split('/').pop() || 'Sample Page'
                                            )}
                                        />
                                    )
                            )}
                        </Sidebar.Section>
                    </Sidebar.SectionGroup>
                </Sidebar.Content>
            </Sidebar>
            <header className='absolute top-0 z-50 ml-12 flex h-[3.57rem] items-center justify-between gap-x-2 px-4 sm:justify-start md:sticky md:top-16 md:ml-0'>
                <Sidebar.Trigger className='-mx-2' />
            </header>
            <SidebarInset>
                <div className='p-4 md:p-6'>{children}</div>
            </SidebarInset>
        </SidebarProvider>
    )
}

function SidebarItem({
    icon: Icon,
    ...props
}: React.ComponentProps<typeof Sidebar.Item> & { icon: React.FC }) {
    const pathname = usePathname()
    return (
        <Sidebar.Item isCurrent={pathname === props.href} {...props}>
            <Icon />
            <Sidebar.Label>{props.tooltip}</Sidebar.Label>
        </Sidebar.Item>
    )
}
