'use client'

import { useId } from 'react'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

const CheckboxFormDemo = () => {
  const id = useId()

  return (
    <div className='flex items-start gap-2'>
      <Checkbox defaultSelected id={id} />
      <div className='grid gap-2'>
        <Label className='gap-1 leading-4' htmlFor={id}>
          Accept terms and conditions
        </Label>
        <p className='text-muted-foreground text-xs'>
          By clicking this checkbox, you agree to the terms and conditions.
        </p>
        <div className='flex flex-wrap gap-2'>
          <Button size='sm' variant='outline'>
            Reset
          </Button>
          <Button size='sm'>Submit</Button>
        </div>
      </div>
    </div>
  )
}

export default CheckboxFormDemo
