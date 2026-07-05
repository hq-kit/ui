"use client"

import { Button } from "@/components/ui/button"
import { FieldError, Form, Label } from "@/components/ui/field"
import { SearchField, SearchInput } from "@/components/ui/search-field"

export default function SearchFieldDemo() {
  return (
    <Form className="w-full space-y-4" onSubmit={(e) => e.preventDefault()}>
      <SearchField isRequired>
        <Label>Search</Label>
        <SearchInput />
        <FieldError />
      </SearchField>
      <Button type="submit">Submit</Button>
    </Form>
  )
}
