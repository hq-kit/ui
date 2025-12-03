'use client'

import { Form } from 'react-aria-components'
import { toast } from 'sonner'
import { Button, Card, Checkbox, CheckboxGroup, Radio, RadioGroup, Select, Switch } from '@/components/ui'

export default function DataFormSink() {
    return (
        <Card>
            <Card.Header>
                <Card.Title>Complete Your Data</Card.Title>
                <Card.Description>Fill out the form to complete your data</Card.Description>
            </Card.Header>
            <Form
                onSubmit={(e) => {
                    e.preventDefault()
                    toast.success('Dummy Login Successfully')
                }}
            >
                <Card.Content className='space-y-4'>
                    <RadioGroup aria-label='Package Manager' orientation='horizontal'>
                        <Radio value='npm'>NPM</Radio>
                        <Radio value='yarn'>YARN</Radio>
                        <Radio value='pnpm'>PNPM</Radio>
                        <Radio value='bun'>BUN</Radio>
                    </RadioGroup>
                    <Select aria-label='Framework' placeholder='Select an option'>
                        <Select.Trigger>
                            <Select.Value />
                        </Select.Trigger>
                        <Select.Content>
                            <Select.Item id='1'>Next Js</Select.Item>
                            <Select.Item id='2'>React Js</Select.Item>
                            <Select.Item id='3'>Svelte</Select.Item>
                            <Select.Item id='4'>Vue</Select.Item>
                            <Select.Item id='5'>Angular</Select.Item>
                            <Select.Item id='6'>Nuxt</Select.Item>
                            <Select.Item id='7'>Laravel</Select.Item>
                            <Select.Item id='8'>Django</Select.Item>
                        </Select.Content>
                    </Select>
                    <CheckboxGroup aria-label='Settings'>
                        <Checkbox value='notifications'>Enable React Server Component</Checkbox>
                        <Checkbox value='dark_mode'>Enable Dark Mode</Checkbox>
                    </CheckboxGroup>
                    <Switch>Notifications</Switch>
                </Card.Content>
                <Card.Footer className='justify-end'>
                    <Button type='submit'>Save</Button>
                </Card.Footer>
            </Form>
        </Card>
    )
}
