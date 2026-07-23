import { IconPlaceholder } from "@/components/icon-placeholder"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Empty } from "@/components/ui/empty"

export function EmptyDistributeTrack() {
  return (
    <Card>
      <Card.Content>
        <Empty className="p-4">
          <Empty.Media variant="icon">
            <IconPlaceholder
              hugeicons="Add01Icon"
              lucide="PlusIcon"
              phosphor="PlusIcon"
              remixicon="RiAddLine"
              tabler="IconPlus"
            />
          </Empty.Media>
          <Empty.Header>
            <Empty.Title>Distribute Track</Empty.Title>
            <Empty.Description>
              Upload your first master to start reaching listeners on Spotify, Apple Music, and more.
            </Empty.Description>
          </Empty.Header>
          <Empty.Content>
            <Button>Create Release</Button>
          </Empty.Content>
        </Empty>
      </Card.Content>
    </Card>
  )
}
