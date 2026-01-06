import { IconAlertTriangle } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent } from '@/components/ui/popover'

const PopoverDeleteFileDemo = () => {
  return (
    <Popover>
      <Button size='icon' variant='outline'>
        <IconAlertTriangle />
        <span className='sr-only'>Delete File</span>
      </Button>
      <PopoverContent className='w-80'>
        <div className='flex flex-col items-center gap-4'>
          <div className='flex aspect-square size-12 items-center justify-center rounded-full bg-red-500/10'>
            <IconAlertTriangle className='size-6 text-destructive' />
          </div>
          <div className='space-y-2 text-center'>
            <div className='text-balance font-semibold'>Are you sure you want to delete this file?</div>
            <p className='text-muted-foreground text-sm'>
              Deleting this file can affect your project and other files connection so keep in mind before making
              decision
            </p>
          </div>
          <div className='grid w-full grid-cols-2 gap-2'>
            <Button size='sm' variant='secondary'>
              Cancel
            </Button>
            <Button size='sm' variant='destructive'>
              Delete File
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default PopoverDeleteFileDemo
