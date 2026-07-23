"use client"

import { Combobox, ComboboxChip, ComboboxChips, ComboboxContent, ComboboxItem } from "@/components/ui/combobox"
import { Label } from "@/components/ui/field"

const distros = [
  { id: 1, name: "Ubuntu" },
  { id: 2, name: "Debian" },
  { id: 3, name: "Fedora" },
  { id: 4, name: "Arch" },
  { id: 5, name: "CentOS" },
  { id: 6, name: "Gentoo" },
  { id: 7, name: "OpenSuse" },
  { id: 8, name: "Redhat" },
  { id: 9, name: "FreeBSD" },
  { id: 10, name: "NetBSD" }
]
export default function ComboboxMultiple() {
  return (
    <Combobox allowsEmptyCollection aria-label="Frameworks" className="w-62.5 max-w-full" selectionMode="multiple">
      <Label>Frameworks</Label>
      <ComboboxChips<(typeof distros)[0]>>{(value) => <ComboboxChip>{value.name}</ComboboxChip>}</ComboboxChips>
      <ComboboxContent items={distros}>{(item) => <ComboboxItem>{item.name}</ComboboxItem>}</ComboboxContent>
    </Combobox>
  )
}
