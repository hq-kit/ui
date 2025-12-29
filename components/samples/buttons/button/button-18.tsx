import { Link } from 'react-aria-components'
import { Button } from '@/components/ui/button'

const ButtonAnimatedLinkDemo = () => {
  return (
    <Link href='#'>
      <Button
        className='no-underline! relative after:absolute after:bottom-2 after:h-px after:w-2/3 after:origin-bottom-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100'
        variant='link'
      >
        Contact us
      </Button>
    </Link>
  )
}

export default ButtonAnimatedLinkDemo
