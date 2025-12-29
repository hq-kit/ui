import { IconArrowUp } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'

const ButtonUpgradeDemo = () => {
  return (
    <Button className='bg-linear-to-r bg-size-[200%_auto] bg-transparent from-amber-600 via-amber-600/60 to-amber-600 text-white focus-visible:ring-amber-600/20 data-hovered:bg-position-[99%_center] data-hovered:bg-transparent data-hovered:ring-amber-600/20 dark:from-amber-400 dark:via-amber-400/60 dark:to-amber-400 dark:focus-visible:ring-amber-400/40'>
      Upgrade <IconArrowUp />
    </Button>
  )
}

export default ButtonUpgradeDemo
