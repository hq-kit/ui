'use client'

import React from 'react'

import { Avatar, Command } from '@/components/ui'

export default function CommandSectionDemo() {
    return (
        <Command>
            <Command.Section title='Pages'>
                <Command.Item textValue='home'>
                    <Command.Label>Home</Command.Label>
                </Command.Item>
                <Command.Item textValue='documenation'>
                    <Command.Label>Documentation</Command.Label>
                </Command.Item>
            </Command.Section>
            <Command.Separator />
            <Command.Section title='Users' items={users}>
                {(item) => (
                    <Command.Item id={item.id} textValue={item.name}>
                        <Avatar src={item.image_url} />
                        <Command.Label>{item.name}</Command.Label>
                    </Command.Item>
                )}
            </Command.Section>
        </Command>
    )
}

const users = [
    { id: 1, name: 'Barbara Kirlin Sr.', image_url: 'https://i.pravatar.cc/150?img=1' },
    { id: 2, name: 'Rosemarie Koch', image_url: 'https://i.pravatar.cc/150?img=2' },
    { id: 3, name: 'Mrs. Reva Heaney Jr.', image_url: 'https://i.pravatar.cc/150?img=3' },
    { id: 4, name: 'Ms. Ettie Abshire DVM', image_url: 'https://i.pravatar.cc/150?img=4' },
    { id: 5, name: 'Bria Ziemann', image_url: 'https://i.pravatar.cc/150?img=5' },
    { id: 6, name: 'Heloise Borer Sr.', image_url: 'https://i.pravatar.cc/150?img=6' },
    {
        id: 7,
        name: 'Miss Jacinthe Gerlach DVM',
        image_url: 'https://i.pravatar.cc/150?img=7'
    },
    {
        id: 8,
        name: 'Miss Stephania Schaefer Sr.',
        image_url: 'https://i.pravatar.cc/150?img=8'
    },
    { id: 9, name: 'Kevon Hackett MD', image_url: 'https://i.pravatar.cc/150?img=9' },
    { id: 10, name: 'Tom Ledner', image_url: 'https://i.pravatar.cc/150?img=10' }
]
