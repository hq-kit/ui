import { ChevronDownIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Collapsible } from "@/components/ui/collapsible"

export default function CollapsibleBasic() {
  return (
    <Card className="mx-auto w-full max-w-sm">
      <Card.Content>
        <Collapsible className="rounded-md data-expanded:bg-muted">
          <Button className="w-full" slot="trigger" variant="ghost">
            Product details
            <ChevronDownIcon className="ml-auto in-data-expanded:rotate-180" />
          </Button>
          <Collapsible.Content className="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm">
            <div>This panel can be expanded or collapsed to reveal additional content.</div>
            <Button size="xs">Learn More</Button>
          </Collapsible.Content>
        </Collapsible>
      </Card.Content>
    </Card>
  )
}
