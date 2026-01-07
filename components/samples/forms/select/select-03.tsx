import { IconMovie } from '@tabler/icons-react'
import { useId } from 'react'
import { Field } from '@/components/ui/field'
import { Label } from '@/components/ui/label'
import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select'

const NativeSelectWithIconDemo = () => {
  const id = useId()

  return (
    <Field>
      <Label htmlFor={id}>Native select with icon</Label>
      <div className='group relative'>
        <NativeSelect className='pl-9' defaultValue='' id={id}>
          <NativeSelectOption disabled value=''>
            Pick your favorite movie
          </NativeSelectOption>
          <NativeSelectOption value='1'>Godfather</NativeSelectOption>
          <NativeSelectOption value='2'>A Working Man</NativeSelectOption>
          <NativeSelectOption value='3'>The Dark Knight</NativeSelectOption>
          <NativeSelectOption value='4'>Inception</NativeSelectOption>
        </NativeSelect>
        <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-3 text-muted-foreground/80 group-has-[select[disabled]]:opacity-50'>
          <IconMovie aria-hidden='true' size={16} />
        </div>
      </div>
    </Field>
  )
}

export default NativeSelectWithIconDemo
