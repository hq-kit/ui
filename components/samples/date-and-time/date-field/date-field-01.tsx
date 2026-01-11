import { DateField, DateInput } from '@/components/ui/date-field'
import { Label } from '@/components/ui/label'

export default function DateFieldDemo() {
  return (
    <DateField>
      <Label>Event date</Label>
      <DateInput />
    </DateField>
  )
}
