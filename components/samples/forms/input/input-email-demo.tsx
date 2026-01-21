import { IconMail } from '@tabler/icons-react'
import { InputGroup } from '@/components/ui/input'

export default function EmailFieldDemo() {
  return (
    <InputGroup>
      <InputGroup.Addon>
        <IconMail />
      </InputGroup.Addon>
      <InputGroup.Input />
    </InputGroup>
  )
}
