'use client'

import { useState } from 'react'

import { IconBan, IconRotateCcw, IconTrash } from 'hq-icons'
import type { Key } from 'react-aria-components'

import { Button, Drawer, Menu } from '@/components/ui'

export default function DrawerMenuDemo() {
    const [state, setState] = useState<Key>('')
    const [loading, setLoading] = useState<boolean>(false)

    const executeAction = (action: string) => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            setState('')
            alert(action)
        }, 3000)
    }

    const actions = (t: Key) => {
        switch (t) {
            case 'delete':
                return {
                    title: 'Delete User',
                    description: 'Are you sure you want to delete this user?',
                    confirmText: 'Delete',
                    action: () => executeAction(t)
                }

            case 'ban':
                return {
                    title: 'Ban User',
                    description: 'Are you sure you want to ban this user?',
                    confirmText: 'Ban',
                    action: () => executeAction(t)
                }

            case 'restore':
                return {
                    title: 'Restore User',
                    description: 'Are you sure you want to restore this user?',
                    confirmText: 'Restore',
                    action: () => executeAction(t)
                }
            default:
                return
        }
    }
    return (
        <>
            <Menu>
                <Button>Options</Button>
                <Menu.Content onAction={setState}>
                    <Menu.Item id='delete' isDanger>
                        <IconTrash />
                        <Menu.Label>Delete</Menu.Label>
                    </Menu.Item>
                    <Menu.Item id='ban' isDanger>
                        <IconBan />
                        <Menu.Label>Ban</Menu.Label>
                    </Menu.Item>
                    <Menu.Item id='restore'>
                        <IconRotateCcw />
                        <Menu.Label>Restore</Menu.Label>
                    </Menu.Item>
                </Menu.Content>
            </Menu>

            <Drawer.Content isOpen={state !== ''} onOpenChange={() => setState('')}>
                <Drawer.Header>
                    <Drawer.Title>{actions(state)?.title}</Drawer.Title>
                    <Drawer.Description>{actions(state)?.description}</Drawer.Description>
                </Drawer.Header>
                <Drawer.Footer>
                    <Button slot='close' variant='outline'>
                        Cancel
                    </Button>
                    <Button
                        variant={state === 'restore' ? 'primary' : 'danger'}
                        isDisabled={loading}
                        isPending={loading}
                        onPress={actions(state)?.action}
                    >
                        {actions(state)?.confirmText}
                    </Button>
                </Drawer.Footer>
            </Drawer.Content>
        </>
    )
}
