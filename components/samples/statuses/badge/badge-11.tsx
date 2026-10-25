import { IconArrowRight } from "@tabler/icons-react"
import { Badge } from "@/components/ui/badge"

const BadgeLinkDemo = () => {
  return (
    <Badge className="focus-visible:ring-ring/50 focus-visible:ring-2 focus-visible:outline-0" href="#">
      Link <IconArrowRight className="size-3" />
    </Badge>
  )
}

export default BadgeLinkDemo
