'use client'

import React, { FormEvent } from 'react'

import BubbleChat, { type BubbleChatProps } from 'components/chatting-app/bubble-chat'
import ContactList from 'components/chatting-app/contact-list'
import MessageForm from 'components/chatting-app/message-form'
import {
    IconCircleX,
    IconContact,
    IconEllipsisVertical,
    IconLogOut,
    IconMessageDashed,
    IconMessageMore,
    IconMessagePlus,
    IconTrash,
    IconUser
} from 'hq-icons'
import ChattingAppLayout from 'layouts/chatting-app-layout'

import { Avatar, Button, buttonStyles, Menu, Popover, SidebarInset } from '@/components/ui'
import { cn, formatTime } from '@/lib/utils'

export default function ChatApp() {
    const [chats, setChats] = React.useState<BubbleChatProps[]>([
        {
            message: "Assalamu'alaikum, Hello Bro!",
            time: '10:00',
            role: 'recieve'
        },
        {
            message: "Wa'alaikumsalam, Yes Bro... What's up?",
            time: '10:01',
            role: 'send',
            status: 'read'
        },
        {
            message: `I Have a good news, There is new Component at this site. I hope you will like it.
                Check it out. https://cleon-ui.vercel.app
                `,
            time: '10:03',
            role: 'recieve'
        }
    ])

    const [message, setMessage] = React.useState<string>('')

    function sendMessage(e: FormEvent) {
        e.preventDefault()
        setChats([
            ...chats,
            {
                message,
                time: formatTime(new Date()),
                role: 'send'
            }
        ])
        setMessage('')
    }

    function deleteChat(index: number) {
        setChats([...chats.slice(0, index), ...chats.slice(index + 1)])
    }

    return (
        <div className='flex'>
            <ChattingAppLayout />
            <SidebarInset>
                <main className='grid h-svh flex-1 gap-3 overflow-auto md:grid-cols-2 md:p-2 lg:grid-cols-4'>
                    <div className='relative hidden flex-col items-start gap-4 rounded-lg border md:flex'>
                        <div className='bg-bg sticky top-0 z-20 flex w-full items-center justify-between rounded-lg p-4'>
                            <h1 className='text-2xl font-bold'>Chats</h1>
                            <div className='flex items-center justify-between gap-2'>
                                <Button variant='ghost' size='icon'>
                                    <IconMessageMore className='!size-6' />
                                </Button>
                                <Menu>
                                    <Menu.Trigger
                                        className={buttonStyles({
                                            variant: 'ghost',
                                            size: 'icon'
                                        })}
                                    >
                                        <IconEllipsisVertical />
                                    </Menu.Trigger>
                                    <Menu.Content placement='bottom end'>
                                        <Menu.Item>
                                            <IconMessagePlus />
                                            New Group
                                        </Menu.Item>
                                        <Menu.Item isDanger>
                                            <IconLogOut />
                                            Logout
                                        </Menu.Item>
                                    </Menu.Content>
                                </Menu>
                            </div>
                        </div>
                        <div className='w-full px-4'>
                            <ContactList />
                        </div>
                    </div>
                    <div className='bg-bg relative flex h-full min-h-[50vh] flex-col rounded-lg lg:col-span-3'>
                        <div className='flex flex-row items-center gap-3 rounded-lg border-b p-2 md:border md:px-4'>
                            <Popover>
                                <Button variant='ghost' size='icon' className='md:hidden'>
                                    <IconContact />
                                </Button>
                                <Popover.Content aria-label='Contact List'>
                                    <Popover.Body>
                                        <ContactList />
                                    </Popover.Body>
                                </Popover.Content>
                            </Popover>
                            <Avatar initials='HB' src='https://i.pravatar.cc/77' />
                            <div className='grid'>
                                <span className='text-sm'>Hebert</span>
                                <small className='text-muted-fg text-xs'>Online</small>
                            </div>
                            <Menu>
                                <Menu.Trigger
                                    className={cn(
                                        buttonStyles({
                                            variant: 'ghost',
                                            size: 'icon'
                                        }),
                                        'ml-auto'
                                    )}
                                >
                                    <IconEllipsisVertical />
                                </Menu.Trigger>
                                <Menu.Content placement='bottom end'>
                                    <Menu.Item>
                                        <IconUser />
                                        Contact Info
                                    </Menu.Item>
                                    <Menu.Item>
                                        <IconTrash />
                                        Clear Chat
                                    </Menu.Item>
                                    <Menu.Item isDanger>
                                        <IconCircleX />
                                        Block
                                    </Menu.Item>
                                </Menu.Content>
                            </Menu>
                        </div>
                        <div className='text-muted-fg flex-1 flex-col space-y-2 overflow-x-hidden overflow-y-scroll p-4'>
                            {chats.length > 0 ? (
                                chats?.map((chat: BubbleChatProps, i: number) => (
                                    <BubbleChat key={i} {...chat} onDelete={() => deleteChat(i)} />
                                ))
                            ) : (
                                <div className='flex h-full flex-col items-center justify-center'>
                                    <IconMessageDashed className='!size-6' />
                                    <p className='text-center text-xl font-bold'>
                                        Start a conversation
                                    </p>
                                </div>
                            )}
                        </div>
                        <MessageForm value={message} onChange={setMessage} onSend={sendMessage} />
                    </div>
                </main>
            </SidebarInset>
        </div>
    )
}
