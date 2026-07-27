"use client"

import { type FormEvent, useState } from "react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { FieldError, FieldGroup, Form, Label } from "@/components/ui/field"
import { SearchField, SearchInput } from "@/components/ui/search-field"

export default function SearchFieldDemo() {
  const [search, setSearch] = useState("")
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    toast("Form submitted", {
      description: JSON.stringify({ search }, null, 2)
    })
  }
  return (
    <Form className="w-full" onSubmit={onSubmit}>
      <FieldGroup>
        <SearchField isRequired name="search" onChange={setSearch} value={search}>
          <Label>Search</Label>
          <SearchInput />
          <FieldError />
        </SearchField>
        <Button type="submit">Submit</Button>
      </FieldGroup>
    </Form>
  )
}
