# Forms Rules

HQ UI form components are built on `react-aria-components` and follow specific patterns. Always use them instead of raw HTML form elements.

## Form structure with Fieldset

When grouping form fields, use `Fieldset`, `FieldLegend`, `FieldGroup`, and `FieldDescription` — not raw `<div>` with `<h1>` or `<p>`.

```tsx
import { Fieldset, FieldLegend, FieldGroup, FieldLabel, FieldDescription } from "@/components/ui/field"
import { TextField } from "@/components/ui/text-field"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

// ✅ Correct — use Fieldset, Legend, and Text
<form>
  <Fieldset>
    <FieldLegend>Login</FieldLegend>
    <FieldDescription>
      Login to your account to access your dashboard and manage your settings.
    </FieldDescription>

    <TextField name="email">
      <FieldLabel>Email</FieldLabel>
      <Input type="email" />
    </TextField>
    <TextField name="name">
      <FieldLabel>Name</FieldLabel>
      <Input />
    </TextField>
  </Fieldset>
  <Button className="mt-6" type="submit">
    Login
  </Button>
</form>

// ❌ Wrong — using raw div, h1, and p
<div className="space-y-6">
  <h1 className="text-xl font-semibold">Login</h1>
  <p className="text-muted-fg text-sm/6">
    Login to your account to access your dashboard and manage your settings.
  </p>
  <form>
    <div className="space-y-6">
      <TextField name="email">
        <Label>Email</Label>
        <Input type="email" />
      </TextField>
      <TextField name="name">
        <Label>Name</Label>
        <Input />
      </TextField>
      <Button type="submit">Login</Button>
    </div>
  </form>
</div>
```

### Why?

- **`<Fieldset>`** groups related fields and handles spacing automatically
- **`<FieldLegend>`** is the correct heading for a fieldset — not `<h1>` or `<Heading>`
- **`<FieldGroup>`** wraps multiple fields with `gap` — use it when you need to group fields inside a Fieldset
- No need to manually add `gap` to wrapper divs — Fieldset and FieldGroup handle spacing

### Available field components from `@/components/ui/field`

- `FieldLabel` — field label with required indicator support
- `FieldDescription` — helper text below a field
- `FieldError` — validation error message
- `Fieldset` — groups related form fields
- `FieldGroup` — wraps multiple fields with spacing (`space-y-6`)
- `FieldLegend` — heading for a Fieldset

## Forbidden input types

Never use `type="number"` or `type="date"` on `<Input />`. These HTML input types have inconsistent browser behavior and poor accessibility. Use the dedicated HQ UI components instead:

- **`type="number"`** → Use `NumberField` with `NumberInput` from `@/components/ui/number-field`
- **`type="date"`** → Use `DatePicker` from `@/components/ui/field`

```tsx
// ❌ NEVER do this
<Input type="number" />
<Input type="date" />

// ✅ Use NumberField for numeric values
<NumberField name="quantity">
  <FieldLabel>Quantity</FieldLabel>
  <NumberInput />
</NumberField>

// ✅ Use DatePicker for dates
<DatePicker name='event-date'>
  <FieldLabel>Event Date</FieldLabel>
  <DatePickerInput />
  <PopoverContent className='w-auto p-0'>
    <Calendar />
  </PopoverContent>
</DatePicker>
```

## Text input

Use `TextField` with `Input`, `FieldLabel`, and `FieldDescription`:

```tsx
import { TextField } from "@/components/ui/text-field"
import { Input } from "@/components/ui/input"
import { FieldLabel, FieldDescription } from "@/components/ui/field"

// ✅ Basic text field
<TextField>
  <FieldLabel>Name</FieldLabel>
  <Input placeholder="Enter your name" />
</TextField>

// ✅ With description
<TextField>
  <FieldLabel>Email</FieldLabel>
  <Input type="email" />
  <FieldDescription>We'll never share your email.</FieldDescription>
</TextField>

// ✅ Required — always include FieldError when isRequired is set
<TextField isRequired name="email">
  <FieldLabel>Email</FieldLabel>
  <Input type="email" />
  <FieldError />
</TextField>

// ✅ With description — use Description when you need helper text below a field
<TextField name="email">
  <FieldLabel>Email</FieldLabel>
  <Input type="email" />
  <FieldDescription>Example description for the email field.</FieldDescription>
</TextField>

// ✅ Required + description — both can be used together
<TextField isRequired name="email">
  <FieldLabel>Email</FieldLabel>
  <Input type="email" />
  <FieldDescription>Example description for the email field.</FieldDescription>
  <FieldError />
</TextField>

// ❌ Wrong — isRequired without FieldError
<TextField isRequired>
  <FieldLabel>Username</FieldLabel>
  <Input />
</TextField>

// ❌ Wrong — never use raw input
<label>Name</label>
<input type="text" placeholder="Enter your name" />
```

### TextField scope

Use `TextField` for text-like values only, such as `text`, `email`, `password`, `tel`, and `url`.

- Do not use `TextField` for numeric values like price, amount, quantity, or percentage. Use `NumberField` instead.
- Do not use `TextField` with `<Input type="date" />`. Use `DatePicker` instead.

