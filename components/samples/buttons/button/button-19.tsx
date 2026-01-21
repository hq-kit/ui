import { IconShare } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'

const ButtonPublishDemo = () => {
  return (
    <Button className='h-12 rounded-full px-2.5' variant='outline'>
      <span className='flex size-7 items-center justify-center rounded-full bg-primary text-primary-foreground'>
        <IconShare />
      </span>
      Publish
    </Button>
  )
}

export default ButtonPublishDemo
