import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Empty } from "@/components/ui/empty"
import { Spinner } from "@/components/ui/spinner"

export function SyncingState() {
  return (
    <Card>
      <Card.Content className="p-0">
        <Empty className="p-4">
          <Empty.Header>
            <Empty.Media variant="icon">
              <Spinner />
            </Empty.Media>
            <Empty.Title>Syncing your accounts</Empty.Title>
            <Empty.Description>
              We&apos;re pulling in your latest transactions. This usually takes a few seconds.
            </Empty.Description>
          </Empty.Header>
          <Empty.Content>
            <Button variant="outline">Cancel</Button>
          </Empty.Content>
        </Empty>
      </Card.Content>
    </Card>
  )
}
