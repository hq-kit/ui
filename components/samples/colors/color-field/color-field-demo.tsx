"use client"

import { ColorField } from "@/components/ui/colors"
import { Label } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export default function ColorFieldDemo() {
  return (
    <ColorField defaultValue="#fafafa">
      <Label>Color</Label>
      <Input />
    </ColorField>
  )
}
