import { useId } from 'react'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Popover, PopoverContent } from '@/components/ui/popover'

const members = [
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png',
    fallback: 'HL',
    name: 'Howard Lloyd',
    designation: 'Product Manager'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-6.png',
    fallback: 'OS',
    name: 'Olivia Sparks',
    designation: 'Software Engineer'
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png',
    fallback: 'HR',
    name: 'Hallie Richards',
    designation: 'UI/UX Designer'
  }
]

const PopoverSlideInBottomDemo = () => {
  const id = useId()

  return (
    <Popover>
      <Button variant='outline'>Slide-in from bottom</Button>
      <PopoverContent className='data-entering:slide-in-from-bottom-20 data-exiting:slide-out-to-bottom-20 data-exiting:zoom-out-100 data-entering:zoom-in-100 w-80 duration-400'>
        <div className='grid gap-4'>
          <div className='space-y-1'>
            <div className='font-medium'>Share to team members</div>
            <p className='text-muted-foreground text-sm'>
              Give your team members access to this project and start collaborating in real time
            </p>
          </div>
          <div className='w-full space-y-1.5'>
            <Label className='font-normal text-muted-foreground text-xs' htmlFor={id}>
              Email address
            </Label>
            <div className='flex gap-2'>
              <Input className='h-8' id={id} placeholder='example@xyz.com' type='email' />
              <Button size='sm' type='submit'>
                Share invite
              </Button>
            </div>
          </div>
          <div className='space-y-1.5'>
            <Label className='font-normal text-muted-foreground text-xs'>Team members</Label>
            <ul className='grid gap-2'>
              {members.map((member, index) => (
                <li className='flex items-center gap-3' key={index}>
                  <Checkbox id={`member-${index + 1}`} />
                  <Label className='flex flex-1 items-center gap-2' htmlFor={`member-${index + 1}`}>
                    <div className='flex flex-1 items-center gap-2'>
                      <Avatar alt={member.name} className='size-6' fallback={member.fallback} src={member.image} />
                      <span className='font-medium text-sm'>{member.name}</span>
                    </div>
                    <span className='text-muted-foreground text-xs'>{member.designation}</span>
                  </Label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default PopoverSlideInBottomDemo
