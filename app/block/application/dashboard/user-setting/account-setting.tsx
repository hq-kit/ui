'use client'

import type { DropEvent } from '@react-types/shared'
import { IconBrandFacebook, IconBrandGithub, IconBrandInstagram, IconBrandX } from '@tabler/icons-react'
import { useState } from 'react'
import { isFileDropItem } from 'react-aria-components'
import { Avatar, Button, Card, DropZone, FileTrigger, Form, Textarea, TextField } from '@/components/ui'

export default function AccountSetting() {
    const [droppedImage, setDroppedImage] = useState<string>('')

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
                                className='size-10 overflow-hidden rounded-full p-0'
                                getDropOperation={(types) =>
                                    types.has('image/jpeg') || types.has('image/png') ? 'copy' : 'cancel'
                                }
                                onDrop={onDropHandler}
                            >
                                <Avatar size='lg' src={droppedImage ?? ''} />
                                <input name='image' type='hidden' value={droppedImage ?? ''} />
                            </DropZone>
                            <FileTrigger
                                acceptedFileTypes={['image/png', 'image/jpeg']}
                                onSelect={onSelectHandler}
                                size='sm'
                            >
                                Upload avatar
                            </FileTrigger>
                        </div>
                        <TextField
                            autoFocus
                            id='name'
                            isRequired
                            label='Name'
                            name='name'
                            placeholder='Enter your name'
                        />
                        <TextField
                            id='email'
                            isRequired
                            label='Email'
                            name='email'
                            placeholder='Enter your email'
                            type='email'
                        />
                        <Textarea id='bio' label='Bio' name='bio' placeholder='Enter your bio' />
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
                        <TextField id='github' label='Github Username' name='github' prefix={<IconBrandGithub />} />
                        <TextField id='twitter' label='X Username' name='twitter' prefix={<IconBrandX />} />
                        <TextField id='facebook' label='Facebook' name='facebook' prefix={<IconBrandFacebook />} />
                        <TextField id='ig' label='Instagram' name='ig' prefix={<IconBrandInstagram />} />
                    </Card.Content>
                    <Card.Footer>
                        <Button>Save</Button>
                    </Card.Footer>
                </Form>
            </Card>
        </section>
    )
}
