'use client'

import { IconBlocks, IconBook, IconColorSwatch, IconPalette } from '@tabler/icons-react'
import { Tabs } from '@/components/ui'

const items = [
    { url: '/', label: 'Home' },
    { url: 'https://hq-ui.vercel.app/docs', label: 'Components', icon: IconBook },
    { url: 'https://hq-ui.vercel.app/blocks', label: 'Blocks', icon: IconBlocks },
    { url: 'https://hq-ui.vercel.app/colors', label: 'Colors', icon: IconPalette },
    { url: 'https://hq-ui.vercel.app/themes', label: 'Themes', icon: IconColorSwatch }
]

export default function TabsLinkDemo() {
    return (
        <Tabs aria-label='Navbar'>
            <Tabs.List items={items}>
                {(item) => (
                    <Tabs.Label href={item.url} id={item.label}>
                        {item.icon && <item.icon />}
                        {item.label}
                    </Tabs.Label>
                )}
            </Tabs.List>
        </Tabs>
    )
}
