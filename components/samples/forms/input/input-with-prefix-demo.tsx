import { IconUser } from '@tabler/icons-react'
import { InputGroup } from '@/components/ui/input'

export default function WithPrefixFieldDemo() {
  return (
    <InputGroup>
      <InputGroup.Addon>
        <IconUser />
      </InputGroup.Addon>
      <InputGroup.Input />
    </InputGroup>
  )
}
