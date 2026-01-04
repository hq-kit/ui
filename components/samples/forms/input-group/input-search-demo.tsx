'use client'

import { Form } from 'react-aria-components'
import { Button } from '@/components/ui/button'
import { FieldError, SearchField } from '@/components/ui/field'
import { SearchInput } from '@/components/ui/input-group'
import { Label } from '@/components/ui/label'

export default function SearchFieldDemo() {
  return (
    <Form className='w-full space-y-4' onSubmit={(e) => e.preventDefault()}>
      <SearchField>
        <Label>Search</Label>
        <SearchInput />
        <FieldError />
      </SearchField>
      <Button type='submit'>Submit</Button>
    </Form>
  )
}
