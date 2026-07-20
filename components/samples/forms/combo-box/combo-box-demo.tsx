"use client"
import { Combobox, ComboboxContent, ComboboxInput, ComboboxItem } from "@/components/ui/combo-box"
import { Label } from "@/components/ui/field"

const options = [
  { id: "1", value: "Debian" },
  { id: "3", value: "Fedora" },
  { id: "4", value: "Arch" },
  { id: "5", value: "Red Hat" },
  { id: "6", value: "openSUSE" },
  { id: "7", value: "Gentoo" },
  { id: "8", value: "Slackware" },
  { id: "9", value: "Void" },
  { id: "10", value: "Alpine" }
]

export default function ComboboxDemo() {
  return (
    <Combobox>
      <Label>Choose a distro</Label>
      <ComboboxInput placeholder="Choose a distro" />
      <ComboboxContent items={options}>
        {(option) => <ComboboxItem id={option.id}>{option.value}</ComboboxItem>}
      </ComboboxContent>
    </Combobox>
  )
}
