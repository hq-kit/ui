'use client'

import React from 'react'

import { IconBrandLinux, IconClipboardPen, IconPanelLeftOpen } from 'hq-icons'
import { usePathname } from 'next/navigation'

import previews from '@/components/docs/generated/previews.json'
import { Link, Sidebar } from '@/components/ui'
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
        <Sidebar.Provider>
            <Sidebar variant='inset'>
                <Sidebar.Header>
                    <Link
                        className='flex items-center group-data-[collapsible=dock]:size-10 group-data-[collapsible=dock]:justify-center gap-x-2'
                        href='/docs/components/layouts/sidebar'
                    >
                        <IconBrandLinux className='size-5' />
                        <strong className='font-medium group-data-[collapsible=dock]:hidden'>
                            Linux
                        </strong>
                    </Link>
                </Sidebar.Header>
                <Sidebar.Content>
                    <Sidebar.Section title='Auth Section' collapsible>
                        {blocks?.map(
                            (block) =>
                                block.includes('auth') && (
                                    <SidebarItem
                                        key={block}
                                        icon={IconClipboardPen}
                                        href={`/${block}`}
                                    >
                                        {goodTitle(
                                            block.split('/').pop()?.replace('auth-form-', '') ||
                                                'Sample Page'
                                        )}
                                    </SidebarItem>
                                )
                        )}
                    </Sidebar.Section>
                    <Sidebar.Section title='Pages' collapsible>
                        {blocks?.map(
                            (block) =>
                                !block.includes('auth') && (
                                    <SidebarItem
                                        key={block}
                                        icon={IconClipboardPen}
                                        href={`/${block}`}
                                    >
                                        {goodTitle(block.split('/').pop() || 'Sample Page')}
                                    </SidebarItem>
                                )
                        )}
                    </Sidebar.Section>
                </Sidebar.Content>
            </Sidebar>
            <header className='md:sticky ml-12 md:ml-0 z-50 absolute justify-between sm:justify-start top-0 md:top-16 h-[3.57rem] px-4 flex items-center gap-x-2'>
                <Sidebar.Trigger className='-mx-2'>
                    <IconPanelLeftOpen />
                </Sidebar.Trigger>
            </header>
            <Sidebar.Inset>
                <div className='p-4 md:p-6'>{children}</div>
            </Sidebar.Inset>
        </Sidebar.Provider>
    )
}

function SidebarItem({ icon: Icon, ...props }: React.ComponentProps<typeof Sidebar.Item>) {
    const pathname = usePathname()
    return <Sidebar.Item isCurrent={pathname === props.href} icon={Icon} {...props} />
}
