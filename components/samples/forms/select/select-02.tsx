import { Field } from '@/components/ui/field'
import { Label } from '@/components/ui/label'
import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select'

const SelectNativePlaceholderDemo = () => {
  return (
    <Field>
      <Label htmlFor='select'>Native select with placeholder</Label>
      <NativeSelect defaultValue='' id='select'>
        <NativeSelectOption disabled value=''>
          Please select a gender
        </NativeSelectOption>
        <NativeSelectOption value='1'>Male</NativeSelectOption>
        <NativeSelectOption value='2'>Female</NativeSelectOption>
        <NativeSelectOption value='3'>Other</NativeSelectOption>
      </NativeSelect>
    </Field>
  )
}

export default SelectNativePlaceholderDemo
