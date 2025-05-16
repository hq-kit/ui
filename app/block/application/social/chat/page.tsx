'use client'

import { type FormEvent, useState } from 'react'

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
import { useDateFormatter } from 'react-aria'

import BubbleChat, { type BubbleChatProps } from './bubble-chat'
import ContactList from './contact-list'
import MessageForm from './message-form'

import { Avatar, Button, Menu, Popover } from '@/components/ui'

export default function ChatApp() {
    const [chats, setChats] = useState<BubbleChatProps[]>([
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

    const [message, setMessage] = useState<string>('')
    const formatter = useDateFormatter({ hour: '2-digit', minute: '2-digit', hour12: false })

    function sendMessage(e: FormEvent) {
        e.preventDefault()
        setChats([
            ...chats,
            {
                message,
                time: formatter.format(new Date()),
                role: 'send'
            }
        ])
        setMessage('')
    }

    function deleteChat(index: number) {
        setChats([...chats.slice(0, index), ...chats.slice(index + 1)])
    }

    return (
        <main className='grid h-dvh flex-1 gap-3 overflow-auto md:grid-cols-2 md:p-2 lg:grid-cols-4'>
            <div className='relative hidden flex-col items-start gap-4 rounded-lg border md:flex'>
                <div className='sticky top-0 z-20 flex w-full items-center justify-between rounded-lg bg-bg p-4'>
                    <h1 className='font-bold text-2xl'>Chats</h1>
                    <div className='flex items-center justify-between gap-2'>
                        <Button variant='ghost' icon>
                            <IconMessageMore className='!size-6' />
                        </Button>
                        <Menu>
                            <Button icon variant='ghost'>
                                <IconEllipsisVertical />
                            </Button>
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
            <div className='relative flex h-full min-h-[50vh] flex-col rounded-lg bg-bg lg:col-span-3'>
                <div className='flex flex-row items-center gap-3 rounded-lg border-b p-2 md:border md:px-4'>
                    <Popover>
                        <Button variant='ghost' icon className='md:hidden'>
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
                        <Button className='ml-auto' variant='ghost'>
                            <IconEllipsisVertical />
                        </Button>
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
                <div className='flex-1 flex-col space-y-2 overflow-x-hidden overflow-y-scroll p-4 text-muted-fg'>
                    {chats.length > 0 ? (
                        chats?.map((chat: BubbleChatProps, i: number) => (
                            <BubbleChat key={i} {...chat} onDelete={() => deleteChat(i)} />
                        ))
                    ) : (
                        <div className='flex h-full flex-col items-center justify-center'>
                            <IconMessageDashed className='!size-6' />
                            <p className='text-center font-bold text-xl'>Start a conversation</p>
                        </div>
                    )}
                </div>
                <MessageForm value={message} valueAction={setMessage} sendAction={sendMessage} />
            </div>
        </main>
    )
}
