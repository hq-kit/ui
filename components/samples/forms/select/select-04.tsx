import { Field } from '@/components/ui/field'
import { Label } from '@/components/ui/label'
import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select'

const NativeSelectWithHelperTextDemo = () => {
  return (
    <Field>
      <Label htmlFor='select'>Native select with helper text</Label>
      <NativeSelect id='select'>
        <NativeSelectOption value='1'>Florida</NativeSelectOption>
        <NativeSelectOption value='2'>California</NativeSelectOption>
        <NativeSelectOption value='3'>San Francisco</NativeSelectOption>
        <NativeSelectOption value='4'>Alabama</NativeSelectOption>
      </NativeSelect>
      <p aria-live='polite' className='mt-2 text-muted-foreground text-xs' role='region'>
        Could you share which city you&apos;re based in?
      </p>
    </Field>
  )
}

export default NativeSelectWithHelperTextDemo
