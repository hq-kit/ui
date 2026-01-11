import { IconLink } from '@tabler/icons-react'
import { ButtonGroup, ButtonGroupText } from '@/components/ui/button-group'
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function InputGroupButtonGroup() {
  return (
    <div className='grid w-full max-w-sm gap-6'>
      <ButtonGroup>
        <ButtonGroupText>
          <Label htmlFor='url'>https://</Label>
        </ButtonGroupText>
        <InputGroup>
          <InputGroupInput id='url' />
          <InputGroupAddon align='inline-end'>
            <IconLink />
          </InputGroupAddon>
        </InputGroup>
        <ButtonGroupText>.com</ButtonGroupText>
      </ButtonGroup>
    </div>
  )
}
