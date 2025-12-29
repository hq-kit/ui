import { Button } from '@/components/ui/button'

const ButtonGradientDemo = () => {
  return (
    <Button className='bg-linear-to-r bg-size-[200%_auto] bg-transparent from-primary via-primary/60 to-primary hover:bg-position-[99%_center] hover:bg-transparent'>
      Get Started
    </Button>
  )
}

export default ButtonGradientDemo
