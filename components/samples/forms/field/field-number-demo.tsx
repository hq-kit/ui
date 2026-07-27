"use client"

import { IconMinus, IconPlus } from "@tabler/icons-react"
import { type FormEvent, useState } from "react"
import { Form } from "react-aria-components"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { FieldError, FieldGroup, Label } from "@/components/ui/field"
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@/components/ui/input"
import { NumberField, NumberInput } from "@/components/ui/number-field"

export default function NumberFieldDemo() {
  const [quantity, setQuantity] = useState(100)
  const [price, setPrice] = useState(2000)
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    toast("Form submitted", {
      description: JSON.stringify(
        {
          quantity,
          price
        },
        null,
        2
      )
    })
  }
  return (
    <Form className="w-full" onSubmit={onSubmit}>
      <FieldGroup>
        <NumberField isRequired name="quantity" onChange={setQuantity} value={quantity}>
          <Label>Quantity</Label>
          <NumberInput />
          <FieldError />
        </NumberField>
        <NumberField isRequired name="price" onChange={setPrice} step={100} value={price}>
          <Label>Price</Label>
          <InputGroup>
            <InputGroupAddon>
              <InputGroupButton slot="decrement">
                <IconMinus />
              </InputGroupButton>
            </InputGroupAddon>
            <InputGroupInput className="text-center" />
            <InputGroupAddon align="inline-end">
              <InputGroupButton slot="increment">
                <IconPlus />
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
          <FieldError />
        </NumberField>
        <Button type="submit">Submit</Button>
      </FieldGroup>
    </Form>
  )
}
