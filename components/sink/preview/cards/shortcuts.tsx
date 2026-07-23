import { Fragment } from "react"
import { Card } from "@/components/ui/card"
import { Item } from "@/components/ui/item"
import { Kbd } from "@/components/ui/kbd"

const shortcuts = [
  { label: "Search", keys: ["⌘", "K"] },
  { label: "Quick Actions", keys: ["⌘", "J"] },
  { label: "New File", keys: ["⌘", "N"] },
  { label: "Save", keys: ["⌘", "S"] },
  { label: "Toggle Sidebar", keys: ["⌘", "B"] }
] as const

export function Shortcuts() {
  return (
    <Card>
      <Card.Content>
        <div className="flex flex-col gap-3">
          <div className="font-medium text-sm">Shortcuts</div>
          <Item.Group className="gap-2 text-muted-foreground" data-size="xs">
            {shortcuts.map(({ label, keys }, i) => (
              <Fragment key={label}>
                {i > 0 && <Item.Separator />}
                <Item className="border-0 px-0 py-0" size="xs" variant="default">
                  <Item.Header>
                    <Item.Title className="font-normal">{label}</Item.Title>
                    <Item.Actions>
                      <div className="flex gap-1">
                        {keys.map((key) => (
                          <Kbd key={key}>{key}</Kbd>
                        ))}
                      </div>
                    </Item.Actions>
                  </Item.Header>
                </Item>
              </Fragment>
            ))}
          </Item.Group>
        </div>
      </Card.Content>
    </Card>
  )
}
