import { IconPlaceholder } from "@/components/icon-placeholder"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

export function FrontDoor() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Front Door</Card.Title>
        <Card.Description>Smart Lock Pro</Card.Description>
        <Card.Action>
          <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
            Locked
            <IconPlaceholder
              className="size-4"
              hugeicons="SquareLock02Icon"
              lucide="LockIcon"
              phosphor="LockKeyIcon"
              remixicon="RiLockLine"
              tabler="IconLock"
            />
          </div>
        </Card.Action>
      </Card.Header>
      <Card.Content>
        <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-lg bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,var(--border)_10px,var(--border)_11px)] bg-muted">
          <Badge className="absolute top-2 right-2" variant="destructive">
            Live
          </Badge>
        </div>
      </Card.Content>
    </Card>
  )
}
