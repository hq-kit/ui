'use client'

import React from 'react'

import { IconBrandFacebook, IconBrandGithub, IconBrandInstagram, IconBrandX } from 'hq-icons'
import { isFileDropItem } from 'react-aria-components'

import {
    Avatar,
    Button,
    Card,
    cn,
    DropZone,
    FileTrigger,
    Form,
    Textarea,
    TextField
} from '@/components/ui'
import type { DropEvent } from '@react-types/shared'

export default function AccountSetting() {
    const [droppedImage, setDroppedImage] = React.useState<string>('')
    async function onDropHandler(e: DropEvent) {
        const item = e.items
            .filter(isFileDropItem)
            .find((item) => item.type === 'image/jpeg' || item.type === 'image/png')
        if (item) {
            const file = await item.getFile()
            setDroppedImage(URL.createObjectURL(file))
        }
    }
    async function onSelectHandler(e: FileList | null) {
        if (e) {
            const files = Array.from([...e])
            const item = files[0]
            if (item) {
                setDroppedImage(URL.createObjectURL(item))
            }
        }
    }
    return (
        <section className='space-y-4'>
            <Card>
                <Card.Header>
                    <Card.Title>Account</Card.Title>
                    <Card.Description>Your account details.</Card.Description>
                </Card.Header>
                <Form>
                    <Card.Content className='space-y-4'>
                        <div className='flex items-center gap-2'>
                            <DropZone
                                getDropOperation={(types) =>
                                    types.has('image/jpeg') || types.has('image/png')
                                        ? 'copy'
                                        : 'cancel'
                                }
                                onDrop={onDropHandler}
                                className={cn('size-10 overflow-hidden rounded-full p-0')}
                            >
                                <Avatar src={droppedImage ?? ''} size='lg' />
                                <input type='hidden' name='image' value={droppedImage ?? ''} />
                            </DropZone>
                            <FileTrigger
                                size='sm'
                                acceptedFileTypes={['image/png', 'image/jpeg']}
                                onSelect={onSelectHandler}
                            >
                                Upload avatar
                            </FileTrigger>
                        </div>
                        <TextField
                            autoFocus
                            label='Name'
                            placeholder='Enter your name'
                            id='name'
                            name='name'
                            isRequired
                        />
                        <TextField
                            type='email'
                            isRequired
                            label='Email'
                            placeholder='Enter your email'
                            id='email'
                            name='email'
                        />
                        <Textarea label='Bio' placeholder='Enter your bio' id='bio' name='bio' />
                    </Card.Content>
                    <Card.Footer>
                        <Button>Save</Button>
                    </Card.Footer>
                </Form>
            </Card>
            <Card>
                <Form>
                    <Card.Header>
                        <Card.Title>Social Accounts</Card.Title>
                        <Card.Description>Your social accounts.</Card.Description>
                    </Card.Header>
                    <Card.Content className='grid gap-4 lg:grid-cols-2'>
                        <TextField
                            label='Github Username'
                            prefix={<IconBrandGithub />}
                            id='github'
                            name='github'
                        />
                        <TextField
                            label='X Username'
                            prefix={<IconBrandX />}
                            id='twitter'
                            name='twitter'
                        />
                        <TextField
                            label='Facebook'
                            prefix={<IconBrandFacebook />}
                            id='facebook'
                            name='facebook'
                        />
                        <TextField
                            label='Instagram'
                            prefix={<IconBrandInstagram />}
                            id='ig'
                            name='ig'
                        />
                    </Card.Content>
                    <Card.Footer>
                        <Button>Save</Button>
                    </Card.Footer>
                </Form>
            </Card>
        </section>
    )
}
