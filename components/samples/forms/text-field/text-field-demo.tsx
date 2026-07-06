import { Label } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { TextField } from "@/components/ui/text-field"

export default function TextFieldDemo() {
  return (
    <div className="flex flex-col gap-2 lg:flex-row">
      <TextField>
        <Label>Basic</Label>
        <Input />
      </TextField>
      <TextField isReadOnly>
        <Label>Readonly</Label>
        <Input />
      </TextField>
      <TextField isInvalid>
        <Label>Invalid</Label>
        <Input />
      </TextField>
      <TextField isDisabled>
        <Label>Disabled</Label>
        <Input />
      </TextField>
    </div>
  )
}
