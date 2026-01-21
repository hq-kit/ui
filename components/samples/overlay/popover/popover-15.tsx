import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent } from '@/components/ui/popover'

const PopoverZoomInDemo = () => {
  return (
    <Popover>
      <Button variant='outline'>Zoom in</Button>
      <PopoverContent className='data-entering:zoom-in-0! data-exiting:zoom-out-0! origin-center duration-400'>
        <div className='grid gap-4'>
          <div className='flex flex-col items-center gap-2'>
            <Avatar
              alt='Howard Lloyd'
              className='size-20'
              fallback='HL'
              src='https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png'
            />
            <div className='flex flex-col items-center text-center'>
              <p className='font-semibold text-lg'>Howard Lloyd</p>
              <span className='text-sm'>@iamhoward</span>
            </div>
          </div>
          <div className='mx-auto h-px w-45 bg-linear-to-r from-border/20 via-border to-border/20' />
          <p className='text-center text-sm italic'>
            Product Manager @oliviasparks, passionate about building user-centric solutions that solve real problems.
          </p>
          <div className='flex justify-center gap-2 text-sm'>
            <div className='font-medium'>
              512 <span className='font-normal text-muted-foreground'>followers</span>
            </div>
            <div className='font-medium'>
              128 <span className='font-normal text-muted-foreground'>following</span>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default PopoverZoomInDemo
