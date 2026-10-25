"use client"

import { useState } from "react"
import { Description, Field, Label } from "@/components/ui/field"
import { type Key, ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle"

export default () => {
  const [fontWeight, setFontWeight] = useState(new Set<Key>(["normal"]))
  return (
    <Field>
      <Label>Font Weight</Label>
      <ToggleGroup
        onSelectionChange={setFontWeight}
        selectedKeys={fontWeight}
        selectionMode="single"
        size="lg"
        variant="outline"
      >
        <ToggleGroupItem
          aria-label="Light"
          className="flex size-16 flex-col items-center justify-center rounded-xl"
          id="light"
        >
          <span className="text-2xl leading-none font-light">Aa</span>
          <span className="text-muted-foreground text-xs">Light</span>
        </ToggleGroupItem>
        <ToggleGroupItem
          aria-label="Normal"
          className="flex size-16 flex-col items-center justify-center rounded-xl"
          id="normal"
        >
          <span className="text-2xl leading-none font-normal">Aa</span>
          <span className="text-muted-foreground text-xs">Normal</span>
        </ToggleGroupItem>
        <ToggleGroupItem
          aria-label="Medium"
          className="flex size-16 flex-col items-center justify-center rounded-xl"
          id="medium"
        >
          <span className="text-2xl leading-none font-medium">Aa</span>
          <span className="text-muted-foreground text-xs">Medium</span>
        </ToggleGroupItem>
        <ToggleGroupItem
          aria-label="Bold"
          className="flex size-16 flex-col items-center justify-center rounded-xl"
          id="bold"
        >
          <span className="text-2xl leading-none font-bold">Aa</span>
          <span className="text-muted-foreground text-xs">Bold</span>
        </ToggleGroupItem>
      </ToggleGroup>
      <Description>
        Use <code className="bg-muted rounded-md px-1 py-0.5 font-mono">font-{fontWeight}</code> to set the font weight.
      </Description>
    </Field>
  )
}
