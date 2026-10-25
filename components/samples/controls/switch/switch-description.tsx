import { Description, Label } from "@/components/ui/field"
import { Switch } from "@/components/ui/switch"

export default function SwitchDescription() {
  return (
    <div className="max-w-sm">
      <Switch id="switch-focus-mode">
        <Label htmlFor="switch-focus-mode">Share across devices</Label>
        <Description>Focus is shared across devices, and turns off when you leave the app.</Description>
      </Switch>
    </div>
  )
}
