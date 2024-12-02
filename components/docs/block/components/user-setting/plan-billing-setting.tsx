'use client'

import React from 'react'

import { IconCircleUser, IconCreditCard, IconHash, IconLock, IconMap } from 'hq-icons'

import {
    Button,
    Card,
    Choicebox,
    DatePicker,
    Form,
    Heading,
    Note,
    TextField
} from '@/components/ui'

export default function PlanBillingSetting() {
    return (
        <Card>
            <Card.Header>
                <Card.Title>Manage Your Plan</Card.Title>
                <Card.Description>Upgrade or downgrade your current plan.</Card.Description>
            </Card.Header>
            <Form>
                <Card.Content className='grid gap-4'>
                    <Note variant='warning'>
                        Changing the plan will take effect immediately. You will be charged for the
                        rest of the current month.
                    </Note>
                    <Choicebox aria-label='Select items' selectionMode='single'>
                        <Choicebox.Item
                            title='Basic'
                            description='Just the essentials to get started.'
                        />
                        <Choicebox.Item
                            title='Standard'
                            description='A step up with more features and support.'
                        />
                        <Choicebox.Item
                            title='Deluxe'
                            description='Top-tier features for maximum performance.'
                        />
                        <Choicebox.Item
                            title='Ultimate'
                            description='All-inclusive plan with every feature available.'
                        />
                    </Choicebox>
                    <Heading level={4}>Payment Details</Heading>
                    <TextField
                        autoFocus
                        prefix={<IconCircleUser />}
                        label='Card Holder'
                        name='card_holder'
                        id='card_holder'
                    />
                    <div className='grid md:grid-cols-4 gap-4'>
                        <TextField
                            className='md:col-span-2'
                            prefix={<IconCreditCard />}
                            label='Card Number'
                            name='card_number'
                            id='card_number'
                        />
                        <DatePicker
                            label='Expiration Date'
                            name='expiration_date'
                            id='expiration_date'
                        />
                        <TextField prefix={<IconLock />} label='CVC / CVC2' name='cvc' id='cvc' />
                    </div>
                    <div className='grid lg:grid-cols-2 gap-4'>
                        <TextField
                            prefix={<IconMap />}
                            label='Country'
                            name='country'
                            id='country'
                        />
                        <TextField
                            prefix={<IconHash />}
                            label='Zip / Postal Code'
                            name='zip'
                            id='zip'
                        />
                    </div>
                </Card.Content>
                <Card.Footer>
                    <Button>Save</Button>
                </Card.Footer>
            </Form>
        </Card>
    )
}
