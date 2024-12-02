'use client'

import React, { FormEvent } from 'react'

import BubbleChat, { type BubbleChatProps } from 'components/chatting-app/bubble-chat'
import ContactList from 'components/chatting-app/contact-list'
import {
    IconCircleX,
    IconContact,
    IconEllipsisVertical,
    IconLogOut,
    IconMessageDashed,
    IconMessageMore,
    IconMessagePlus,
    IconMic,
    IconSend,
    IconTrash,
    IconUser
} from 'hq-icons'
import ChattingAppLayout from 'layouts/chatting-app-layout'

import {
    Avatar,
    Button,
    buttonVariants,
    cn,
    Form,
    Menu,
    Popover,
    RichTextField,
    Sidebar,
    Tooltip
} from '@/components/ui'
import { formatTime } from '@/lib/utils'

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

    const [message, setMessage] = React.useState('')

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
        <Sidebar.Provider isOpen={false}>
            <ChattingAppLayout />
            <main className='grid flex-1 gap-3 overflow-auto md:p-2 md:grid-cols-2 lg:grid-cols-4'>
                <div className='relative hidden flex-col gap-4 items-start md:flex border rounded-lg'>
                    <div className='flex w-full rounded-lg justify-between items-center sticky top-0 z-20 bg-background p-4'>
                        <h1 className='text-2xl font-bold'>Chats</h1>
                        <div className='flex justify-between items-center gap-2'>
                            <Button variant='ghost' size='icon'>
                                <IconMessageMore className='!size-6' />
                            </Button>
                            <Menu>
                                <Menu.Trigger
                                    className={buttonVariants({
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
                    <div className='px-4 w-full'>
                        <ContactList />
                    </div>
                </div>
                <div className='relative flex h-full min-h-[50vh] flex-col rounded-lg bg-background lg:col-span-3'>
                    <div className='p-2 md:px-4 rounded-lg flex flex-row gap-3 items-center border-b md:border'>
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
                        <Avatar initials='HB' status='success' src='https://i.pravatar.cc/77' />
                        <div className='grid'>
                            <span className='text-sm'>Hebert</span>
                            <small className='text-muted-foreground text-xs'>Online</small>
                        </div>
                        <Menu>
                            <Menu.Trigger
                                className={cn(
                                    buttonVariants({
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
                    <div className='flex-1 flex-col space-y-2 text-muted-foreground p-4  overflow-y-scroll overflow-x-hidden'>
                        {chats.length > 0 ? (
                            chats?.map((chat: BubbleChatProps, i: number) => (
                                <BubbleChat key={i} {...chat} onDelete={() => deleteChat(i)} />
                            ))
                        ) : (
                            <div className='flex flex-col items-center justify-center h-full'>
                                <IconMessageDashed className='!size-6' />
                                <p className='text-center font-bold text-xl'>
                                    Start a conversation
                                </p>
                            </div>
                        )}
                    </div>
                    <Form className='p-2' onSubmit={sendMessage}>
                        <RichTextField
                            className='resize-none max-h-36'
                            hideToolbar
                            value={message}
                            onChange={setMessage}
                            returnType='html'
                        />
                        <div className='flex items-center pt-2'>
                            <Tooltip>
                                <Tooltip.Trigger
                                    className={buttonVariants({
                                        variant: 'ghost',
                                        size: 'icon'
                                    })}
                                >
                                    <IconMic className='size-4' />
                                    <span className='sr-only'>Use Microphone</span>
                                </Tooltip.Trigger>
                                <Tooltip.Content placement='top'>Use Microphone</Tooltip.Content>
                            </Tooltip>
                            <Button
                                isDisabled={!message}
                                type='submit'
                                size='sm'
                                className='ml-auto gap-1.5'
                            >
                                Send Message
                                <IconSend />
                            </Button>
                        </div>
                    </Form>
                </div>
            </main>
        </Sidebar.Provider>
    )
}
