"use client"

import { IconPlaceholder } from "@/components/icon-placeholder"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Item, ItemContent, ItemGroup, ItemMedia, ItemTitle } from "@/components/ui/item"

// Agent feature descriptions.
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
        <Badge className="bg-chart-1 text-chart-5" variant="secondary">
          Requires Observability Plus
        </Badge>
      </>
    )
  }
]

export function ActivateAgentDialog() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Ship faster & safer with Vercel Agent</CardTitle>
        <CardDescription>
          Your use is subject to Vercel&apos;s <a href="#">Public Beta Agreement</a> and{" "}
          <a href="#">AI Product Terms</a>.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <ItemGroup className="gap-0">
          {agentFeatures.map((feature) => (
            <Item className="px-0" key={feature.id} size="xs">
              <ItemMedia className="self-start" variant="icon">
                <IconPlaceholder
                  className="size-5 fill-primary text-primary-foreground"
                  hugeicons="CheckmarkCircle02Icon"
                  lucide="CheckCircle2Icon"
                  phosphor="CheckCircleIcon"
                  remixicon="RiCheckboxCircleLine"
                  tabler="IconCircleCheckFilled"
                />
              </ItemMedia>
              <ItemContent>
                <ItemTitle className="inline font-normal text-muted-foreground leading-relaxed *:[strong]:font-medium *:[strong]:text-foreground">
                  {feature.content}
                </ItemTitle>
              </ItemContent>
            </Item>
          ))}
        </ItemGroup>
        <Alert>
          <AlertDescription>
            Pro teams get $100 in Vercel Agent trial credit for 2 weeks after activation.
          </AlertDescription>
        </Alert>
      </CardContent>
      <CardFooter className="justify-end gap-2">
        <Button className="style-sera:hidden" variant="outline">
          Cancel
        </Button>
        <Button className="style-sera:w-full">Enable with $100 credits</Button>
      </CardFooter>
    </Card>
  )
}
