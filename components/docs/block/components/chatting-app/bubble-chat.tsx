'use client'

import {
    IconCheck,
    IconCheckDouble,
    IconChevronRight,
    IconClock,
    IconForward,
    IconInfo,
    IconReply,
    IconTrash
} from 'hq-icons'
import type { ReactNode } from 'react'

import { Button, Menu } from '@/components/ui'
import { cn } from '@/lib/utils'

export interface BubbleChatProps {
    message: string
    time: string
    role: 'send' | 'recieve'
    status?: 'pending' | 'sent' | 'delivered' | 'read'
    onDelete?: () => void
}

export default function BubbleChat({ message, time, role, status, onDelete }: BubbleChatProps) {
    const statusIcon: Record<string, ReactNode> = {
        pending: <IconClock className='size-5 text-fg' />,
        sent: <IconCheck className='size-5 text-fg' />,
        delivered: <IconCheckDouble className='size-5 text-fg' />,
        read: <IconCheckDouble className='size-5 text-success' />
    }
    return (
        <div className={cn('group flex items-start', role === 'send' ? 'flex-row-reverse' : 'flex-row')}>
            <div>
                <div
                    className={cn(
                        'rounded-lg border px-2 py-1.5 text-right text-sm [&_strong]:font-medium',
                        role === 'send' ? 'rounded-br-none' : 'rounded-bl-none'
                    )}
                >
                    <div
                        className='text-left text-fg text-sm'
                        dangerouslySetInnerHTML={{ __html: convertToHtml(message) }}
                    />
                </div>
                <small
                    className={cn(
                        'mt-0.5 flex items-center gap-1 text-muted-fg',
                        role === 'send' ? 'justify-end' : 'justify-start'
                    )}
                >
                    {time}
                    {role === 'send' && status && statusIcon[status]}
                </small>
            </div>
            <Menu>
                <Button
                    variant='outline'
                    icon
                    className='mx-2 size-7 p-1 opacity-0 pressed:opacity-100 transition group-hover:opacity-100'
                >
                    <IconChevronRight className={cn('size-3', role === 'send' ? 'rotate-180' : '')} />
                </Button>
                <Menu.Content placement={role === 'send' ? 'left' : 'right'} aria-label='Actions'>
                    <Menu.Item>
                        <IconReply />
                        Reply
                    </Menu.Item>
                    <Menu.Item>
                        <IconForward />
                        Forward
                    </Menu.Item>
                    <Menu.Item>
                        <IconInfo />
                        Message Info
                    </Menu.Item>
                    <Menu.Item onAction={onDelete} isDanger>
                        <IconTrash /> Delete
                    </Menu.Item>
                </Menu.Content>
            </Menu>
        </div>
    )
}

const convertToHtml = (text: string) => {
    let html = text
    html = html.replace(
        /(https?:\/\/\S+)/g,
        '<a href="$1" target="_blank" class="text-primary underline" rel="noopener noreferrer">$1</a>'
    )
    html = html.replace(/`([^`]+)`/g, '<code class="font-mono">$1</code>')
    html = html.replace(/\*(.*?)\*/g, '<strong class="text-bold">$1</strong>')
    html = html.replace(/_(.*?)_/g, '<em>$1</em>')
    html = html.replace(/~(.*?)~/g, '<del>$1</del>')
    html = html.replace(/^(.*?)^/g, '<sup>$1</sup>')
    html = html.replace(/\n/g, '<br />')
    return html
}
