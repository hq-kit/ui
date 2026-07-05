"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

export function RollerShades() {
  const [position, setPosition] = useState([50])

  const preset = position[0] <= 10 ? "open" : position[0] >= 90 ? "closed" : "half"

  return (
    <Card>
      <CardHeader>
        <CardTitle>Living Room</CardTitle>
        <CardDescription>Roller Shades</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex h-32 flex-col overflow-hidden rounded-lg border bg-muted">
          <div className="bg-muted-foreground transition-all duration-300" style={{ height: `${position[0]}%` }} />
        </div>
        <div className="flex items-center gap-3">
          <span className="font-medium text-muted-foreground text-xs uppercase tracking-wider">Open</span>
          <Slider className="flex-1" maxValue={100} onChange={(e) => setPosition(e as number[])} value={position} />
          <span className="font-medium text-muted-foreground text-xs uppercase tracking-wider">Close</span>
        </div>
      </CardContent>
      <CardFooter>
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
          <ToggleGroupItem className="flex-1" id="open">
            Open
          </ToggleGroupItem>
          <ToggleGroupItem className="flex-1" id="half">
            Half
          </ToggleGroupItem>
          <ToggleGroupItem className="flex-1" id="closed">
            Closed
          </ToggleGroupItem>
        </ToggleGroup>
      </CardFooter>
    </Card>
  )
}
