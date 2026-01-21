import { IconBold, IconItalic, IconStrikethrough, IconUnderline } from '@tabler/icons-react'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

const ToggleGroupMultipleSelection = () => {
  return (
    <ToggleGroup defaultSelectedKeys={['sm']} selectionMode='multiple' variant='outline'>
      <ToggleGroupItem id='bold'>
        <IconBold />
      </ToggleGroupItem>
      <ToggleGroupItem id='italic'>
        <IconItalic />
      </ToggleGroupItem>
      <ToggleGroupItem id='underline'>
        <IconUnderline />
      </ToggleGroupItem>
      <ToggleGroupItem id='strike'>
        <IconStrikethrough />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}

export default ToggleGroupMultipleSelection
