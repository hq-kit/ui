import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const SelectDisabledOptionDemo = () => {
  return (
    <Select className='w-full' defaultValue='apple' placeholder='Select a fruit'>
      <Label>Disabled options select</Label>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup title='Fruits'>
          <SelectItem id='apple'>Apple</SelectItem>
          <SelectItem id='banana' isDisabled>
            Banana
          </SelectItem>
          <SelectItem id='blueberry'>Blueberry</SelectItem>
          <SelectItem id='grapes' isDisabled>
            Grapes
          </SelectItem>
          <SelectItem id='pineapple'>Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default SelectDisabledOptionDemo
