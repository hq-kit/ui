import { IconGuitarPick, IconHeadphones, IconMicrophone, IconMusic } from '@tabler/icons-react'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const SelectDemo = () => {
  return (
    <Select className='w-full' defaultValue='rock' placeholder='Select a music genre'>
      <Label>Select option with icon</Label>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup title='Music Genres'>
          <SelectItem id='rock'>
            <IconGuitarPick />
            Rock
          </SelectItem>
          <SelectItem id='electronic'>
            <IconHeadphones />
            Electronic
          </SelectItem>
          <SelectItem id='pop'>
            <IconMicrophone />
            Pop
          </SelectItem>
          <SelectItem id='jazz'>
            <IconMusic />
            Jazz
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default SelectDemo
