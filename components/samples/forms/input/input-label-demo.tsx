'use client'

import { IconInfoCircle } from '@tabler/icons-react'
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tooltip, TooltipContent } from '@/components/ui/tooltip'

export default function InputGroupLabel() {
  return (
    <div className='grid w-full max-w-sm gap-4'>
      <InputGroup>
        <InputGroupInput id='email' placeholder='shadcn' />
        <InputGroupAddon>
          <Label htmlFor='email'>@</Label>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput id='email-2' placeholder='shadcn@vercel.com' />
        <InputGroupAddon align='block-start'>
          <Label className='text-foreground' htmlFor='email-2'>
            Email
          </Label>
          <Tooltip>
            <InputGroupButton aria-label='Help' className='ml-auto rounded-full' size='icon-xs' variant='ghost'>
              <IconInfoCircle />
            </InputGroupButton>
            <TooltipContent>
              <p>We&apos;ll use this to send you notifications</p>
            </TooltipContent>
          </Tooltip>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
