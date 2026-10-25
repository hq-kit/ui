"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/field"
import { GridList, GridListItem } from "@/components/ui/grid-list"
import { Radio, RadioGroup } from "@/components/ui/radio"
import { Toolbar } from "@/components/ui/toolbar"

export default () => {
  const [selectionMode, setSelectionMode] = useState<"none" | "single" | "multiple">("none")
  const [layout, setLayout] = useState<"grid" | "stack">("stack")
  return (
    <>
      <Toolbar className="absolute top-0 left-0 w-full flex-wrap border-b px-4 py-2 sm:flex-nowrap">
        <RadioGroup
          onChange={(v) => setSelectionMode(v as "none" | "single" | "multiple")}
          orientation="horizontal"
          value={selectionMode}
        >
          <Label>Selection Mode</Label>
          <Radio value="none">None</Radio>
          <Radio value="multiple">Multiple</Radio>
          <Radio value="single">Single</Radio>
        </RadioGroup>
        <RadioGroup onChange={(v) => setLayout(v as "grid" | "stack")} orientation="horizontal" value={layout}>
          <Label>Layout</Label>
          <Radio value="stack">Stack</Radio>
          <Radio value="grid">Grid</Radio>
        </RadioGroup>
      </Toolbar>
      <Card className="mt-20 w-full p-0 sm:mt-10">
        <GridList
          aria-label="Select your favorite linux distro"
          items={linuxDistros}
          layout={layout}
          selectionMode={selectionMode}
        >
          {(item) => <GridListItem id={item.id}>{item.name}</GridListItem>}
        </GridList>
      </Card>
    </>
  )
}

const linuxDistros = [
  {
    id: 1,
    name: "Ubuntu"
  },
  {
    id: 2,
    name: "Debian"
  },
  {
    id: 3,
    name: "Linux Mint"
  },
  {
    id: 4,
    name: "Fedora"
  },
  {
    id: 5,
    name: "Arch Linux"
  },
  {
    id: 6,
    name: "Manjaro"
  },
  {
    id: 7,
    name: "openSUSE"
  },
  {
    id: 8,
    name: "Kali Linux"
  },
  {
    id: 9,
    name: "Pop!_OS"
  },
  {
    id: 10,
    name: "Rocky Linux"
  }
]
