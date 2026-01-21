import { IconInfoCircle } from '@tabler/icons-react'
import { Link } from 'react-aria-components'
import { Button, buttonVariants } from '@/components/ui/button'
import { Popover, PopoverContent } from '@/components/ui/popover'

const PopoverAboutDemo = () => {
  return (
    <Popover>
      <Button size='icon' variant='outline'>
        <IconInfoCircle />
        <span className='sr-only'>About Shadcn Studio</span>
      </Button>
      <PopoverContent className='w-80'>
        <div className='grid gap-4'>
          <div className='space-y-1.5 text-center'>
            <div className='font-semibold text-lg'>About Shadcn Studio</div>
            <p className='text-muted-foreground text-sm'>
              Welcome to Shadcn Studio — your toolkit for building sleek, customizable UI components with ease!
            </p>
          </div>
          <Link
            className={buttonVariants({ size: 'sm' })}
            href='https://shadcnstudio.com/docs/getting-started/introduction'
            rel='noopener noreferrer'
            target='_blank'
          >
            Learn More
          </Link>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default PopoverAboutDemo
