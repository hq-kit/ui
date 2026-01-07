'use client'

import type { Key, Selection } from 'react-aria-components'
import { IconCheckbox, IconForms } from '@tabler/icons-react'
import { useState } from 'react'
import { ComboBox, ComboBoxContent, ComboBoxInput, ComboBoxItem } from '@/components/ui/combo-box'
import { Label } from '@/components/ui/label'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

const options = [
  { id: 1, name: 'Ubuntu' },
  { id: 2, name: 'Debian' },
  { id: 3, name: 'Fedora' },
  { id: 4, name: 'Arch' },
  { id: 5, name: 'CentOS' },
  { id: 6, name: 'Gentoo' },
  { id: 7, name: 'OpenSuse' },
  { id: 8, name: 'Redhat' },
  { id: 9, name: 'FreeBSD' },
  { id: 10, name: 'NetBSD' }
]

export default function ComboBoxControlledDemo() {
  const [mode, setMode] = useState<Selection>(new Set(['selection']))
  return (
    <div className='space-y-4'>
      <ToggleGroup onSelectionChange={setMode} selectedKeys={mode} selectionMode='single' variant='outline'>
        <ToggleGroupItem id='selection'>
          <IconCheckbox />
          Selection
        </ToggleGroupItem>
        <ToggleGroupItem id='input'>
          <IconForms />
          Input
        </ToggleGroupItem>
      </ToggleGroup>
      {Array.from(mode).includes('selection') ? <ComboBoxControlledSelected /> : <ComboBoxControlledInput />}
    </div>
  )
}

const ComboBoxControlledInput = () => {
  const [value, setValue] = useState<string>('')
  return (
    <div className='grid space-y-4'>
      <ComboBox allowsCustomValue inputValue={value} onInputChange={setValue}>
        <Label>Controlled Input</Label>
        <ComboBoxInput placeholder='Choose a distro' />
        <ComboBoxContent items={options}>
          {(option) => <ComboBoxItem id={option.id}>{option.name}</ComboBoxItem>}
        </ComboBoxContent>
      </ComboBox>
      <code className='text-xs'>value: {JSON.stringify(value)}</code>
    </div>
  )
}

const ComboBoxControlledSelected = () => {
  const [selected, setSelected] = useState<Key | null>(null)
  return (
    <div className='grid space-y-4'>
      <ComboBox onSelectionChange={setSelected} selectedKey={selected}>
        <Label>Controlled Selection</Label>
        <ComboBoxInput placeholder='Choose a distro' />
        <ComboBoxContent items={options}>
          {(option) => <ComboBoxItem id={option.id}>{option.name}</ComboBoxItem>}
        </ComboBoxContent>
      </ComboBox>
      <code className='text-xs'>selected: {JSON.stringify(selected)}</code>
    </div>
  )
}
