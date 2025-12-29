'use client'
import { useId } from 'react'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

const CheckboxTodoListDemo = () => {
  const id = useId()

  return (
    <div className='flex items-center gap-2'>
      <Checkbox defaultSelected id={id} />
      <Label className='peer-data-[state=checked]:line-through' htmlFor={id}>
        Simple todo list item
      </Label>
    </div>
  )
}

export default CheckboxTodoListDemo
