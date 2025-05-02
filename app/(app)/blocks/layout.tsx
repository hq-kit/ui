'use client'

import { IconAppWindowMac, IconBlocks, IconPanelsTopLeft } from 'hq-icons'
import { usePathname } from 'next/navigation'
import { type ReactNode, useEffect, useState } from 'react'

import previews from '@/components/docs/generated/previews.json'
import { Sidebar } from '@/components/ui'
import { titleCase } from '@/lib/utils/modifiers'

export default function Layout({ children }: { children: ReactNode }) {
    const [blocks, setBlocks] = useState<string[]>([])
    useEffect(() => {
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
                                            {titleCase(block.split('/').pop() || 'Sample Page')}
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
                                            {titleCase(block.split('/').pop() || 'Sample Page')}
                                        </Sidebar.Label>
                                    </Sidebar.Item>
                                )
                        )}
                    </Sidebar.Section>
                </Sidebar.Content>
                <Sidebar.Rail />
                <Sidebar.Trigger />
            </Sidebar>
            <div className='w-full p-4 md:p-6'>{children}</div>
        </div>
    )
}
