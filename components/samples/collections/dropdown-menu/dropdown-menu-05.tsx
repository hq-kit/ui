'use client'

import { useState } from 'react'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel
} from '@/components/ui/dropdown-menu'
import { Switch } from '@/components/ui/switch'

const avatars = [
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png',
    fallback: 'OS',
    name: 'Olivia Sparks'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-6.png',
    fallback: 'HL',
    name: 'Howard Lloyd'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png',
    fallback: 'HR',
    name: 'Hallie Richards'
  },
  {
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-16.png',
    fallback: 'JW',
    name: 'Jenny Wilson'
  }
]

const DropdownMeetingScheduleDemo = () => {
  const [firstMeeting, setFirstMeeting] = useState(false)
  const [secondMeeting, setSecondMeeting] = useState(true)
  const [thirdMeeting, setThirdMeeting] = useState(false)
  const [forthMeeting, setForthMeeting] = useState(true)
  const [fifthMeeting, setFifthMeeting] = useState(false)

  return (
    <DropdownMenu>
      <Button variant='outline'>Meetings Schedule</Button>
      <DropdownMenuContent className='sm:w-124'>
        <DropdownMenuLabel>Today&apos;s meetings</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem className='justify-between gap-3.5' onPress={(e) => e}>
            <span className='font-medium text-popover-foreground'>08:30</span>
            <div className='flex flex-1 flex-col'>
              <span className='text-popover-foreground'>Daily Project Review</span>
              <span className='text-muted-foreground text-xs'>Team organization</span>
            </div>
            <Avatar
              alt='Hallie Richards'
              className='max-sm:hidden'
              src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-11.png'
            />
            <div className='flex items-center gap-2'>
              <span className='text-popover-foreground text-sm'>Privacy</span>
              <Switch id='airplane-mode' isSelected={firstMeeting} onChange={setFirstMeeting} />
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className='justify-between gap-3.5' onPress={(e) => e}>
            <span className='font-medium text-popover-foreground'>09:00</span>
            <div className='flex flex-1 flex-col'>
              <span className='text-popover-foreground'>Sprint Surge</span>
              <span className='text-muted-foreground text-xs'>Daily Boost for Agile Progress</span>
            </div>
            <div className='flex -space-x-3 max-sm:hidden'>
              {avatars.map((avatar, index) => (
                <Avatar alt={avatar.name} className='ring-2 ring-background' key={index} src={avatar.src} />
              ))}
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-popover-foreground text-sm'>Privacy</span>
              <Switch id='airplane-mode' isSelected={secondMeeting} onChange={setSecondMeeting} />
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className='justify-between gap-3.5' onPress={(e) => e}>
            <span className='font-medium text-popover-foreground'>11:45</span>
            <div className='flex flex-1 flex-col'>
              <span className='text-popover-foreground'>Project Status Update</span>
              <span className='text-muted-foreground text-xs'>Progress Overview Update</span>
            </div>
            <Avatar
              alt='Hallie Richards'
              className='max-sm:hidden'
              src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-12.png'
            />
            <div className='flex items-center gap-2'>
              <span className='text-popover-foreground text-sm'>Privacy</span>
              <Switch id='airplane-mode' isSelected={thirdMeeting} onChange={setThirdMeeting} />
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className='justify-between gap-3.5' onPress={(e) => e}>
            <span className='font-medium text-popover-foreground'>06:30</span>
            <div className='flex flex-1 flex-col'>
              <span className='text-popover-foreground'>Team Performance</span>
              <span className='text-muted-foreground text-xs'>Team Metrics Evaluation</span>
            </div>
            <div className='flex -space-x-3 max-sm:hidden'>
              {avatars.map((avatar, index) => (
                <Avatar alt={avatar.name} className='ring-2 ring-background' key={index} src={avatar.src} />
              ))}
            </div>
            <div className='flex items-center gap-2'>
              <span className='text-popover-foreground text-sm'>Privacy</span>
              <Switch id='airplane-mode' isSelected={forthMeeting} onChange={setForthMeeting} />
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem className='justify-between gap-3.5' onPress={(e) => e}>
            <span className='font-medium text-popover-foreground'>10:50</span>
            <div className='flex flex-1 flex-col'>
              <span className='text-popover-foreground'>Stakeholder Feedback</span>
              <span className='text-muted-foreground text-xs'>Feedback from Stakeholders</span>
            </div>
            <Avatar
              alt='Hallie Richards'
              className='max-sm:hidden'
              src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-14.png'
            />
            <div className='flex items-center gap-2'>
              <span className='text-popover-foreground text-sm'>Privacy</span>
              <Switch id='airplane-mode' isSelected={fifthMeeting} onChange={setFifthMeeting} />
            </div>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DropdownMeetingScheduleDemo
