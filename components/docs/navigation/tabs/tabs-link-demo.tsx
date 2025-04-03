'use client'

import { IconBlocks, IconBookCopy, IconPalette, IconShapes, IconSwatchBook } from 'hq-icons'

import { Tabs } from '@/components/ui'

const items = [
    { url: '/', label: 'Home' },
    { url: 'https://hq-ui.vercel.app/docs', label: 'Components', icon: IconBookCopy },
    { url: 'https://hq-ui.vercel.app/blocks', label: 'Blocks', icon: IconBlocks },
    { url: 'https://hq-ui.vercel.app/icons', label: 'Icons', icon: IconShapes },
    { url: 'https://hq-ui.vercel.app/colors', label: 'Colors', icon: IconPalette },
    { url: 'https://hq-ui.vercel.app/themes', label: 'Themes', icon: IconSwatchBook }
]

export default function TabsLinkDemo() {
    return (
        <Tabs aria-label='Navbar'>
            <Tabs.List items={items}>
                {(item) => (
                    <Tabs.Label id={item.label} href={item.url}>
                        {item.icon && <item.icon />}
                        {item.label}
                    </Tabs.Label>
                )}
            </Tabs.List>
        </Tabs>
    )
}
