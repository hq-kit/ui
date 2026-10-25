import { Switch } from "@/components/ui/switch"

export default function SwitchSizes() {
  return (
    <div className="flex gap-4">
      <Switch id="switch-size-sm" size="sm">
        Small
      </Switch>
      <Switch id="switch-size-default" size="default">
        Default
      </Switch>
    </div>
  )
}
