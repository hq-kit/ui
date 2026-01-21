import { IconBell, IconBellFilled, IconKey, IconKeyOff, IconMoon, IconSun } from '@tabler/icons-react'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

const ToggleGroupVertical = () => {
  return (
    <ToggleGroup orientation='vertical' selectionMode='multiple' variant='outline'>
      <ToggleGroupItem id='dm'>
        {({ isSelected }) => (
          <>
            {isSelected ? <IconMoon /> : <IconSun />}
            {isSelected ? 'Dark' : 'Light'} Mode
          </>
        )}
      </ToggleGroupItem>
      <ToggleGroupItem id='n'>
        {({ isSelected }) => (
          <>
            {isSelected ? <IconBellFilled /> : <IconBell />}
            Notifications {isSelected ? 'On' : 'Off'}
          </>
        )}
      </ToggleGroupItem>
      <ToggleGroupItem id='t'>
        {({ isSelected }) => (
          <>
            {isSelected ? <IconKey /> : <IconKeyOff />}
            2FA {isSelected ? 'On' : 'Off'}
          </>
        )}
      </ToggleGroupItem>
    </ToggleGroup>
  )
}

export default ToggleGroupVertical
