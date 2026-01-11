import { Label } from '@/components/ui/label'
import { NumberField, NumberInput } from '@/components/ui/number-field'

export default function NumberFieldDemo() {
  return (
    <div className='flex flex-col gap-2 lg:flex-row'>
      <NumberField>
        <Label>Basic</Label>
        <NumberInput />
      </NumberField>
      <NumberField isReadOnly>
        <Label>Readonly</Label>
        <NumberInput />
      </NumberField>
      <NumberField isInvalid>
        <Label>Invalid</Label>
        <NumberInput />
      </NumberField>
      <NumberField isDisabled>
        <Label>Disabled</Label>
        <NumberInput />
      </NumberField>
    </div>
  )
}
