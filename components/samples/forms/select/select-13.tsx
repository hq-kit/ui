import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const SelectWithHelperTextDemo = () => {
  return (
    <div className='w-full max-w-xs space-y-2'>
      <Select className='w-full' defaultValue='3' placeholder='Select framework'>
        <Label>Select with helper text</Label>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem id='1'>Florida</SelectItem>
          <SelectItem id='2'>New York</SelectItem>
          <SelectItem id='3'>California</SelectItem>
          <SelectItem id='4'>Texas</SelectItem>
        </SelectContent>
      </Select>
      <p aria-live='polite' className='mt-2 text-muted-foreground text-xs' role='region'>
        Could you share which city you&apos;re based in?
      </p>
    </div>
  )
}

export default SelectWithHelperTextDemo
