'use client'

import { IconPhone } from '@tabler/icons-react'
import Image from 'next/image'
import DropZoneAndFileTriggerDemo from '@/components/docs/drag-and-drop/drop-zone-and-file-trigger-demo'
import { Card, DateField, NumberField, Tabs, Textarea, TextField } from '@/components/ui'

export default function UserProfileSink() {
    return (
        <Card className='p-2'>
            <div className='flex w-full flex-col'>
                <Image
                    alt='Profile Cover'
                    className='h-40 w-full rounded-lg object-cover'
                    height={240}
                    priority
                    src='https://picsum.photos/640/320'
                    width={320}
                />
                <div className='-mt-20 mx-auto mb-3 flex w-full flex-shrink-0 flex-col items-center'>
                    <Image
                        alt='DQ'
                        className='size-32 rounded-full'
                        height={128}
                        src='https://github.com/dq-alhq.png'
                        width={128}
                    />
                    <div className='mt-2 flex flex-col items-center text-center'>
                        <h3 className='font-semibold text-lg'>Diqi Al-Haqqi</h3>
                        <p className='text-muted-foreground'>Developer</p>
                    </div>
                </div>
                <div className='rounded-lg border p-2'>
                    <Tabs aria-label='Packages'>
                        <Tabs.List className='w-full justify-center'>
                            <Tabs.Label id='t1'>Identity</Tabs.Label>
                            <Tabs.Label id='t2'>Address</Tabs.Label>
                            <Tabs.Label id='t3'>Upload Files</Tabs.Label>
                        </Tabs.List>
                        <Tabs.Content className='p-1' id='t1'>
                            <div className='mb-4 flex w-full items-end gap-3'>
                                <DateField className='w-full' label='Birthdate' />
                                {/*<TimeField label='Birthtime' />*/}
                            </div>
                            <div className='my-2.5'>
                                <TextField label='Phone' prefix='+62' suffix={<IconPhone />} />
                            </div>
                        </Tabs.Content>
                        <Tabs.Content className='p-1' id='t2'>
                            <Textarea label='Address' />
                            <div className='mt-2'>
                                <NumberField label='Postal Code' />
                            </div>
                        </Tabs.Content>
                        <Tabs.Content className='p-1' id='t3'>
                            <DropZoneAndFileTriggerDemo />
                        </Tabs.Content>
                    </Tabs>
                </div>
            </div>
        </Card>
    )
}
