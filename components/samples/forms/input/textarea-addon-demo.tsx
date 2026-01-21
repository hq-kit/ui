'use client'

import { IconArrowUp, IconPlus } from '@tabler/icons-react'
import { DropdownMenu } from '@/components/ui/dropdown-menu'
import { InputGroup } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'

export default function TextareaAddonDemo() {
  return (
    <InputGroup>
      <InputGroup.Textarea placeholder='Ask, Search or Chat...' />
      <InputGroup.Addon align='block-end'>
        <InputGroup.Button className='rounded-full' size='icon-xs' variant='outline'>
          <IconPlus />
        </InputGroup.Button>
        <DropdownMenu>
          <InputGroup.Button variant='ghost'>Auto</InputGroup.Button>
          <DropdownMenu.Content className='[--radius:0.95rem]' placement='top start'>
            <DropdownMenu.Item>Auto</DropdownMenu.Item>
            <DropdownMenu.Item>Agent</DropdownMenu.Item>
            <DropdownMenu.Item>Manual</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu>
        <InputGroup.Text className='ml-auto'>52% used</InputGroup.Text>
        <Separator orientation='vertical' />
        <InputGroup.Button className='rounded-full' isDisabled size='icon-xs' variant='default'>
          <IconArrowUp />
          <span className='sr-only'>Send</span>
        </InputGroup.Button>
      </InputGroup.Addon>
    </InputGroup>
  )
}
