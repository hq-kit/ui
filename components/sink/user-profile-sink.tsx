'use client'

import { IconPhone } from '@tabler/icons-react'
import Image from 'next/image'
import { Card } from '../ui/card'
import { DateInput } from '../ui/date-input'
import { DropZone } from '../ui/drop-zone'
import { Field } from '../ui/field'
import { InputGroup } from '../ui/input-group'
import { Tabs } from '../ui/tabs'
import { Textarea } from '../ui/textarea'

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
        <div className='mx-auto -mt-20 mb-3 flex w-full shrink-0 flex-col items-center'>
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
        <div className='h-64 rounded-lg border p-2'>
          <Tabs aria-label='Packages'>
            <Tabs.List className='w-full justify-center'>
              <Tabs.Trigger id='t1'>Identity</Tabs.Trigger>
              <Tabs.Trigger id='t2'>Address</Tabs.Trigger>
              <Tabs.Trigger id='t3'>Upload Files</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content className='p-1' id='t1'>
              <div className='mb-4 grid w-full grid-cols-3 items-end gap-3'>
                <Field.Date className='col-span-2'>
                  <Field.Label>Date of Birth</Field.Label>
                  <DateInput />
                </Field.Date>
                <Field.Time>
                  <Field.Label>Time</Field.Label>
                  <DateInput />
                </Field.Time>
              </div>
              <div className='my-2.5'>
                <Field.Text>
                  <Field.Label>Phone</Field.Label>
                  <InputGroup>
                    <InputGroup.Addon align='inline-start'>
                      <IconPhone />
                    </InputGroup.Addon>
                    <InputGroup.Input placeholder='Enter your phone number' />
                  </InputGroup>
                </Field.Text>
              </div>
            </Tabs.Content>
            <Tabs.Content className='space-y-4 p-1' id='t2'>
              <Field.Text>
                <Field.Label>Address</Field.Label>
                <Textarea placeholder='Enter your address' />
              </Field.Text>
              <Field.Number>
                <Field.Label>Pin Code</Field.Label>
                <InputGroup.Number placeholder='Enter your pin code' />
              </Field.Number>
            </Tabs.Content>
            <Tabs.Content className='p-1' id='t3'>
              <DropZone className='h-44'>
                <p className='select-none text-muted-foreground'>Drop files here</p>
              </DropZone>
            </Tabs.Content>
          </Tabs>
        </div>
      </div>
    </Card>
  )
}
