'use client'

import React from 'react'

import { useListData } from 'react-stately'
import { toast } from 'sonner'

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
    type SelectedKey,
    Switch,
    Tag
} from '@/components/ui'

const items = [
    { id: 1, textValue: 'Buttons' },
    { id: 2, textValue: 'Collections' },
    { id: 3, textValue: 'Colors' },
    { id: 4, textValue: 'Date' },
    { id: 5, textValue: 'Dropzone' },
    { id: 6, textValue: 'Forms' },
    { id: 7, textValue: 'Media' },
    { id: 8, textValue: 'Navigation' },
    { id: 9, textValue: 'Overlays' },
    { id: 10, textValue: 'Pickers' },
    { id: 11, textValue: 'Statuses' }
]

export default function DataFormSink() {
    const selectedList = useListData<SelectedKey>({
        initialItems: [items[0]]
    })
    const [portal, setPortal] = React.useState<Element>()

    React.useEffect(() => {
        const portal = (document?.getElementById('theme-container') as Element) || document.body
        setPortal(portal)
    }, [])
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
                    <Select portal={portal} label='Framework' placeholder='Select an option'>
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
                    <MultiSelect
                        portal={portal}
                        className='md:w-full'
                        label='Components'
                        selectedList={selectedList}
                        items={items}
                        tag={(item) => (
                            <Tag.Item textValue={item.textValue}>{item.textValue}</Tag.Item>
                        )}
                    >
                        {(item) => {
                            return (
                                <MultiSelect.Item textValue={item.textValue}>
                                    {item.textValue}
                                </MultiSelect.Item>
                            )
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
