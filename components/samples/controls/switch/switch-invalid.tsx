import { Description, Label } from "@/components/ui/field"
import { Switch } from "@/components/ui/switch"

export default function SwitchInvalid() {
  return (
    <div className="max-w-sm">
      <Switch id="switch-terms" isInvalid>
        <Label htmlFor="switch-terms">Accept terms and conditions</Label>
        <Description>You must accept the terms and conditions to continue.</Description>
      </Switch>
    </div>
  )
}
