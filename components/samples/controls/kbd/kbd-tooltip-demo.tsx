'use client'
import { Button } from '@/components/ui/button'
import { ButtonGroup } from '@/components/ui/button-group'
import { Kbd, KbdGroup } from '@/components/ui/kbd'
import { Tooltip, TooltipContent } from '@/components/ui/tooltip'

export default function KbdTooltip() {
  return (
    <div className='flex flex-wrap gap-4'>
      <ButtonGroup>
        <Tooltip>
          <Button size='sm' variant='outline'>
            Save
          </Button>
          <TooltipContent>
            <div className='flex items-center gap-2'>
              Save Changes <Kbd>S</Kbd>
            </div>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <Button size='sm' variant='outline'>
            Print
          </Button>
          <TooltipContent>
            <div className='flex items-center gap-2'>
              Print Document{' '}
              <KbdGroup>
                <Kbd>Ctrl</Kbd>
                <Kbd>P</Kbd>
              </KbdGroup>
            </div>
          </TooltipContent>
        </Tooltip>
      </ButtonGroup>
    </div>
  )
}
