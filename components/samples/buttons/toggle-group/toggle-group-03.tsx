import { IconAlignCenter, IconAlignJustified, IconAlignLeft, IconAlignRight } from '@tabler/icons-react'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

const ToggleGroupGap = () => {
  return (
    <ToggleGroup spacing={2} variant='outline'>
      <ToggleGroupItem id='left'>
        <IconAlignLeft />
      </ToggleGroupItem>
      <ToggleGroupItem id='center'>
        <IconAlignCenter />
      </ToggleGroupItem>
      <ToggleGroupItem id='right'>
        <IconAlignRight />
      </ToggleGroupItem>
      <ToggleGroupItem id='justify'>
        <IconAlignJustified />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}

export default ToggleGroupGap
