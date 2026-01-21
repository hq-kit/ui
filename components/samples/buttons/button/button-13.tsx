import { IconCopy } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'

const ButtonDuplicateDemo = () => {
  return (
    <Button
      className='border-sky-600 text-sky-600! hover:bg-sky-600/10 focus-visible:border-sky-600 focus-visible:ring-sky-600/20 dark:border-sky-400 dark:text-sky-400! dark:focus-visible:border-sky-400 dark:focus-visible:ring-sky-400/40 dark:hover:bg-sky-400/10'
      variant='outline'
    >
      <IconCopy />
      Duplicate
    </Button>
  )
}

export default ButtonDuplicateDemo
