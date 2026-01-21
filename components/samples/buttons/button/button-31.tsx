import { IconBookmark } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'

const IconButtonDemo = () => {
  return (
    <Button size='icon' variant='outline'>
      <IconBookmark />
      <span className='sr-only'>Bookmark</span>
    </Button>
  )
}

export default IconButtonDemo
