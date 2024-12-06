'use client'

import React from 'react'

import About from 'components/user-profile/about'
import Media from 'components/user-profile/media'
import Posts from 'components/user-profile/posts'
import NavbarLayout from 'layouts/navbar-layout'
import Image from 'next/image'
import { Key } from 'react-aria-components'

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
                <div className='flex flex-col lg:flex-row relative items-center gap-4 mt-12 lg:mt-4'>
                    <Avatar
                        alt='logo'
                        src='https://github.com/dq-alhq.png'
                        className='absolute p-1 -translate-x-1/2 border rounded-full lg:translate-x-0 left-1/2 lg:left-20 size-24 lg:size-44 bottom-32 lg:-bottom-4 bg-background'
                    />
                    <div className='flex flex-col w-full gap-1 lg:ml-72'>
                        <Heading className='text-lg font-bold text-center lg:text-left lg:text-4xl'>
                            Diqi Al-Haqqi
                        </Heading>
                        <Description className='text-sm text-center uppercase lg:text-lg lg:text-left'>
                            East Java, Indonesia
                        </Description>
                    </div>
                    <Tabs
                        className='lg:ml-auto mx-20'
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
            <div className='flex flex-col gap-6 mt-2 lg:mt-12 lg:flex-row'>
                {panel === 1 && <Posts />}
                {panel === 2 && <About />}
                {panel === 3 && <Media />}
            </div>
        </NavbarLayout>
    )
}
