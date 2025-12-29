import { IconShield } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'

const IconButtonGradientDemo = () => {
  return (
    <Button
      className='bg-linear-to-r bg-size-[200%_auto] bg-transparent from-destructive via-destructive/60 to-destructive text-white hover:bg-position-[99%_center] hover:bg-transparent focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40'
      size='icon'
    >
      <IconShield />
      <span className='sr-only'>Security</span>
    </Button>
  )
}

export default IconButtonGradientDemo
