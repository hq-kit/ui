'use client'

import { useId } from 'react'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

const CheckboxDescriptionDemo = () => {
  const id = useId()

  return (
    <div className='flex items-start gap-2'>
      <Checkbox defaultSelected id={id} />
      <div className='grid gap-2'>
        <Label className='leading-4' htmlFor={id}>
          Accept terms and conditions
        </Label>
        <p className='text-muted-foreground text-xs'>
          By clicking this checkbox, you agree to the terms and conditions.
        </p>
      </div>
    </div>
  )
}

export default CheckboxDescriptionDemo
