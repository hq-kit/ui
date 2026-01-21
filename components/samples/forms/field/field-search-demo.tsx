'use client'

import { Form } from 'react-aria-components'
import { Button } from '@/components/ui/button'
import { FieldError } from '@/components/ui/field'
import { Label } from '@/components/ui/label'
import { SearchField, SearchInput } from '@/components/ui/search-field'

export default function SearchFieldDemo() {
  return (
    <Form className='w-full space-y-4' onSubmit={(e) => e.preventDefault()}>
      <SearchField isRequired>
        <Label>Search</Label>
        <SearchInput />
        <FieldError />
      </SearchField>
      <Button type='submit'>Submit</Button>
    </Form>
  )
}
