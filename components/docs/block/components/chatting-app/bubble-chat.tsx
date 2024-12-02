'use client'

import React from 'react'

import { IconCheck, IconCheckDouble, IconClock, IconTrash } from 'hq-icons'

import { Button, cn, Popover } from '@/components/ui'

export interface BubbleChatProps {
    message: string
    time: string
    role: 'send' | 'recieve'
    status?: 'pending' | 'sent' | 'delivered' | 'read'
    onDelete?: () => void
}

export default function BubbleChat({ message, time, role, status, onDelete }: BubbleChatProps) {
    const statusIcon: Record<string, React.ReactNode> = {
        pending: <IconClock className='size-5 text-foreground' />,
        sent: <IconCheck className='size-5 text-foreground' />,
        delivered: <IconCheckDouble className='size-5 text-foreground' />,
        read: <IconCheckDouble className='size-5 text-success' />
    }
    return (
        <div
            className={cn(
                'flex items-start group',
                role === 'send' ? 'flex-row-reverse' : 'flex-row'
            )}
        >
            <div>
                <div
                    className={cn(
                        'rounded-lg text-right [&_strong]:font-medium px-2 py-1.5 text-sm border',
                        role === 'send' ? 'rounded-br-none' : 'rounded-bl-none'
                    )}
                >
                    <div
                        className='text-left text-sm'
                        dangerouslySetInnerHTML={{ __html: message }}
                    ></div>
                </div>
                <small
                    className={cn(
                        'flex gap-1 mt-0.5 text-muted-foreground items-center',
                        role === 'send' ? 'justify-end' : 'justify-start'
                    )}
                >
                    {time}
                    {role === 'send' && status && statusIcon[status]}
                </small>
            </div>
            <Popover>
                <Button
                    variant='danger'
                    size='icon'
                    className='size-8 mx-2 opacity-0 pressed:opacity-100 group-hover:opacity-100 transition p-1 sm:size-8'
                >
                    <IconTrash className='size-3' />
                </Button>
                <Popover.Content>
                    <Popover.Header>
                        <Popover.Title>Delete Chat</Popover.Title>
                        <Popover.Description>
                            This action will permanently delete this chat. Continue?
                        </Popover.Description>
                    </Popover.Header>
                    <Popover.Footer>
                        <Button onPress={onDelete} variant='danger'>
                            Delete
                        </Button>
                    </Popover.Footer>
                </Popover.Content>
            </Popover>
        </div>
    )
}
