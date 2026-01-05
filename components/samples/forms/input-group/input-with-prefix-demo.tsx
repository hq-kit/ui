import { IconUser } from '@tabler/icons-react'
import { InputGroup } from '@/components/ui/input-group'

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
