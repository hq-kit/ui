'use client'

import { Form } from 'react-aria-components'
import { toast } from 'sonner'
import { Button } from '../ui/button'
import { Card } from '../ui/card'
import { Checkbox, CheckboxGroup } from '../ui/checkbox'
import { Label } from '../ui/label'
import { Radio, RadioGroup } from '../ui/radio'
import { Select, SelectValue } from '../ui/select'
import { Switch } from '../ui/switch'
import { Tag, TagGroup, TagList } from '../ui/tag'

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
          toast.success('Data submitted')
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
            <Label>Settings</Label>
            <Checkbox value='notifications'>Enable React Server Component</Checkbox>
            <Checkbox value='dark_mode'>Enable Dark Mode</Checkbox>
          </CheckboxGroup>
          <Select aria-label='Components' placeholder='Select components' selectionMode='multiple'>
            <Select.Trigger>
              <SelectValue<(typeof components)[0]>>
                {({ selectedItems, state }) => (
                  <TagGroup
                    aria-label='Selected states'
                    onRemove={(keys) => {
                      if (Array.isArray(state.value)) {
                        state.setValue(state.value.filter((k) => !keys.has(k)))
                      }
                    }}
                  >
                    <TagList
                      items={selectedItems.filter((item) => item != null)}
                      renderEmptyState={() => 'No selected items'}
                    >
                      {(item) => <Tag>{item.name}</Tag>}
                    </TagList>
                  </TagGroup>
                )}
              </SelectValue>
            </Select.Trigger>
            <Select.Content items={components}>
              {(item) => <Select.Item key={item.id}>{item.name}</Select.Item>}
            </Select.Content>
          </Select>
          <Switch>Notifications</Switch>
        </Card.Content>
        <Card.Footer className='justify-end'>
          <Button type='submit'>Save</Button>
        </Card.Footer>
      </Form>
    </Card>
  )
}

const components = [
  { id: 1, name: 'Buttons' },
  { id: 2, name: 'Collections' },
  { id: 3, name: 'Colors' },
  { id: 4, name: 'Date' },
  { id: 5, name: 'Dropzone' },
  { id: 6, name: 'Forms' },
  { id: 7, name: 'Media' },
  { id: 8, name: 'Navigation' },
  { id: 9, name: 'Overlays' },
  { id: 10, name: 'Statuses' },
  { id: 11, name: 'Surfaces' }
]
