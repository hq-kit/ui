import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const SelectSizesDemo = () => {
  return (
    <div className='w-full space-y-2'>
      <Select aria-label='select' className='w-full' placeholder='Small select'>
        <SelectTrigger size='sm'>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup title='Fruits'>
            <SelectItem id='apple'>Apple</SelectItem>
            <SelectItem id='banana'>Banana</SelectItem>
            <SelectItem id='blueberry'>Blueberry</SelectItem>
            <SelectItem id='grapes'>Grapes</SelectItem>
            <SelectItem id='pineapple'>Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select aria-label='select' className='w-full' placeholder='Default select'>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup title='Fruits'>
            <SelectItem id='apple'>Apple</SelectItem>
            <SelectItem id='banana'>Banana</SelectItem>
            <SelectItem id='blueberry'>Blueberry</SelectItem>
            <SelectItem id='grapes'>Grapes</SelectItem>
            <SelectItem id='pineapple'>Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select aria-label='select' className='w-full' placeholder='Large select'>
        <SelectTrigger className='h-10! w-full'>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup title='Fruits'>
            <SelectItem id='apple'>Apple</SelectItem>
            <SelectItem id='banana'>Banana</SelectItem>
            <SelectItem id='blueberry'>Blueberry</SelectItem>
            <SelectItem id='grapes'>Grapes</SelectItem>
            <SelectItem id='pineapple'>Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}

export default SelectSizesDemo
