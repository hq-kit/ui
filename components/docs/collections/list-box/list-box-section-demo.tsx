'use client'

import { ListBox } from '@/components/ui'

const items = [
    {
        id: '1',
        name: 'Debian',
        distros: [
            {
                id: '1-1',
                name: 'MX'
            },
            {
                id: '1-2',
                name: 'Kali'
            },
            {
                id: '1-3',
                name: 'Deepin'
            }
        ]
    },
    {
        id: '2',
        name: 'Ubuntu',
        distros: [
            {
                id: '2-1',
                name: 'Mint'
            },
            {
                id: '2-2',
                name: 'KDE Neon'
            },
            {
                id: '2-3',
                name: 'Zorin'
            }
        ]
    },
    {
        id: '3',
        name: 'Fedora',
        distros: [
            {
                id: '3-1',
                name: 'CentOS'
            },
            {
                id: '3-2',
                name: 'Alma'
            },
            {
                id: '3-3',
                name: 'Nobara'
            }
        ]
    },
    {
        id: 4,
        name: 'Arch',
        distros: [
            {
                id: '4-1',
                name: 'Endeavour'
            },
            {
                id: '4-2',
                name: 'Garuda'
            },
            {
                id: '4-3',
                name: 'CachyOS'
            }
        ]
    }
]

export default function ListBoxSectionDemo() {
    return (
        <ListBox items={items} aria-label='Bands' selectionMode='multiple'>
            {(item) => (
                <ListBox.Section className='grid w-full gap-1' id={item.id} title={item.name} items={item.distros}>
                    {(distro) => <ListBox.Item id={distro.id}>{distro.name}</ListBox.Item>}
                </ListBox.Section>
            )}
        </ListBox>
    )
}
