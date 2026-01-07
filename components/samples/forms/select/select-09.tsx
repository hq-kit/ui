import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select'

const NativeSelectWithInsetLabelDemo = () => {
  return (
    <div className='relative w-full max-w-xs rounded-md border border-input bg-background shadow-xs outline-none transition-[color,box-shadow] focus-within:border-ring focus-within:ring-[3px] focus-within:ring-ring/50 has-[select:is(:disabled)_*]:pointer-events-none has-[select:disabled]:cursor-not-allowed has-aria-invalid:border-destructive has-[select:disabled]:opacity-50 has-aria-invalid:ring-destructive/20 dark:has-aria-invalid:ring-destructive/40'>
      <label className='block px-3 pt-1 font-medium text-foreground text-xs' htmlFor='select'>
        Native select with inset label
      </label>
      <NativeSelect
        className='border-none bg-transparent shadow-none focus-visible:ring-0 focus-visible:ring-offset-0'
        defaultValue=''
        id='select'
      >
        <NativeSelectOption disabled value=''>
          Pick your favorite movie
        </NativeSelectOption>
        <NativeSelectOption value='1'>Interstellar</NativeSelectOption>
        <NativeSelectOption value='2'>Dune</NativeSelectOption>
        <NativeSelectOption value='3'>The Matrix</NativeSelectOption>
        <NativeSelectOption value='4'>Catch Me If You Can</NativeSelectOption>
      </NativeSelect>
    </div>
  )
}

export default NativeSelectWithInsetLabelDemo
