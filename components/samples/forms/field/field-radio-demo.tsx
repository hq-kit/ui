import { Form } from 'react-aria-components'
import { Field, FieldDescription, FieldLabel, FieldSet } from '@/components/ui/field'
import { Radio, RadioGroup } from '@/components/ui/radio'

export default function FieldRadioDemo() {
  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <FieldSet>
        <FieldLabel>Subscription Plan</FieldLabel>
        <FieldDescription>Yearly and lifetime plans offer significant savings.</FieldDescription>
        <RadioGroup defaultValue='monthly'>
          <Radio value='monthly'>Monthly ($9.99/month)</Radio>
          <Field orientation='horizontal'>
            <Radio value='yearly'>Yearly ($99.99/year)</Radio>
          </Field>
          <Radio value='lifetime'>Lifetime ($299.99)</Radio>
        </RadioGroup>
      </FieldSet>
    </Form>
  )
}
