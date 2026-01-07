import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const SelectWithColorBorderAndRingDemo = () => {
  return (
    <Select className='w-full' defaultValue='1' placeholder='Select framework'>
      <Label>Select with colored border and ring</Label>
      <SelectTrigger className='w-full focus-visible:border-indigo-500 focus-visible:ring-indigo-500/20 dark:focus-visible:ring-indigo-500/40'>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem id='1'>Electronics</SelectItem>
        <SelectItem id='2'>Clothing</SelectItem>
        <SelectItem id='3'>Home Appliances</SelectItem>
        <SelectItem id='4'>Books</SelectItem>
      </SelectContent>
    </Select>
  )
}

export default SelectWithColorBorderAndRingDemo
