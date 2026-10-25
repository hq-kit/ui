"use client"
import { Label } from "@/components/ui/field"
import { Select } from "@/components/ui/select"

const languages = [
  { id: "en", name: "English" },
  { id: "es", name: "Spanish" },
  { id: "fr", name: "French" },
  { id: "de", name: "German" },
  { id: "it", name: "Italian" },
  { id: "pt", name: "Portuguese" },
  { id: "ru", name: "Russian" },
  { id: "ja", name: "Japanese" },
  { id: "zh", name: "Chinese" },
  { id: "ar", name: "Arabic" },
  { id: "hi", name: "Hindi" },
  { id: "ko", name: "Korean" },
  { id: "sv", name: "Swedish" },
  { id: "nl", name: "Dutch" },
  { id: "tr", name: "Turkish" },
  { id: "pl", name: "Polish" },
  { id: "cs", name: "Czech" },
  { id: "el", name: "Greek" },
  { id: "he", name: "Hebrew" }
]

export default function SelectSearchableDemo() {
  return (
    <Select>
      <Label>Select a language</Label>
      <Select.Trigger>
        <Select.Value />
      </Select.Trigger>
      <Select.Content isSearchable items={languages}>
        {(item) => <Select.Item>{item.name}</Select.Item>}
      </Select.Content>
    </Select>
  )
}
