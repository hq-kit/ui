'use client'

import React from 'react'

import { IconBrandX, IconTrash } from 'hq-icons'

import InputOtpControlledDemo from '@/components/docs/forms/otp/otp-controlled-demo'
import PaginationDemo from '@/components/docs/navigation/pagination/pagination-demo'
import MeterDemo from '@/components/docs/statuses/meter-demo'
import ProgressDemo from '@/components/docs/statuses/progress-bar-demo'
import {
    Breadcrumbs,
    Button,
    Card,
    ComboBox,
    DatePicker,
    Modal,
    Popover,
    Select,
    Tooltip
} from '@/components/ui'

export default function OptionsSink() {
    const [portal, setPortal] = React.useState<Element>()

    React.useEffect(() => {
        const portal = (document?.getElementById('theme-container') as Element) || document.body
        setPortal(portal)
    }, [])
    return (
        <Card className='p-4'>
            <Breadcrumbs>
                <Breadcrumbs.Item href='/'>Home</Breadcrumbs.Item>
                <Breadcrumbs.Item href='/docs'>Docs</Breadcrumbs.Item>
                <Breadcrumbs.Item>Components</Breadcrumbs.Item>
            </Breadcrumbs>
            <div className='flex flex-col w-full lg:flex-row gap-2 items-center mt-6'>
                <Select
                    portal={portal}
                    aria-labelledby='per-page'
                    id='per-page'
                    placeholder='10'
                    className='lg:w-20'
                    defaultSelectedKey={'10'}
                >
                    <Select.Item id='10'>10</Select.Item>
                    <Select.Item id='20'>20</Select.Item>
                    <Select.Item id='30'>30</Select.Item>
                </Select>
                <DatePicker portal={portal} className='w-full' aria-label='Event date' />
            </div>
            <div className='flex gap-1 items-end mt-4'>
                <ComboBox portal={portal} placeholder='Select a user' label='Users' items={users}>
                    {(item) => (
                        <ComboBox.Item id={item.id} textValue={item.name}>
                            {item.name}
                        </ComboBox.Item>
                    )}
                </ComboBox>
                <Modal>
                    <Button variant='danger' size='icon'>
                        <IconTrash />
                    </Button>
                    <Modal.Content UNSTABLE_portalContainer={portal}>
                        <Modal.Header>
                            <Modal.Title>Delete User?</Modal.Title>
                            <Modal.Description>
                                This action cannot be undone. This will permanently delete the user.
                            </Modal.Description>
                        </Modal.Header>
                        <Modal.Footer>
                            <Modal.Close>Cancel</Modal.Close>
                            <Button variant='danger' className='min-w-24'>
                                <IconTrash /> Delete
                            </Button>
                        </Modal.Footer>
                    </Modal.Content>
                </Modal>
            </div>
            <div className='mt-4 grid gap-2'>
                <ProgressDemo />
                <MeterDemo />
            </div>
            <div className='flex justify-center gap-5 mt-4'>
                <Tooltip>
                    <Button aria-label='Follow My Twitter' variant='dark' size='icon'>
                        <IconBrandX />
                    </Button>
                    <Tooltip.Content UNSTABLE_portalContainer={portal}>
                        Follow me on X @dqalhq
                    </Tooltip.Content>
                </Tooltip>
                <Popover>
                    <Button variant='warning'>Forgot Password</Button>
                    <Popover.Content
                        UNSTABLE_portalContainer={portal}
                        aria-label='Forgot Password'
                        className='min-w-72'
                    >
                        <Popover.Header>
                            <Popover.Title>Email</Popover.Title>
                            <Popover.Description>
                                We&apos;ll send you an email to log in.
                            </Popover.Description>
                        </Popover.Header>
                        <Popover.Footer>
                            <Button>Send Login Link</Button>
                        </Popover.Footer>
                    </Popover.Content>
                </Popover>
            </div>
            <div className='mt-4 flex justify-center'>
                <InputOtpControlledDemo />
            </div>
            <div className='mt-[13px]'>
                <PaginationDemo />
            </div>
        </Card>
    )
}

const users = [
    { id: 1, name: 'Barbara Kirlin Sr.', image_url: 'https://i.pravatar.cc/150?img=1' },
    { id: 2, name: 'Rosemarie Koch', image_url: 'https://i.pravatar.cc/150?img=2' },
    { id: 3, name: 'Mrs. Reva Heaney Jr.', image_url: 'https://i.pravatar.cc/150?img=3' },
    { id: 4, name: 'Ms. Ettie Abshire DVM', image_url: 'https://i.pravatar.cc/150?img=4' },
    { id: 5, name: 'Bria Ziemann', image_url: 'https://i.pravatar.cc/150?img=5' },
    { id: 6, name: 'Heloise Borer Sr.', image_url: 'https://i.pravatar.cc/150?img=6' },
    {
        id: 7,
        name: 'Miss Jacinthe Gerlach DVM',
        image_url: 'https://i.pravatar.cc/150?img=7'
    },
    {
        id: 8,
        name: 'Miss Stephania Schaefer Sr.',
        image_url: 'https://i.pravatar.cc/150?img=8'
    },
    { id: 9, name: 'Kevon Hackett MD', image_url: 'https://i.pravatar.cc/150?img=9' },
    { id: 10, name: 'Tom Ledner', image_url: 'https://i.pravatar.cc/150?img=10' }
]