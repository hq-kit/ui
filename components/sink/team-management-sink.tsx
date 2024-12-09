'use client'

import { IconEye, IconLock } from 'hq-icons'

import { Avatar, AvatarGroup, Button, Card, ColorPicker, Menu, Toggle } from '@/components/ui'

export default function TeamManagementSink() {
    return (
        <Card className='p-2 flex items-center justify-around gap-4'>
            <AvatarGroup items={roles}>
                {(item) => (
                    <Avatar
                        id={item.id}
                        tooltip={item.name}
                        src={`https://i.pravatar.cc/150?img=3${item.id}`}
                    />
                )}
            </AvatarGroup>
            <ColorPicker defaultValue={'#ff0000'} label='Color' />
            <Menu>
                <Button variant='success'>Options</Button>
                <Menu.Content items={roles}>
                    {(item) => (
                        <Menu.Item id={item.id} textValue={item.name}>
                            <Menu.ItemDetails label={item.name} description={item.description} />
                        </Menu.Item>
                    )}
                </Menu.Content>
            </Menu>
            <Toggle.Group>
                <Toggle>
                    <IconLock />
                    Lock
                </Toggle>
                <Toggle>
                    <IconEye />
                    Readonly
                </Toggle>
            </Toggle.Group>
        </Card>
    )
}

const roles = [
    { id: '1', name: 'Admin', description: 'Has full access to all resources' },
    { id: '2', name: 'Editor', description: 'Can edit content but has limited access to settings' },
    { id: '3', name: 'Viewer', description: 'Can view content but cannot make changes' },
    { id: '4', name: 'Contributor', description: 'Can contribute content for review' },
    { id: '5', name: 'Guest', description: 'Limited access, mostly for viewing purposes' }
]
