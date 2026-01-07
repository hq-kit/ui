'use client'

import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'

const SwitchToggleLabelDemo = () => {
  return (
    <Switch aria-label='Toggle switch label' id='toggle-label'>
      {({ isSelected }) => <Label>{isSelected ? 'Yes' : 'No'}</Label>}
    </Switch>
  )
}

export default SwitchToggleLabelDemo
