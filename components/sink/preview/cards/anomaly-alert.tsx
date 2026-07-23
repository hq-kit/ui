"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Empty } from "@/components/ui/empty"

export function AnomalyAlert() {
  return (
    <Card>
      <Card.Content>
        <Empty className="h-48">
          <Empty.Header>
            <Empty.Title>Get alerted for anomalies</Empty.Title>
            <Empty.Description>Automatically monitor your projects for anomalies and get notified.</Empty.Description>
          </Empty.Header>
          <Empty.Content>
            <Button>Upgrade to Observability Plus</Button>
          </Empty.Content>
        </Empty>
      </Card.Content>
    </Card>
  )
}
