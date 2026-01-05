import { IconSearch } from '@tabler/icons-react'
import { InputGroup } from '@/components/ui/input-group'

export default function InputSearchDemo() {
  return (
    <InputGroup>
      <InputGroup.Input placeholder='Search...' />
      <InputGroup.Addon>
        <IconSearch />
      </InputGroup.Addon>
      <InputGroup.Addon align='inline-end'>12 results</InputGroup.Addon>
    </InputGroup>
  )
}
