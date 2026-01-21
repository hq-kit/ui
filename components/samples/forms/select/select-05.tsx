import { Field } from '@/components/ui/field'
import { Label } from '@/components/ui/label'
import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select'

const NativeSelectWithErrorDemo = () => {
  return (
    <Field>
      <Label htmlFor='select'>Native select with error</Label>
      <NativeSelect aria-invalid id='select'>
        <NativeSelectOption value='1'>IST (Indian Standard Time)</NativeSelectOption>
        <NativeSelectOption value='2'>EST (Eastern Standard Time)</NativeSelectOption>
        <NativeSelectOption value='3'>PST (Pacific Standard Time)</NativeSelectOption>
        <NativeSelectOption value='4'>GMT (Greenwich Mean Time)</NativeSelectOption>
      </NativeSelect>
      <p aria-live='polite' className='mt-2 text-destructive text-xs' role='alert'>
        Selected option is invalid
      </p>
    </Field>
  )
}

export default NativeSelectWithErrorDemo
