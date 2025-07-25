'use client'

import { Menu } from '@/components/ui'

const items = [
    {
        id: '1',
        name: 'Jawa Timur',
        distros: [
            {
                id: '1-1',
                name: 'Surabaya'
            },
            {
                id: '1-2',
                name: 'Mojokerto'
            },
            {
                id: '1-3',
                name: 'Malang'
            }
        ]
    },
    {
        id: '2',
        name: 'Jawa Barat',
        distros: [
            {
                id: '2-1',
                name: 'Bandung'
            },
            {
                id: '2-2',
                name: 'Cirebon'
            },
            {
                id: '2-3',
                name: 'Bogor'
            }
        ]
    },
    {
        id: '3',
        name: 'Jawa Tengah',
        distros: [
            {
                id: '3-1',
                name: 'Semarang'
            },
            {
                id: '3-2',
                name: 'Solo'
            },
            {
                id: '3-3',
                name: 'Kudus'
            }
        ]
    },
    {
        id: 4,
        name: 'Banten',
        distros: [
            {
                id: '4-1',
                name: 'Serang'
            },
            {
                id: '4-2',
                name: 'Tangerang'
            },
            {
                id: '4-3',
                name: 'Tasikmalaya'
            }
        ]
    }
]

export default function MenuSectionDemo() {
    return (
        <Menu>
            <Menu.Trigger>Open</Menu.Trigger>
            <Menu.Content items={items}>
                {(item) => (
                    <Menu.Section title={item.name} items={item.distros}>
                        {(distro) => (
                            <Menu.Item textValue={distro.name}>
                                <Menu.Label>{distro.name}</Menu.Label>
                            </Menu.Item>
                        )}
                    </Menu.Section>
                )}
            </Menu.Content>
        </Menu>
    )
}
