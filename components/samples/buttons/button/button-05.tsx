import { IconArrowBackUp, IconArrowForwardUp } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'

const ButtonIconDemo = () => {
  return (
    <div className='flex flex-wrap items-center gap-4'>
      <Button variant='outline'>
        <IconArrowBackUp />
        Undo
      </Button>
      <Button variant='outline'>
        Redo
        <IconArrowForwardUp />
      </Button>
    </div>
  )
}

export default ButtonIconDemo