### isRequired rule

When `isRequired` is set on a field component, you MUST include `<FieldError />` as a child. This ensures validation errors are displayed to the user.

### Description

Use `<FieldDescription>` when you need helper text below a field. It can be used on its own or combined with `<FieldError />` when the field is also required.

## Select

Use `Select`, `SelectTrigger`, `SelectValue`, `SelectContent`, `SelectItem`:

```tsx
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"

// ✅ Correct
<Select>
  <FieldLabel>Country</FieldLabel>
  <SelectTrigger>
    <SelectValue />
  </SelectTrigger>
  <SelectContent>
    <SelectItem id="us">United States</SelectItem>
    <SelectItem id="uk">United Kingdom</SelectItem>
  </SelectContent>
</Select>

// ✅ Controlled — use value/onChange (not selectedKey/onSelectionChange)
<Select value={country} onChange={setCountry}>
  <FieldLabel>Country</FieldLabel>
  <SelectTrigger>
    <SelectValue />
  </SelectTrigger>
  <SelectContent>
    <SelectItem id="us">United States</SelectItem>
    <SelectItem id="uk">United Kingdom</SelectItem>
  </SelectContent>
</Select>

// ✅ Uncontrolled — use defaultValue (never defaultSelectedKey)
<Select defaultValue="us">
  <FieldLabel>Country</FieldLabel>
  <SelectTrigger>
    <SelectValue />
  </SelectTrigger>
  <SelectContent>
    <SelectItem id="us">United States</SelectItem>
    <SelectItem id="uk">United Kingdom</SelectItem>
  </SelectContent>
</Select>

// ❌ Wrong — selectedKey/onSelectionChange are deprecated
<Select selectedKey={country} onSelectionChange={setCountry}>
  ...
</Select>

// ❌ Wrong — never use defaultSelectedKey
<Select defaultSelectedKey="us">
  ...
</Select>

// ❌ Wrong — never use raw select
<select>
  <option value="us">United States</option>
</select>
```

## ComboBox

```tsx
import { ComboBox, ComboBoxInput, ComboBoxContent, ComboBoxItem } from "@/components/ui/combo-box"

// ✅ Correct
<ComboBox>
  <FieldLabel>Framework</FieldLabel>
  <ComboBoxInput />
  <ComboBoxContent>
    <ComboBoxItem id="react">React</ComboBoxItem>
    <ComboBoxItem id="vue">Vue</ComboBoxItem>
  </ComboBoxContent>
</ComboBox>

// ✅ Controlled — use value/onChange (not selectedKey/onSelectionChange)
<ComboBox value={framework} onChange={setFramework}>
  <FieldLabel>Framework</FieldLabel>
  <ComboBoxInput />
  <ComboBoxContent>
    <ComboBoxItem id="react">React</ComboBoxItem>
    <ComboBoxItem id="vue">Vue</ComboBoxItem>
  </ComboBoxContent>
</ComboBox>

// ✅ Uncontrolled — use defaultValue (never defaultSelectedKey)
<ComboBox defaultValue="react">
  <FieldLabel>Framework</FieldLabel>
  <ComboBoxInput />
  <ComboBoxContent>
    <ComboBoxItem id="react">React</ComboBoxItem>
    <ComboBoxItem id="vue">Vue</ComboBoxItem>
  </ComboBoxContent>
</ComboBox>

// ❌ Wrong — selectedKey/onSelectionChange are deprecated
<ComboBox selectedKey={framework} onSelectionChange={setFramework}>
  ...
</ComboBox>

// ❌ Wrong — never use defaultSelectedKey
<ComboBox defaultSelectedKey="react">
  ...
</ComboBox>
```

## Deprecated props for Select and ComboBox

`selectedKey`, `onSelectionChange`, and `defaultSelectedKey` are **deprecated**. Always use `value`/`onChange` for controlled state and `defaultValue` for uncontrolled state instead.

| Deprecated           | Use instead    |
| -------------------- | -------------- |
| `selectedKey`        | `value`        |
| `onSelectionChange`  | `onChange`     |
| `defaultSelectedKey` | `defaultValue` |

## Checkbox

```tsx
import { Checkbox, CheckboxGroup } from "@/components/ui/checkbox"

// ✅ Single checkbox
<Checkbox>Accept terms</Checkbox>

// ✅ Checkbox group
<CheckboxGroup>
  <FieldLabel>Interests</FieldLabel>
  <Checkbox value="music">Music</Checkbox>
  <Checkbox value="sports">Sports</Checkbox>
</CheckboxGroup>
```

## Radio

```tsx
import { Radio, RadioGroup } from "@/components/ui/radio";

// ✅ Correct
<RadioGroup>
  <FieldLabel>Plan</FieldLabel>
  <Radio value="free">Free</Radio>
  <Radio value="pro">Pro</Radio>
</RadioGroup>;
```

## Textarea

```tsx
import { Textarea } from "@/components/ui/input"

// ✅ Correct
<TextField>
  <FieldLabel>Message</FieldLabel>
  <Textarea />
</TextField>

// ❌ Wrong
<textarea placeholder="Message" />
```

