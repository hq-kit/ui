import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const areaPath = "M0 52L18 40L36 46L54 70L72 50L100 49V86H0Z"
const strokePath = "M0 52L18 40L36 46L54 70L72 50L100 49"

export function AnalyticsCard() {
  return (
    <Card className="mx-auto w-full max-w-sm data-[size=sm]:pb-0" size="sm">
      <Card.Header>
        <Card.Title>Analytics</Card.Title>
        <Card.Description>
          418.2K Visitors <Badge>+10%</Badge>
        </Card.Description>
        <Card.Action>
          <Button size="sm" variant="outline">
            View Analytics
          </Button>
        </Card.Action>
      </Card.Header>
      <svg
        aria-label="Visitor trend"
        className="aspect-[1/0.35] w-full text-chart-1"
        preserveAspectRatio="none"
        role="img"
        viewBox="0 0 100 86"
      >
        <path d={areaPath} fill="currentColor" opacity="0.28" />
        <path d={strokePath} fill="none" stroke="currentColor" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
      </svg>
    </Card>
  )
}
