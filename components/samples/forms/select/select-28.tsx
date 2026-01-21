import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const SelectWithLeadingTextDemo = () => {
  return (
    <Select className='w-full' defaultValue='1' placeholder='Select a movie'>
      <Label>Select with leading text</Label>
      <SelectTrigger>
        <span>
          Favorite Movie: <SelectValue />
        </span>
      </SelectTrigger>
      <SelectContent>
        <SelectItem id='1'>Inception</SelectItem>
        <SelectItem id='2'>Interstellar</SelectItem>
        <SelectItem id='3'>The Dark Knight</SelectItem>
        <SelectItem id='4'>Pulp Fiction</SelectItem>
      </SelectContent>
    </Select>
  )
}

export default SelectWithLeadingTextDemo
