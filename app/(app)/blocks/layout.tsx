'use client'

import React from 'react'

import { IconAppWindowMac, IconBlocks, IconPanelsTopLeft } from 'hq-icons'
import { usePathname } from 'next/navigation'

import previews from '@/components/docs/generated/previews.json'
import { Sidebar } from '@/components/ui'
import { goodTitle } from '@/lib/utils'

export default function Layout({ children }: { children: React.ReactNode }) {
    const [blocks, setBlocks] = React.useState<string[]>([])
    React.useEffect(() => {
        const blocks = Object.keys(previews)
            .filter((c) => c.includes('examples'))
            .map((c) => c.replace('block/', 'blocks/'))
        setBlocks(blocks)
    }, [])
    const pathname = usePathname()

    return (
        <div className='flex'>
            <Sidebar className='max-h-[80vh] min-h-[80vh]' variant='float' collapsible='dock'>
                <Sidebar.Header>
                    <IconBlocks />
                    <Sidebar.Label>HQ Blocks</Sidebar.Label>
                </Sidebar.Header>
                <Sidebar.Content>
                    <Sidebar.Section title='Auth Section'>
                        {blocks?.map(
                            (block) =>
                                block.includes('auth') && (
                                    <Sidebar.Item key={block} href={`/${block}`} isCurrent={`/${block}` === pathname}>
                                        <IconPanelsTopLeft />
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
                                    <Sidebar.Item key={block} href={`/${block}`} isCurrent={`/${block}` === pathname}>
                                        <IconAppWindowMac />
                                        <Sidebar.Label>
                                            {goodTitle(block.split('/').pop() || 'Sample Page')}
                                        </Sidebar.Label>
                                    </Sidebar.Item>
                                )
                        )}
                    </Sidebar.Section>
                </Sidebar.Content>
                <Sidebar.Rail />
                <Sidebar.Trigger />
            </Sidebar>
            <div className='p-4 md:p-6 w-full'>{children}</div>
        </div>
    )
}
