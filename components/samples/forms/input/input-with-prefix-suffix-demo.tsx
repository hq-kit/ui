import { InputGroup } from '@/components/ui/input'

export default function WithPrefixSuffixFieldDemo() {
  return (
    <InputGroup>
      <InputGroup.Addon align='inline-start'>https://</InputGroup.Addon>
      <InputGroup.Input />
      <InputGroup.Addon align='inline-end'>.vercel.app</InputGroup.Addon>
    </InputGroup>
  )
}
