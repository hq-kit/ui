import { IconChecks } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'

const IconButtonSoftDemo = () => {
  return (
    <Button
      className='bg-green-600/10 text-green-600 hover:bg-green-600/20 focus-visible:ring-green-600/20 dark:bg-green-400/10 dark:text-green-400 dark:focus-visible:ring-green-400/40 dark:hover:bg-green-400/20'
      size='icon'
    >
      <IconChecks />
      <span className='sr-only'>Check</span>
    </Button>
  )
}

export default IconButtonSoftDemo
