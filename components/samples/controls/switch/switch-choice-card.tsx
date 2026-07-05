import { Description, Field, FieldGroup, Label, Title } from "@/components/ui/field"
import { Switch } from "@/components/ui/switch"

export default function SwitchChoiceCard() {
  return (
    <FieldGroup className="w-full max-w-sm">
      <Label htmlFor="switch-share">
        <Field orientation="horizontal">
          <Switch id="switch-share">
            <Title>Share across devices</Title>
            <Description>Focus is shared across devices, and turns off when you leave the app.</Description>
          </Switch>
        </Field>
      </Label>
      <Label htmlFor="switch-notifications">
        <Field orientation="horizontal">
          <Switch defaultSelected id="switch-notifications">
            <Title>Enable notifications</Title>
            <Description>Receive notifications when focus mode is enabled or disabled.</Description>
          </Switch>
        </Field>
      </Label>
    </FieldGroup>
  )
}
