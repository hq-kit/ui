import { Checkbox, CheckboxGroup } from "@/components/ui/checkbox"
import { Description, FieldGroup, Label } from "@/components/ui/field"

export default function CheckboxGroupDemo() {
  return (
    <CheckboxGroup>
      <Label>Show these items on the desktop:</Label>
      <Description>Select the items you want to show on the desktop.</Description>
      <FieldGroup className="gap-3">
        <Checkbox
          defaultSelected
          name="finder-pref-9k2-hard-disks-ljj-checkbox"
          value="finder-pref-9k2-hard-disks-ljj-checkbox"
        >
          Hard disks
        </Checkbox>
        <Checkbox
          defaultSelected
          name="finder-pref-9k2-external-disks-1yg-checkbox"
          value="finder-pref-9k2-external-disks-1yg-checkbox"
        >
          External disks
        </Checkbox>
        <Checkbox name="finder-pref-9k2-cds-dvds-fzt-checkbox" value="finder-pref-9k2-cds-dvds-fzt-checkbox">
          CDs, DVDs, and iPods
        </Checkbox>
        <Checkbox
          name="finder-pref-9k2-connected-servers-6l2-checkbox"
          value="finder-pref-9k2-connected-servers-6l2-checkbox"
        >
          Connected servers
        </Checkbox>
      </FieldGroup>
    </CheckboxGroup>
  )
}
