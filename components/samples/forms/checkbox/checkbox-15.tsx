'use client'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

const CheckboxFormDemo = () => {
  return (
    <div className='grid gap-2'>
      <Checkbox defaultSelected>
        <Label className='gap-1 leading-4'>Accept terms and conditions</Label>
        <p className='text-muted-foreground text-xs'>
          By clicking this checkbox, you agree to the terms and conditions.
        </p>
        <div className='mt-4 grid gap-2'>
          <div className='flex flex-wrap gap-2'>
            <Button size='sm' variant='outline'>
              Reset
            </Button>
            <Button size='sm'>Submit</Button>
          </div>
        </div>
      </Checkbox>
    </div>
  )
}

export default CheckboxFormDemo
