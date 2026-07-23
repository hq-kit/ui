import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export function AlbumCard() {
  return (
    <Card>
      <Card.Content className="flex flex-col gap-4">
        <div className="relative overflow-hidden rounded-lg">
          <img
            alt="Synthetic Horizons EP cover art"
            className="aspect-square w-full object-cover"
            src="https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=800&h=800&fit=crop"
          />
          <Badge className="absolute top-3 right-3">$26,033.79</Badge>
        </div>
        <div className="flex flex-col gap-1">
          <Card.Title>Synthetic Horizons EP</Card.Title>
          <Card.Description className="text-xs uppercase tracking-wider">Released Aug 14, 2023</Card.Description>
        </div>
      </Card.Content>
      <Card.Footer className="flex-col gap-4">
        <Separator />
        <div className="grid w-full grid-cols-2 gap-4">
          <div className="flex flex-col gap-0.5">
            <span className="text-muted-foreground text-xs uppercase tracking-wider">Tracks</span>
            <span className="font-medium text-lg tabular-nums">6 Tracks</span>
          </div>
          <div className="flex flex-col gap-0.5">
            <span className="line-clamp-1 text-muted-foreground text-xs uppercase tracking-wider">
              Cumulative Streams
            </span>
            <span className="font-medium text-lg tabular-nums">6,198,524</span>
          </div>
        </div>
      </Card.Footer>
    </Card>
  )
}
