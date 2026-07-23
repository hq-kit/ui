"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { ToggleGroup } from "@/components/ui/toggle-group"

export function RollerShades() {
  const [position, setPosition] = useState([50])

  const preset = position[0] <= 10 ? "open" : position[0] >= 90 ? "closed" : "half"

  return (
    <Card>
      <Card.Header>
        <Card.Title>Living Room</Card.Title>
        <Card.Description>Roller Shades</Card.Description>
      </Card.Header>
      <Card.Content className="flex flex-col gap-4">
        <div className="flex h-32 flex-col overflow-hidden rounded-lg border bg-muted">
          <div className="bg-muted-foreground transition-all duration-300" style={{ height: `${position[0]}%` }} />
        </div>
        <div className="flex items-center gap-3">
          <span className="font-medium text-muted-foreground text-xs uppercase tracking-wider">Open</span>
          <Slider className="flex-1" maxValue={100} onChange={(e) => setPosition(e as number[])} value={position} />
          <span className="font-medium text-muted-foreground text-xs uppercase tracking-wider">Close</span>
        </div>
      </Card.Content>
      <Card.Footer>
        <ToggleGroup
          className="w-full"
          onSelectionChange={(value) => {
            if ([value].join("") === "open") setPosition([0])
            if ([value].join("") === "half") setPosition([50])
            if ([value].join("") === "closed") setPosition([100])
          }}
          selectedKeys={preset}
          selectionMode="single"
          spacing={1}
          variant="outline"
        >
          <ToggleGroup.Item className="flex-1" id="open">
            Open
          </ToggleGroup.Item>
          <ToggleGroup.Item className="flex-1" id="half">
            Half
          </ToggleGroup.Item>
          <ToggleGroup.Item className="flex-1" id="closed">
            Closed
          </ToggleGroup.Item>
        </ToggleGroup>
      </Card.Footer>
    </Card>
  )
}
