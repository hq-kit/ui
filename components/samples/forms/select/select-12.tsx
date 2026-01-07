import { IconMovie } from '@tabler/icons-react'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const SelectWithIconDemo = () => {
  return (
    <Select className='w-full' defaultValue='god of wars' placeholder='Select time'>
      <Label>Select with icon</Label>
      <SelectTrigger className='relative w-full pl-9'>
        <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-3 text-muted-foreground/80 group-has-[select[disabled]]:opacity-50'>
          <IconMovie aria-hidden='true' size={16} />
        </div>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem id='god of wars'>God of Wars</SelectItem>
        <SelectItem id='ghost rider'>Ghost Rider</SelectItem>
        <SelectItem id='the cloth'>The Cloth</SelectItem>
        <SelectItem id='the possession'>The Possession</SelectItem>
      </SelectContent>
    </Select>
  )
}

export default SelectWithIconDemo
