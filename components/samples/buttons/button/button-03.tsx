import { IconStar } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'

const ButtonRoundedDemo = () => {
  return (
    <Button className='rounded-full'>
      <IconStar />
      Star
    </Button>
  )
}

export default ButtonRoundedDemo
