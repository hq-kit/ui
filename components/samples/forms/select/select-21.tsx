import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const SelectRequiredDemo = () => {
  return (
    <Select className='w-full' defaultValue='2' isRequired placeholder='Select framework'>
      <Label className='gap-1'>
        Required select <span className='text-destructive'>*</span>
      </Label>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem id='1'>United States</SelectItem>
        <SelectItem id='2'>Japan</SelectItem>
        <SelectItem id='3'>Australia</SelectItem>
        <SelectItem id='4'>Brazil</SelectItem>
      </SelectContent>
    </Select>
  )
}

export default SelectRequiredDemo
