import { IconDeviceDesktop, IconDeviceIpad, IconDeviceMobile } from '@tabler/icons-react'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

const ToggleGroupBasic = () => {
  return (
    <ToggleGroup defaultSelectedKeys={['sm']} variant='outline'>
      <ToggleGroupItem id='sm'>
        <IconDeviceMobile />
      </ToggleGroupItem>
      <ToggleGroupItem id='md'>
        <IconDeviceIpad />
      </ToggleGroupItem>
      <ToggleGroupItem id='lg'>
        <IconDeviceDesktop />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}

export default ToggleGroupBasic
