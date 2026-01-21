import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const SelectDemo = () => {
  return (
    <Select className='w-full' defaultValue='apple' placeholder='Select a fruit'>
      <Label>Default select</Label>
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
  )
}

export default SelectDemo
