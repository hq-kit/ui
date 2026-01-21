'use client'

import { useId } from 'react'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

const CheckboxDescriptionDemo = () => {
  const id = useId()

  return (
    <Checkbox defaultSelected id={id}>
      <Label htmlFor={id}>Accept terms and conditions</Label>
      <p>By clicking this checkbox, you agree to the terms and conditions.</p>
    </Checkbox>
  )
}

export default CheckboxDescriptionDemo
