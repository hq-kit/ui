"use client"

import { useState } from "react"
import { Description, Field, Label } from "@/components/ui/field"
import { type Key, ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export default function ToggleGroupFontWeightSelector() {
  const [fontWeight, setFontWeight] = useState(new Set<Key>(["normal"]))
  return (
    <Field>
      <Label>Font Weight</Label>
      <ToggleGroup
        onSelectionChange={setFontWeight}
        selectedKeys={fontWeight}
        selectionMode="single"
        size="lg"
        spacing={2}
        variant="outline"
      >
        <ToggleGroupItem
          aria-label="Light"
          className="flex size-16 flex-col items-center justify-center rounded-xl"
          id="light"
        >
          <span className="font-light text-2xl leading-none">Aa</span>
          <span className="text-muted-foreground text-xs">Light</span>
        </ToggleGroupItem>
        <ToggleGroupItem
          aria-label="Normal"
          className="flex size-16 flex-col items-center justify-center rounded-xl"
          id="normal"
        >
          <span className="font-normal text-2xl leading-none">Aa</span>
          <span className="text-muted-foreground text-xs">Normal</span>
        </ToggleGroupItem>
        <ToggleGroupItem
          aria-label="Medium"
          className="flex size-16 flex-col items-center justify-center rounded-xl"
          id="medium"
        >
          <span className="font-medium text-2xl leading-none">Aa</span>
          <span className="text-muted-foreground text-xs">Medium</span>
        </ToggleGroupItem>
        <ToggleGroupItem
          aria-label="Bold"
          className="flex size-16 flex-col items-center justify-center rounded-xl"
          id="bold"
        >
          <span className="font-bold text-2xl leading-none">Aa</span>
          <span className="text-muted-foreground text-xs">Bold</span>
        </ToggleGroupItem>
      </ToggleGroup>
      <Description>
        Use <code className="rounded-md bg-muted px-1 py-0.5 font-mono">font-{fontWeight}</code> to set the font weight.
      </Description>
    </Field>
  )
}
