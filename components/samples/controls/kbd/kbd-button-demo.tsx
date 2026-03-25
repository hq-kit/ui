import { Button } from '@/components/ui/button'
import { Kbd } from '@/components/ui/kbd'

export default function KbdButton() {
  return (
    <div className='flex items-center gap-2'>
      <Button size='sm' variant='outline'>
        Accept
        <Kbd className='translate-x-0.5' data-icon='inline-end'>
          ⏎
        </Kbd>
      </Button>
      <Button size='sm' variant='outline'>
        Cancel
        <Kbd className='translate-x-0.5' data-icon='inline-end'>
          Esc
        </Kbd>
      </Button>
    </div>
  )
}
