'use client'
import { IconHelp, IconInfoCircle } from '@tabler/icons-react'
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from '@/components/ui/input'
import { Tooltip, TooltipContent } from '@/components/ui/tooltip'

export default function InputGroupTooltip() {
  return (
    <div className='grid w-full max-w-sm gap-4'>
      <InputGroup>
        <InputGroupInput placeholder='Enter password' type='password' />
        <InputGroupAddon align='inline-end'>
          <Tooltip>
            <InputGroupButton aria-label='Info' size='icon-xs' variant='ghost'>
              <IconInfoCircle />
            </InputGroupButton>
            <TooltipContent>
              <p>Password must be at least 8 characters</p>
            </TooltipContent>
          </Tooltip>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder='Your email address' />
        <InputGroupAddon align='inline-end'>
          <Tooltip>
            <InputGroupButton aria-label='Help' size='icon-xs' variant='ghost'>
              <IconHelp />
            </InputGroupButton>
            <TooltipContent>
              <p>We&apos;ll use this to send you notifications</p>
            </TooltipContent>
          </Tooltip>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder='Enter API key' />
        <Tooltip>
          <InputGroupAddon>
            <InputGroupButton aria-label='Help' size='icon-xs' variant='ghost'>
              <IconHelp />
            </InputGroupButton>
          </InputGroupAddon>
          <TooltipContent placement='left'>
            <p>Click for help with API keys</p>
          </TooltipContent>
        </Tooltip>
      </InputGroup>
    </div>
  )
}
