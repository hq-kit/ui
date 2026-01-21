'use client'

import { ColorField } from '@/components/ui/colors'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function ColorFieldDemo() {
  return (
    <ColorField defaultValue='#fafafa'>
      <Label>Color</Label>
      <Input />
    </ColorField>
  )
}
