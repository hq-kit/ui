import Image from "next/image"
import { IconPlaceholder } from "@/components/icon-placeholder"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function ObservabilityCard() {
  return (
    <Card className="relative w-full max-w-md overflow-hidden pt-0">
      <div className="absolute inset-0 z-30 aspect-video bg-primary opacity-50 mix-blend-color" />
      <Image
        alt="by mymind on Unsplash"
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale"
        height={40}
        src="https://images.unsplash.com/photo-1604076850742-4c7221f3101b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Photo by mymind on Unsplash"
        width={100}
      />
      <Card.Header>
        <Card.Title>Observability Plus is replacing Monitoring</Card.Title>
        <Card.Description>
          Switch to the improved way to explore your data, with natural language. Monitoring will no longer be available
          on the Pro plan in November, 2025
        </Card.Description>
      </Card.Header>
      <Card.Footer>
        <Button>
          Create Query{" "}
          <IconPlaceholder
            data-icon="inline-end"
            hugeicons="PlusSignIcon"
            lucide="PlusIcon"
            phosphor="PlusIcon"
            remixicon="RiAddLine"
            tabler="IconPlus"
          />
        </Button>
        <Badge className="ml-auto" variant="secondary">
          Warning
        </Badge>
      </Card.Footer>
    </Card>
  )
}
