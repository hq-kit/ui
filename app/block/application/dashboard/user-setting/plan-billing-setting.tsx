'use client'

import { IconCreditCard, IconHash, IconLock, IconMap, IconUserCircle } from '@tabler/icons-react'
import { Button, Card, DatePicker, Form, GridList, Note, TextField } from '@/components/ui'

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
                    <h4 className='font-semibold text-lg'>Payment Details</h4>
                    <TextField
                        autoFocus
                        id='card_holder'
                        label='Card Holder'
                        name='card_holder'
                        prefix={<IconUserCircle />}
                    />
                    <div className='grid gap-4 md:grid-cols-4'>
                        <TextField
                            className='md:col-span-2'
                            id='card_number'
                            label='Card Number'
                            name='card_number'
                            prefix={<IconCreditCard />}
                        />
                        <DatePicker id='expiration_date' label='Expiration Date' name='expiration_date' />
                        <TextField id='cvc' label='CVC / CVC2' name='cvc' prefix={<IconLock />} />
                    </div>
                    <div className='grid gap-4 lg:grid-cols-2'>
                        <TextField id='country' label='Country' name='country' prefix={<IconMap />} />
                        <TextField id='zip' label='Zip / Postal Code' name='zip' prefix={<IconHash />} />
                    </div>
                </Card.Content>
                <Card.Footer>
                    <Button>Save</Button>
                </Card.Footer>
            </Form>
        </Card>
    )
}
