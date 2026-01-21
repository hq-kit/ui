'use client'

import { Form } from 'react-aria-components'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { FieldDescription, FieldGroup, FieldLegend, FieldSeparator, FieldSet } from '@/components/ui/field'
import { Label } from '@/components/ui/label'

export default function FieldCheckboxDemo() {
  return (
    <Form className='w-full space-y-4' onSubmit={(e) => e.preventDefault()}>
      <FieldGroup>
        <FieldSet>
          <FieldLegend variant='label'>Show these items on the desktop</FieldLegend>
          <FieldDescription>Select the items you want to show on the desktop.</FieldDescription>
          <FieldGroup className='gap-3'>
            <Checkbox>Hard disks</Checkbox>
            <Checkbox>External disks</Checkbox>
            <Checkbox>CDs, DVDs, and iPods</Checkbox>
            <Checkbox>Connected servers</Checkbox>
          </FieldGroup>
        </FieldSet>
        <FieldSeparator />
        <Checkbox isRequired>
          <Label>Sync Desktop & Documents folders</Label>
          <p>
            Your Desktop & Documents folders are being synced with iCloud Drive. You can access them from other devices.
          </p>
        </Checkbox>
      </FieldGroup>
      <Button type='submit'>Save Preferences</Button>
    </Form>
  )
}
