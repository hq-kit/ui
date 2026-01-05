'use client'

import { Form } from 'react-aria-components'
import { Button } from '@/components/ui/button'
import { FieldDescription, FieldLabel, FieldSet } from '@/components/ui/field'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export default function FieldSelectDemo() {
  return (
    <Form className='w-full space-y-4' onSubmit={(e) => e.preventDefault()}>
      <FieldSet>
        <Select isRequired placeholder='Choose department'>
          <FieldLabel>Department</FieldLabel>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem id='engineering'>Engineering</SelectItem>
            <SelectItem id='design'>Design</SelectItem>
            <SelectItem id='marketing'>Marketing</SelectItem>
            <SelectItem id='sales'>Sales</SelectItem>
            <SelectItem id='support'>Customer Support</SelectItem>
            <SelectItem id='hr'>Human Resources</SelectItem>
            <SelectItem id='finance'>Finance</SelectItem>
            <SelectItem id='operations'>Operations</SelectItem>
          </SelectContent>
        </Select>
        <FieldDescription>Select your department or area of work.</FieldDescription>
        <Button type='submit'>Submit</Button>
      </FieldSet>
    </Form>
  )
}
