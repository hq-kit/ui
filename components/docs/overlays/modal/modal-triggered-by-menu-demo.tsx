'use client'

import { useState } from 'react'

import { IconBan, IconRotateCcw, IconTrash } from 'hq-icons'
import type { Key } from 'react-aria-components'

import { Button, Menu, Modal } from '@/components/ui'

export default function ModalMenuDemo() {
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
                    <Menu.Item id='delete' isDestructive>
                        <IconTrash />
                        <Menu.Label>Delete</Menu.Label>
                    </Menu.Item>
                    <Menu.Item id='ban' isDestructive>
                        <IconBan />
                        <Menu.Label>Ban</Menu.Label>
                    </Menu.Item>
                    <Menu.Item id='restore'>
                        <IconRotateCcw />
                        <Menu.Label>Restore</Menu.Label>
                    </Menu.Item>
                </Menu.Content>
            </Menu>

            <Modal.Content isOpen={state !== ''} onOpenChange={() => setState('')}>
                <Modal.Header>
                    <Modal.Title>{actions(state)?.title}</Modal.Title>
                    <Modal.Description>{actions(state)?.description}</Modal.Description>
                </Modal.Header>
                <Modal.Footer>
                    <Button slot='close' variant='outline'>
                        Cancel
                    </Button>
                    <Button
                        variant={state === 'restore' ? 'default' : 'destructive'}
                        isDisabled={loading}
                        isPending={loading}
                        onPress={actions(state)?.action}
                    >
                        {actions(state)?.confirmText}
                    </Button>
                </Modal.Footer>
            </Modal.Content>
        </>
    )
}
