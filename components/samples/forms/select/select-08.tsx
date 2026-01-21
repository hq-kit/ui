import { NativeSelect, NativeSelectOption } from '@/components/ui/native-select'

const NativeSelectWithOverlappingLabelDemo = () => {
  return (
    <div className='group relative w-full'>
      <label
        className='absolute top-0 left-2 z-10 block -translate-y-1/2 bg-background px-1 font-medium text-foreground text-xs group-has-[select:disabled]:opacity-50'
        htmlFor='select'
      >
        Native select overlapping label
      </label>
      <NativeSelect className='w-full' id='select'>
        <NativeSelectOption value='1'>Developer</NativeSelectOption>
        <NativeSelectOption value='2'>Designer</NativeSelectOption>
        <NativeSelectOption value='3'>Manager</NativeSelectOption>
        <NativeSelectOption value='4'>QA Engineer</NativeSelectOption>
      </NativeSelect>
    </div>
  )
}

export default NativeSelectWithOverlappingLabelDemo
