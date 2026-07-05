"use client"

import { useState } from "react"
import { type Key, Select } from "@/components/ui/select"

const moods = [
  { id: 1, name: "Excited" },
  { id: 2, name: "Relaxed" },
  { id: 3, name: "Focused" },
  { id: 4, name: "Adventurous" },
  { id: 5, name: "Curious" },
  { id: 6, name: "Creative" },
  { id: 7, name: "Confident" },
  { id: 8, name: "Playful" },
  { id: 9, name: "Chill" },
  { id: 10, name: "Motivated" }
]

export default function SelectMultipleDemo() {
  const [selectedItems, setSelectedItems] = useState<Key[]>([1, 4])

  return (
    <Select
      aria-label="Moods"
      onChange={(selected) => setSelectedItems(selected)}
      placeholder="Choose your moods"
      selectionMode="multiple"
      value={selectedItems}
    >
      <Select.Trigger>
        <Select.Value />
      </Select.Trigger>
      <Select.Content items={moods}>
        {(item) => (
          <Select.Item id={item.id} textValue={item.name}>
            {item.name}
          </Select.Item>
        )}
      </Select.Content>
    </Select>
  )
}
