import { FieldError, NumberField } from '@/components/ui/field'
import { NumberInput } from '@/components/ui/input-group'
import { Label } from '@/components/ui/label'

export default function NumberFieldDemo() {
  return (
    <NumberField isRequired>
      <Label>Quantity</Label>
      <NumberInput />
      <FieldError />
    </NumberField>
  )
}
