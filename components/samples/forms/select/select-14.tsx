import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const SelectInvalidState = () => {
  return (
    <div className='w-full max-w-xs space-y-2'>
      <Select className='w-full' defaultValue='1'>
        <Label>Select with error</Label>
        <SelectTrigger aria-invalid>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem id='1'>Tesla</SelectItem>
          <SelectItem id='2'>BMW</SelectItem>
          <SelectItem id='3'>Audi</SelectItem>
          <SelectItem id='4'>Mercedes-Benz</SelectItem>
        </SelectContent>
      </Select>
      <p aria-live='polite' className='mt-2 text-destructive text-xs' role='alert'>
        Selected option is invalid
      </p>
    </div>
  )
}

export default SelectInvalidState
