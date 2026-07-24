"use client"

import type { CSSProperties } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const FITNESS_WEEKLY_LOAD = [
  { day: "M", load: 84 },
  { day: "T", load: 52 },
  { day: "W", load: 73 },
  { day: "T", load: 66 },
  { day: "F", load: 91 },
  { day: "S", load: 48 },
  { day: "S", load: 61 }
]

export function WeeklyFitnessSummary() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Weekly Fitness Summary</Card.Title>
        <Card.Description>Calories and workout load by day</Card.Description>
      </Card.Header>
      <Card.Content className="flex flex-col gap-4">
        <div className="grid grid-cols-7 gap-1.5">
          {FITNESS_WEEKLY_LOAD.map((day, index) => (
            <div className="rounded-md p-1.5 text-center ring ring-border" key={`${day.day}-${index}`}>
              <div className="text-muted-foreground text-sm">{day.day}</div>
              <div className="relative mt-1 h-16 overflow-hidden rounded-sm bg-muted">
                <div
                  className="absolute inset-x-0 bottom-0 rounded-sm bg-chart-3"
                  style={
                    {
                      height: `${day.load}%`
                    } as CSSProperties
                  }
                />
              </div>
            </div>
          ))}
        </div>
      </Card.Content>
      <Card.Footer>
        <Button className="w-full">View details</Button>
      </Card.Footer>
    </Card>
  )
}
