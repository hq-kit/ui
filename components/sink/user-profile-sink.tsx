'use client'

import { IconPhone } from 'hq-icons'
import Image from 'next/image'

import TimeFieldDemo from '@/components/docs/date-and-time/time-field/time-field-demo'
import DropZoneAndFileTriggerDemo from '@/components/docs/drag-and-drop/drop-zone-and-file-trigger-demo'
import TextareaDemo from '@/components/docs/forms/textarea/textarea-demo'
import { Avatar, Card, DateField, Heading, NumberField, Tabs, TextField } from '@/components/ui'

export default function UserProfileSink() {
    return (
        <Card className='p-2'>
            <div className='flex w-full flex-col'>
                <Image
                    width={320}
                    height={240}
                    className='h-40 w-full rounded-md object-cover'
                    src='https://picsum.photos/640/320'
                    alt='Profile Cover'
                />
                <div className='mx-auto -mt-20 mb-3 flex w-full flex-shrink-0 flex-col items-center'>
                    <Avatar
                        src='https://github.com/dq-alhq.png'
                        initials='DQ'
                        className='!size-32'
                    />
                    <div className='mt-2 flex flex-col items-center text-center'>
                        <Heading level={3}>Diqi Al-Haqqi</Heading>
                        <Heading level={4} className='text-muted-fg'>
                            Developer
                        </Heading>
                    </div>
                </div>
                <div className='rounded-lg border p-2'>
                    <Tabs aria-label='Packages'>
                        <Tabs.List className='w-full justify-center'>
                            <Tabs.Label id='t1'>Identity</Tabs.Label>
                            <Tabs.Label id='t2'>Address</Tabs.Label>
                            <Tabs.Label id='t3'>Upload Files</Tabs.Label>
                        </Tabs.List>
                        <Tabs.Content id='t1'>
                            <div className='mb-4 flex w-full items-end gap-3'>
                                <DateField label='Birthdate' className='w-full' />
                                <TimeFieldDemo />
                            </div>
                            <div className='my-2.5'>
                                <TextField label='Phone' prefix='+62' suffix={<IconPhone />} />
                            </div>
                        </Tabs.Content>
                        <Tabs.Content id='t2'>
                            <TextareaDemo />
                            <div className='mt-2'>
                                <NumberField label='Postal Code' />
                            </div>
                        </Tabs.Content>
                        <Tabs.Content id='t3' className='flex w-full justify-center'>
                            <DropZoneAndFileTriggerDemo />
                        </Tabs.Content>
                    </Tabs>
                </div>
            </div>
        </Card>
    )
}
