import { IconTrash } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'

const ButtonDiscardDemo = () => {
  return (
    <Button
      className='border-destructive! text-destructive! hover:bg-destructive/10! focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40'
      variant='outline'
    >
      <IconTrash />
      Discard
    </Button>
  )
}

export default ButtonDiscardDemo
