import { IconSearch } from '@tabler/icons-react'
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input'
import { Kbd, KbdGroup } from '@/components/ui/kbd'

export default function KbdInputGroup() {
  return (
    <div className='flex w-full max-w-xs flex-col gap-6'>
      <InputGroup>
        <InputGroupInput placeholder='Search...' />
        <InputGroupAddon>
          <IconSearch />
        </InputGroupAddon>
        <InputGroupAddon align='inline-end'>
          <KbdGroup>
            <Kbd>⌘</Kbd>
            <Kbd>K</Kbd>
          </KbdGroup>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
