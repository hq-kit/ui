import { Button } from "@/components/ui/button"
import { Description, Field, FieldGroup, Label } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function InputForm() {
  return (
    <form className="w-full max-w-sm">
      <FieldGroup>
        <Field>
          <Label htmlFor="form-name">Name</Label>
          <Input id="form-name" placeholder="Evil Rabbit" required type="text" />
        </Field>
        <Field>
          <Label htmlFor="form-email">Email</Label>
          <Input id="form-email" placeholder="john@example.com" type="email" />
          <Description>We&apos;ll never share your email with anyone.</Description>
        </Field>
        <div className="grid grid-cols-2 gap-4">
          <Field>
            <Label htmlFor="form-phone">Phone</Label>
            <Input id="form-phone" placeholder="+1 (555) 123-4567" type="tel" />
          </Field>
          <Field>
            <Label htmlFor="form-country">Country</Label>
            <Select defaultValue="us">
              <SelectTrigger id="form-country">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="ca">Canada</SelectItem>
              </SelectContent>
            </Select>
          </Field>
        </div>
        <Field>
          <Label htmlFor="form-address">Address</Label>
          <Input id="form-address" placeholder="123 Main St" type="text" />
        </Field>
        <Field orientation="horizontal">
          <Button type="button" variant="outline">
            Cancel
          </Button>
          <Button type="submit">Submit</Button>
        </Field>
      </FieldGroup>
    </form>
  )
}
