"use client"

import { useState } from "react"
import { Label } from "@/components/ui/field"
import { type Key, Select } from "@/components/ui/select"

export const movies = [
  { id: 1, title: "Inception" },
  { id: 2, title: "The Dark Knight" },
  { id: 3, title: "Interstellar" },
  { id: 4, title: "The Matrix" },
  { id: 5, title: "Pulp Fiction" }
]

export default function SelectControlledDemo() {
  const [movie, setMovie] = useState<Key | null>("")
  return (
    <div className="space-y-4">
      <Select name="movie" onChange={setMovie} placeholder="Select a movie" value={movie}>
        <Label>Movies</Label>
        <Select.Trigger>
          <Select.Value />
        </Select.Trigger>
        <Select.Content items={movies}>
          {(item) => (
            <Select.Item id={item.id} textValue={item.title}>
              {item.title}
            </Select.Item>
          )}
        </Select.Content>
      </Select>
      <pre className="mt-2 block text-muted-foreground [&>strong]:text-foreground">
        You have selected: <strong>{movie}</strong>
      </pre>
    </div>
  )
}
