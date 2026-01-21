'use client'

import { IconMoon, IconSun } from '@tabler/icons-react'
import { Switch } from '@/components/ui/switch'

const SwitchIconLabelDemo = () => {
  return (
    <Switch aria-label='Toggle switch' id='icon-label'>
      {({ isSelected }) =>
        isSelected ? (
          <IconMoon aria-hidden='true' className='size-4' />
        ) : (
          <IconSun aria-hidden='true' className='size-4' />
        )
      }
    </Switch>
  )
}

export default SwitchIconLabelDemo
