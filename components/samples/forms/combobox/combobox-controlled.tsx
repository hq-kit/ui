"use client"

import type { Key, Selection } from "react-aria-components"
import { IconCheckbox, IconForms } from "@tabler/icons-react"
import { useState } from "react"
import { Combobox, ComboboxContent, ComboboxInput, ComboboxItem } from "@/components/ui/combobox"
import { Label } from "@/components/ui/field"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

const options = [
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

export default function ComboboxControlledDemo() {
  const [mode, setMode] = useState<Selection>(new Set(["selection"]))
  return (
    <div className="space-y-4">
      <ToggleGroup onSelectionChange={setMode} selectedKeys={mode} selectionMode="single" variant="outline">
        <ToggleGroupItem id="selection">
          <IconCheckbox />
          Selection
        </ToggleGroupItem>
        <ToggleGroupItem id="input">
          <IconForms />
          Input
        </ToggleGroupItem>
      </ToggleGroup>
      {Array.from(mode).includes("selection") ? <ComboboxControlledSelected /> : <ComboboxControlledInput />}
    </div>
  )
}

const ComboboxControlledInput = () => {
  const [value, setValue] = useState<string>("")
  return (
    <div className="grid space-y-4">
      <Combobox allowsCustomValue inputValue={value} onInputChange={setValue}>
        <Label>Controlled Input</Label>
        <ComboboxInput placeholder="Choose a distro" />
        <ComboboxContent items={options}>
          {(option) => <ComboboxItem id={option.id}>{option.name}</ComboboxItem>}
        </ComboboxContent>
      </Combobox>
      <code className="text-xs">value: {JSON.stringify(value)}</code>
    </div>
  )
}

const ComboboxControlledSelected = () => {
  const [selected, setSelected] = useState<Key | null>(null)
  return (
    <div className="grid space-y-4">
      <Combobox onSelectionChange={setSelected} selectedKey={selected}>
        <Label>Controlled Selection</Label>
        <ComboboxInput placeholder="Choose a distro" />
        <ComboboxContent items={options}>
          {(option) => <ComboboxItem id={option.id}>{option.name}</ComboboxItem>}
        </ComboboxContent>
      </Combobox>
      <code className="text-xs">selected: {JSON.stringify(selected)}</code>
    </div>
  )
}
