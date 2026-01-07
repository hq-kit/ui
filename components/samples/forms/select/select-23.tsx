import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

const SelectWithSeparatorDemo = () => {
  return (
    <Select className='w-full' defaultValue='7' placeholder='Select framework'>
      <Label>Select with separator</Label>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup title='North America'>
          <SelectItem id='1'>United States</SelectItem>
          <SelectItem id='2'>Canada</SelectItem>
          <SelectItem id='3'>Mexico</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup title='Europe'>
          <SelectItem id='4'>United Kingdom</SelectItem>
          <SelectItem id='5'>Germany</SelectItem>
          <SelectItem id='6'>France</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup title='Asia'>
          <SelectItem id='7'>India</SelectItem>
          <SelectItem id='8'>Japan</SelectItem>
          <SelectItem id='9'>China</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default SelectWithSeparatorDemo
