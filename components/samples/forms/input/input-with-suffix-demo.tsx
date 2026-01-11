import { InputGroup } from '@/components/ui/input'

export default function WithSuffixFieldDemo() {
  return (
    <InputGroup>
      <InputGroup.Input />
      <InputGroup.Addon align='inline-end'>.com</InputGroup.Addon>
    </InputGroup>
  )
}
