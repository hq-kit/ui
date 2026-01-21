import { IconArrowLeft } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'

const ButtonGhostDemo = () => {
  return (
    <Button className='group' variant='ghost'>
      <IconArrowLeft className='transition-transform duration-200 group-hover:-translate-x-0.5' />
      Go to settings
    </Button>
  )
}

export default ButtonGhostDemo
