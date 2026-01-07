import { IconCircle } from '@tabler/icons-react'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const SelectStatusDemo = () => {
  return (
    <Select className='w-full' defaultValue='1' placeholder='Select status'>
      <Label>Status select</Label>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent className='[&_*[role=option]>span>svg]:shrink-0 [&_*[role=option]>span>svg]:text-muted-foreground/80 [&_*[role=option]>span]:right-2 [&_*[role=option]>span]:left-auto [&_*[role=option]>span]:flex [&_*[role=option]>span]:items-center [&_*[role=option]>span]:gap-2 [&_*[role=option]]:pr-8 [&_*[role=option]]:pl-2'>
        <SelectItem id='1'>
          <span className='flex items-center gap-2'>
            <IconCircle className='size-2 fill-violet-500 text-violet-500' />
            <span className='truncate'>In Progress</span>
          </span>
        </SelectItem>
        <SelectItem id='2'>
          <span className='flex items-center gap-2'>
            <IconCircle className='size-2 fill-amber-500 text-amber-500' />
            <span className='truncate'>Pending</span>
          </span>
        </SelectItem>
        <SelectItem id='3'>
          <span className='flex items-center gap-2'>
            <IconCircle className='size-2 fill-emerald-600 text-emerald-600' />
            <span className='truncate'>Completed</span>
          </span>
        </SelectItem>
        <SelectItem id='4'>
          <span className='flex items-center gap-2'>
            <IconCircle className='size-2 fill-gray-500 text-gray-500' />
            <span className='truncate'>Cancelled</span>
          </span>
        </SelectItem>
        <SelectItem id='5'>
          <span className='flex items-center gap-2'>
            <IconCircle className='size-2 fill-red-500 text-red-500' />
            <span className='truncate'>Rejected</span>
          </span>
        </SelectItem>
      </SelectContent>
    </Select>
  )
}

export default SelectStatusDemo
