'use client'

import { IconCircleUser, IconCreditCard, IconHash, IconLock, IconMap } from 'hq-icons'

import { Button, Card, DatePicker, Form, GridList, Heading, Note, TextField } from '@/components/ui'

export default function PlanBillingSetting() {
    return (
        <Card>
            <Card.Header>
                <Card.Title>Manage Your Plan</Card.Title>
                <Card.Description>Upgrade or downgrade your current plan.</Card.Description>
            </Card.Header>
            <Form>
                <Card.Content className='grid gap-4'>
                    <Note>
                        Changing the plan will take effect immediately. You will be charged for the rest of the current
                        month.
                    </Note>
                    <GridList aria-label='Select items' selectionMode='single'>
                        <GridList.Item textValue='Basic'>Basic</GridList.Item>
                        <GridList.Item textValue='Standard'>Standard</GridList.Item>
                        <GridList.Item textValue='Deluxe'>Deluxe</GridList.Item>
                        <GridList.Item textValue='Ultimate'>Ultimate</GridList.Item>
                    </GridList>
                    <Heading level={4}>Payment Details</Heading>
                    <TextField
                        autoFocus
                        prefix={<IconCircleUser />}
                        label='Card Holder'
                        name='card_holder'
                        id='card_holder'
                    />
                    <div className='grid gap-4 md:grid-cols-4'>
                        <TextField
                            className='md:col-span-2'
                            prefix={<IconCreditCard />}
                            label='Card Number'
                            name='card_number'
                            id='card_number'
                        />
                        <DatePicker label='Expiration Date' name='expiration_date' id='expiration_date' />
                        <TextField prefix={<IconLock />} label='CVC / CVC2' name='cvc' id='cvc' />
                    </div>
                    <div className='grid gap-4 lg:grid-cols-2'>
                        <TextField prefix={<IconMap />} label='Country' name='country' id='country' />
                        <TextField prefix={<IconHash />} label='Zip / Postal Code' name='zip' id='zip' />
                    </div>
                </Card.Content>
                <Card.Footer>
                    <Button>Save</Button>
                </Card.Footer>
            </Form>
        </Card>
    )
}
