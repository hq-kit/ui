"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/field"
import { Input, Textarea } from "@/components/ui/input"
import { NumberField, NumberInput } from "@/components/ui/number-field"
import { Radio, RadioGroup } from "@/components/ui/radio"
import { Select } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { TextField } from "@/components/ui/text-field"

interface FieldProps {
  name: string
  label: string
  placeholder?: string
  value: any
  onChange: (value: any) => void
  isDisabled?: boolean
}

export const FieldText = ({ label, placeholder, ...props }: FieldProps) => (
  <TextField {...props} type={"text"}>
    <Label>{label}</Label>
    <Input placeholder={placeholder} />
  </TextField>
)

export const FieldNumber = ({ label, placeholder, ...props }: FieldProps) => (
  <NumberField {...props}>
    <Label>{label}</Label>
    <NumberInput placeholder={placeholder} />
  </NumberField>
)

export const FieldTextarea = ({ label, placeholder, ...props }: FieldProps) => (
  <TextField {...props}>
    <Label>{label}</Label>
    <Textarea placeholder={placeholder} />
  </TextField>
)

export interface FieldSelectProps extends FieldProps {
  items: Array<{ id: string | number; label: string }>
}

export const FieldSelect = ({ label, items, ...props }: FieldSelectProps) => (
  <Select {...props}>
    <Label>{label}</Label>
    <Select.Trigger>
      <Select.Value />
    </Select.Trigger>
    <Select.Content items={items}>{(item) => <Select.Item>{item.label}</Select.Item>}</Select.Content>
  </Select>
)

interface FieldCheckboxProps extends Omit<FieldProps, "value" | "placeholder"> {
  isSelected: boolean
}

export const FieldCheckbox = ({ label, ...props }: FieldCheckboxProps) => <Checkbox {...props}>{label}</Checkbox>

export const FieldSwitch = ({ label, ...props }: FieldCheckboxProps) => <Switch {...props}>{label}</Switch>

interface FieldRadioProps extends Omit<FieldProps, "placeholder"> {
  items: Array<{ value: string; label: string }>
  orientation?: "horizontal" | "vertical"
}

export const FieldRadio = ({ label, items, ...props }: FieldRadioProps) => (
  <RadioGroup {...props}>
    <Label>{label}</Label>
    {items.map((item) => (
      <Radio key={item.value} value={item.value}>
        {item.label}
      </Radio>
    ))}
  </RadioGroup>
)
