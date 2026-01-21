'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel
} from '@/components/ui/dropdown-menu'
import { Switch } from '@/components/ui/switch'

const DropdownMenuSlideUpAnimationDemo = () => {
  const [googleSwitch, setGoogleSwitch] = useState(false)
  const [twitterSwitch, setTwitterSwitch] = useState(false)
  const [linkedinSwitch, setLinkedinSwitch] = useState(false)
  const [dribbbleSwitch, setDribbbleSwitch] = useState(false)
  const [behanceSwitch, setBehanceSwitch] = useState(false)

  return (
    <DropdownMenu>
      <Button variant='outline'>Slide Up Animation</Button>
      <DropdownMenuContent className='data-[exiting=true]:slide-out-to-left-0 data-[entering=true]:slide-in-from-left-0 data-[exiting=true]:slide-out-to-bottom-20 data-[entering=true]:slide-in-from-bottom-20 data-[exiting=true]:zoom-out-100 data-[entering=true]:zoom-in-100 w-56 duration-400'>
        <DropdownMenuLabel>Apps notification</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem className='justify-between'>
            <img
              alt='google'
              className='size-4'
              src='https://cdn.shadcnstudio.com/ss-assets/components/dropdown/google.png'
            />
            <span className='flex-1'>Google</span>
            <Switch id='airplane-mode' isSelected={googleSwitch} onChange={setGoogleSwitch} />
          </DropdownMenuItem>
          <DropdownMenuItem className='justify-between'>
            <img
              alt='twitter'
              className='size-4'
              src='https://cdn.shadcnstudio.com/ss-assets/components/dropdown/twitter.png'
            />
            <span className='flex-1'>Twitter</span>
            <Switch id='airplane-mode' isSelected={twitterSwitch} onChange={setTwitterSwitch} />
          </DropdownMenuItem>
          <DropdownMenuItem className='justify-between'>
            <img
              alt='linkedin'
              className='size-4'
              src='https://cdn.shadcnstudio.com/ss-assets/components/dropdown/linkedin.png'
            />
            <span className='flex-1'>Linkedin</span>
            <Switch id='airplane-mode' isSelected={linkedinSwitch} onChange={setLinkedinSwitch} />
          </DropdownMenuItem>
          <DropdownMenuItem className='justify-between'>
            <img
              alt='dribbble'
              className='size-4'
              src='https://cdn.shadcnstudio.com/ss-assets/components/dropdown/dribbble.png'
            />
            <span className='flex-1'>Dribbble</span>
            <Switch id='airplane-mode' isSelected={dribbbleSwitch} onChange={setDribbbleSwitch} />
          </DropdownMenuItem>
          <DropdownMenuItem className='justify-between'>
            <img
              alt='behance'
              className='size-4'
              src='https://cdn.shadcnstudio.com/ss-assets/components/dropdown/behance.png'
            />
            <span className='flex-1'>Behance</span>
            <Switch id='airplane-mode' isSelected={behanceSwitch} onChange={setBehanceSwitch} />
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DropdownMenuSlideUpAnimationDemo
