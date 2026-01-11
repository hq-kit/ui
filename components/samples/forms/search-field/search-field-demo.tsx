'use client'

import { Label } from '@/components/ui/label'
import { SearchField, SearchInput } from '@/components/ui/search-field'

export default function SearchFieldDemo() {
  return (
    <div className='flex flex-col gap-2 lg:flex-row'>
      <SearchField>
        <Label>Basic</Label>
        <SearchInput />
      </SearchField>
      <SearchField isPending>
        <Label>Pending</Label>
        <SearchInput />
      </SearchField>
      <SearchField isReadOnly>
        <Label>Read only</Label>
        <SearchInput />
      </SearchField>
      <SearchField isInvalid>
        <Label>Invalid</Label>
        <SearchInput />
      </SearchField>
      <SearchField isDisabled>
        <Label>Disabled</Label>
        <SearchInput />
      </SearchField>
    </div>
  )
}
