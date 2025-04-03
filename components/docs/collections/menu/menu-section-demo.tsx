'use client'

import { IconBrandArch, IconBrandDebian, IconBrandFedora, IconBrandUbuntu } from 'hq-icons'

import { Menu } from '@/components/ui'

const items = [
    {
        id: '1',
        name: 'Debian',
        icon: IconBrandDebian,
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
        icon: IconBrandUbuntu,
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
        icon: IconBrandFedora,
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
        icon: IconBrandArch,
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

export default function MenuSectionDemo() {
    return (
        <Menu>
            <Menu.Trigger>Open</Menu.Trigger>
            <Menu.Content items={items}>
                {(item) => (
                    <Menu.Section title={item.name} items={item.distros}>
                        {(distro) => (
                            <Menu.Item textValue={distro.name}>
                                <item.icon />
                                <Menu.Label>{distro.name}</Menu.Label>
                            </Menu.Item>
                        )}
                    </Menu.Section>
                )}
            </Menu.Content>
        </Menu>
    )
}
