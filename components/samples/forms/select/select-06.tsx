import { useId } from 'react'
import { Field } from '@/components/ui/field'
import { Label } from '@/components/ui/label'
import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select'

const NativeSelectRequiredDemo = () => {
  const id = useId()

  return (
    <Field>
      <Label className='gap-1' htmlFor={id}>
        Required native select <span className='text-destructive'>*</span>
      </Label>
      <NativeSelect id={id} required>
        <NativeSelectOption value='1'>Action</NativeSelectOption>
        <NativeSelectOption value='2'>Comedy</NativeSelectOption>
        <NativeSelectOption value='3'>Romance</NativeSelectOption>
        <NativeSelectOption value='4'>Thriller</NativeSelectOption>
      </NativeSelect>
    </Field>
  )
}

export default NativeSelectRequiredDemo
