import { Button } from '@/components/ui/button'
import { Kbd } from '@/components/ui/kbd'

export default function KbdButton() {
  return (
    <div className='flex items-center gap-2'>
      <Button className='pr-2' size='sm' variant='outline'>
        Accept <Kbd>⏎</Kbd>
      </Button>
      <Button className='pr-2' size='sm' variant='outline'>
        Cancel <Kbd>Esc</Kbd>
      </Button>
    </div>
  )
}
