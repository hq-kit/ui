'use client'

import {
    Button,
    Card,
    Checkbox,
    CheckboxGroup,
    Form,
    MultiSelect,
    Radio,
    RadioGroup,
    Select,
    Switch,
    toast
} from '@/components/ui'

const items = [
    { id: 1, name: 'Buttons' },
    { id: 2, name: 'Collections' },
    { id: 3, name: 'Colors' },
    { id: 4, name: 'Date' },
    { id: 5, name: 'Dropzone' },
    { id: 6, name: 'Forms' },
    { id: 7, name: 'Media' },
    { id: 8, name: 'Navigation' },
    { id: 9, name: 'Overlays' },
    { id: 10, name: 'Pickers' },
    { id: 11, name: 'Statuses' }
]

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
                    <RadioGroup label='Package Manager' orientation='horizontal'>
                        <Radio value='npm'>NPM</Radio>
                        <Radio value='yarn'>YARN</Radio>
                        <Radio value='pnpm'>PNPM</Radio>
                        <Radio value='bun'>BUN</Radio>
                    </RadioGroup>
                    <Select label='Framework' placeholder='Select an option'>
                        <Select.Item id='1'>Next Js</Select.Item>
                        <Select.Item id='2'>React Js</Select.Item>
                        <Select.Item id='3'>Svelte</Select.Item>
                        <Select.Item id='4'>Vue</Select.Item>
                        <Select.Item id='5'>Angular</Select.Item>
                        <Select.Item id='6'>Nuxt</Select.Item>
                        <Select.Item id='7'>Laravel</Select.Item>
                        <Select.Item id='8'>Django</Select.Item>
                    </Select>
                    <CheckboxGroup label='Settings'>
                        <Checkbox value='notifications'>Enable React Server Component</Checkbox>
                        <Checkbox value='dark_mode'>Enable Dark Mode</Checkbox>
                    </CheckboxGroup>
                    <MultiSelect className='w-full' label='Components' items={items}>
                        {(item) => {
                            return <MultiSelect.Item textValue={item.name}>{item.name}</MultiSelect.Item>
                        }}
                    </MultiSelect>
                    <Switch>Notifications</Switch>
                </Card.Content>
                <Card.Footer className='justify-end'>
                    <Button type='submit'>Save</Button>
                </Card.Footer>
            </Form>
        </Card>
    )
}
