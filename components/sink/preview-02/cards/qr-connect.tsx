"use client"

import QRCode from "react-qr-code"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function QrConnect() {
  return (
    <Card>
      <Card.Content className="flex justify-center pt-6">
        <div className="rounded-xl border bg-white p-4">
          <QRCode level="M" size={160} value="https://ledger.app/connect/jd-4829" />
        </div>
      </Card.Content>
      <Card.Header className="text-center">
        <Card.Title>Scan to connect your mobile device</Card.Title>
        <Card.Description>Open the Ledger mobile app and scan this code to link your device.</Card.Description>
      </Card.Header>
      <Card.Footer>
        <Button className="w-full" variant="secondary">
          Got it
        </Button>
      </Card.Footer>
    </Card>
  )
}
