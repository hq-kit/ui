import { Description, Field, Label } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export default function InputDemo() {
  return (
    <Field>
      <Label htmlFor="input-demo-api-key">API Key</Label>
      <Input id="input-demo-api-key" placeholder="sk-..." type="password" />
      <Description>Your API key is encrypted and stored securely.</Description>
    </Field>
  )
}
