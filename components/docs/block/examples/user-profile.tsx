'use client'

import React from 'react'

import About from 'components/user-profile/about'
import Media from 'components/user-profile/media'
import Posts from 'components/user-profile/posts'
import Image from 'next/image'
import { Key } from 'react-aria-components'

import NavbarLayout from '@/components/docs/block/layouts/app-navbar'
import { Avatar, Card, Description, Heading, Tabs } from '@/components/ui'

export default function UserProfile() {
    const [panel, setPanel] = React.useState<Key>(1)
    return (
        <NavbarLayout variant='inset'>
            <div className='relative w-full'>
                <Card className='w-full overflow-hidden'>
                    <Card.Content className='p-0 lg:h-96'>
                        <Image
                            width={1920}
                            height={1080}
                            src='https://picsum.photos/id/1/1920/1080'
                            alt='profil'
                            className='object-contain'
                        />
                    </Card.Content>
                </Card>
                <div className='relative mt-12 flex flex-col items-center gap-4 lg:mt-4 lg:flex-row'>
                    <Avatar
                        alt='logo'
                        src='https://github.com/dq-alhq.png'
                        className='bg-bg absolute bottom-32 left-1/2 size-24 -translate-x-1/2 rounded-full border p-1 lg:-bottom-4 lg:left-20 lg:size-44 lg:translate-x-0'
                    />
                    <div className='flex w-full flex-col gap-1 lg:ml-72'>
                        <Heading className='text-center text-lg font-bold lg:text-left lg:text-4xl'>
                            Diqi Al-Haqqi
                        </Heading>
                        <Description className='text-center text-sm uppercase lg:text-left lg:text-lg'>
                            East Java, Indonesia
                        </Description>
                    </div>
                    <Tabs
                        className='mx-20 lg:ml-auto'
                        selectedKey={panel}
                        onSelectionChange={setPanel}
                    >
                        <Tabs.List>
                            <Tabs.Label className='lg:text-xl' id={1}>
                                Posts
                            </Tabs.Label>
                            <Tabs.Label className='lg:text-xl' id={2}>
                                About
                            </Tabs.Label>
                            <Tabs.Label className='lg:text-xl' id={3}>
                                Media
                            </Tabs.Label>
                        </Tabs.List>
                    </Tabs>
                </div>
            </div>
            <div className='mt-2 flex flex-col gap-6 lg:mt-12 lg:flex-row'>
                {panel === 1 && <Posts />}
                {panel === 2 && <About />}
                {panel === 3 && <Media />}
            </div>
        </NavbarLayout>
    )
}