## Number field

```tsx
import { NumberField, NumberInput } from "@/components/ui/number-field"
import { FieldError, FieldLabel } from "@/components/ui/field"

// ✅ Correct
<NumberField name="price">
  <FieldLabel>Price</FieldLabel>
  <NumberInput />
</NumberField>

// ✅ Required
<NumberField isRequired name="price">
  <FieldLabel>Price</FieldLabel>
  <NumberInput />
  <FieldError />
</NumberField>

// ❌ Wrong — do not use TextField/Input type="number" for numeric values
<TextField name="price">
  <FieldLabel>Price</FieldLabel>
  <Input type="number" />
</TextField>
```

## Search field

```tsx
import { SearchField, SearchInput } from "@/components/ui/search-field";
import { FieldLabel } from "@/components/ui/field";

// ✅ Correct
<SearchField>
  <FieldLabel>Search</FieldLabel>
  <SearchInput />
</SearchField>;
```

## Switch

```tsx
import { Switch } from "@/components/ui/switch";

// ✅ Correct
<Switch>Enable notifications</Switch>;
```

## Date & Time

```tsx
import { Calendar } from '@/components/ui/calendar'
import { DatePickerInput } from '@/components/ui/date-input'
import { DatePicker, FieldLabel } from '@/components/ui/field'
import { PopoverContent } from '@/components/ui/popover'

// ✅ Correct
<DatePicker name="startDate">
  <FieldLabel>Start date</FieldLabel>
  <DatePickerInput />
  <PopoverContent className='w-auto p-0'>
    <Calendar />
  </PopoverContent>
</DatePicker>

// ✅ Required
<DatePicker isRequired name="startDate">
  <FieldLabel>Start date</FieldLabel>
  <DatePickerInput />
  <PopoverContent className='w-auto p-0'>
    <Calendar />
  </PopoverContent>
</DatePicker>

// ❌ Wrong — do not use TextField/Input type="date" for dates
<TextField name="startDate">
  <FieldLabel>Start date</FieldLabel>
  <Input type="date" />
</TextField>
```

## Accessibility: aria-label when no visible Label

Every form field, `GridList`, and `Table` **must** have a label. If there is no visible `<Label>`, you **must** provide an `aria-label` prop.

```tsx
// ✅ Visible label — no aria-label needed
<TextField>
  <FieldLabel>Email</FieldLabel>
  <Input type="email" />
</TextField>

// ✅ No visible label — aria-label required
<TextField aria-label="Email">
  <Input type="email" />
</TextField>

// ✅ SearchField without visible label
<SearchField aria-label="Search products">
  <SearchInput />
</SearchField>

// ✅ NumberField without visible label
<NumberField aria-label="Quantity">
  <NumberInput />
</NumberField>

// ✅ Select without visible label
<Select aria-label="Sort by">
  <SelectTrigger>
    <SelectValue />
  </SelectTrigger>
  <SelectContent>
    <SelectItem id="newest">Newest</SelectItem>
    <SelectItem id="oldest">Oldest</SelectItem>
  </SelectContent>
</Select>

// ✅ GridList must have aria-label
<GridList aria-label="Shopping cart items">
  <GridListItem>Item 1</GridListItem>
  <GridListItem>Item 2</GridListItem>
</GridList>

// ✅ Table must have aria-label
<Table aria-label="Users">
  <TableHeader>
    <TableColumn>Name</TableColumn>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>John</TableCell>
    </TableRow>
  </TableBody>
</Table>

// ❌ Wrong — no label and no aria-label
<TextField>
  <Input type="email" />
</TextField>

// ❌ Wrong — GridList without aria-label
<GridList>
  <GridListItem>Item 1</GridListItem>
</GridList>

// ❌ Wrong — Table without aria-label
<Table>
  <TableHeader>
    <TableColumn>Name</TableColumn>
  </TableHeader>
</Table>
```

This rule applies to **all** form components: `TextField`, `NumberField`, `SearchField`, `Select`, `DatePicker`, `DateRangePicker`, `TimeField`, `CheckboxGroup`, `RadioGroup`, `ComboBox`, `TagField`, as well as `GridList` and `Table`.

## Key patterns

1. **Fieldset + FieldLegend** for grouping related fields — not `<div>` + `<h1>`
2. **FieldDescription** for form descriptions — not `<p>`
3. **FieldLabel and FieldDescription** come from `@/components/ui/field` — they work with all form components
4. **Use the correct field primitive**: `TextField` for text-like values, `NumberField` for numeric values, `DatePicker` for calendar dates
5. **Controlled vs uncontrolled**: Use `value`/`onChange` for controlled, `defaultValue` for uncontrolled
6. **Validation**: Use `isRequired`, `isInvalid`, `validate` props — not custom validation wrappers
7. **Disabled/readonly**: Use `isDisabled`, `isReadOnly` props (camelCase, not HTML attributes)
8. **"use client"** directive: Required when using form components with state/hooks if working with Nextjs project
