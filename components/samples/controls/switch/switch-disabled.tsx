import { Switch } from "@/components/ui/switch"

export default function SwitchDisabled() {
  return (
    <div className="max-w-sm">
      <Switch id="switch-disabled-unchecked" isDisabled>
        Disabled
      </Switch>
    </div>
  )
}
