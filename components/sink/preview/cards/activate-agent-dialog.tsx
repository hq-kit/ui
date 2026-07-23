import { IconPlaceholder } from "@/components/icon-placeholder"
import { Alert } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Item } from "@/components/ui/item"

const agentFeatures = [
  {
    id: "code-reviews",
    content: (
      <>
        <strong>Code reviews</strong> with full codebase context to catch <strong>hard-to-find</strong> bugs.
      </>
    )
  },
  {
    id: "code-suggestions",
    content: (
      <>
        <strong>Code suggestions</strong> validated in sandboxes before you merge.
      </>
    )
  },
  {
    id: "root-cause",
    content: (
      <>
        <strong>Root-cause analysis</strong> for production issues with deployment context.{" "}
        <Badge variant="secondary">Requires Observability Plus</Badge>
      </>
    )
  }
]

export function ActivateAgentDialog() {
  return (
    <Card>
      <Card.Header>
        <Card.Title>Ship faster & safer with Vercel Agent</Card.Title>
        <Card.Description>
          Your use is subject to Vercel&apos;s <a href="#">Public Beta Agreement</a> and{" "}
          <a href="#">AI Product Terms</a>.
        </Card.Description>
      </Card.Header>
      <Card.Content className="flex flex-col gap-4">
        <Item.Group className="gap-0">
          {agentFeatures.map((feature) => (
            <Item className="px-0" key={feature.id} size="xs">
              <Item.Media className="self-start" variant="icon">
                <IconPlaceholder
                  className="size-5 fill-primary text-primary-foreground"
                  hugeicons="CheckmarkCircle02Icon"
                  lucide="CheckCircle2Icon"
                  phosphor="CheckCircleIcon"
                  remixicon="RiCheckboxCircleLine"
                  tabler="IconCircleCheckFilled"
                />
              </Item.Media>
              <Item.Content>
                <Item.Title className="inline font-normal text-muted-foreground leading-relaxed *:[strong]:font-medium *:[strong]:text-foreground">
                  {feature.content}
                </Item.Title>
              </Item.Content>
            </Item>
          ))}
        </Item.Group>
        <Alert>
          <Alert.Description>
            Pro teams get $100 in Vercel Agent trial credit for 2 weeks after activation.
          </Alert.Description>
        </Alert>
      </Card.Content>
      <Card.Footer className="justify-end gap-2">
        <Button className="style-sera:hidden" variant="outline">
          Cancel
        </Button>
        <Button className="style-sera:w-full">Enable with $100 credits</Button>
      </Card.Footer>
    </Card>
  )
}
