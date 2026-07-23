"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Description, FieldGroup, Label } from "@/components/ui/field"

const NOTIFICATIONS = [
  {
    id: "transactions",
    label: "Transaction alerts",
    description: "Deposits, withdrawals, and transfers.",
    defaultChecked: true
  },
  {
    id: "security",
    label: "Security alerts",
    description: "Login attempts and account changes.",
    defaultChecked: true
  },
  {
    id: "goals",
    label: "Goal milestones",
    description: "Updates at 25%, 50%, 75%, and 100%.",
    defaultChecked: false
  },
  {
    id: "market",
    label: "Market updates",
    description: "Daily portfolio summary and price alerts.",
    defaultChecked: false
  }
]

export function NotificationSettings() {
  const [checked, setChecked] = useState<Record<string, boolean>>(
    Object.fromEntries(NOTIFICATIONS.map((n) => [n.id, n.defaultChecked]))
  )

  const allChecked = NOTIFICATIONS.every((n) => checked[n.id])
  const someChecked = NOTIFICATIONS.some((n) => checked[n.id]) && !allChecked

  const handleSelectAll = (value: boolean) => {
    setChecked(Object.fromEntries(NOTIFICATIONS.map((n) => [n.id, value])))
  }

  const handleToggle = (id: string, value: boolean) => {
    setChecked((prev) => ({ ...prev, [id]: value }))
  }

  return (
    <Card>
      <Card.Header>
        <Card.Title>Notifications</Card.Title>
        <Card.Description>Choose what you want to be notified about.</Card.Description>
      </Card.Header>
      <Card.Content>
        <FieldGroup>
          <Checkbox
            id="notify-all"
            isIndeterminate={someChecked}
            isSelected={allChecked}
            onChange={(v) => handleSelectAll(v)}
          />
          Select all
          {NOTIFICATIONS.map((n) => (
            <Checkbox
              id={`notify-${n.id}`}
              isSelected={checked[n.id]}
              key={n.id}
              onChange={(v) => handleToggle(n.id, v)}
            >
              <Label htmlFor={`notify-${n.id}`}>{n.label}</Label>
              <Description>{n.description}</Description>
            </Checkbox>
          ))}
        </FieldGroup>
      </Card.Content>
      <Card.Footer>
        <Button className="w-full">Save Preferences</Button>
      </Card.Footer>
    </Card>
  )
}
