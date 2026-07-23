import { IconPlaceholder } from "@/components/icon-placeholder"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Empty } from "@/components/ui/empty"

export function EmptyExploreCatalog() {
  return (
    <Card>
      <Card.Content>
        <Empty className="p-4">
          <Empty.Media variant="icon">
            <IconPlaceholder
              hugeicons="AudioWave01Icon"
              lucide="AudioLinesIcon"
              phosphor="RecordIcon"
              remixicon="RiRecordCircleLine"
              tabler="IconPlayerRecordFilled"
            />
          </Empty.Media>
          <Empty.Header>
            <Empty.Title>Explore Catalog</Empty.Title>
            <Empty.Description>Check your ISRC codes, metadata, and visual assets before going live.</Empty.Description>
          </Empty.Header>
          <Empty.Content>
            <Button>View Catalog</Button>
          </Empty.Content>
        </Empty>
      </Card.Content>
    </Card>
  )
}
