import { IconBrandNextjs } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"

export default () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <div className="flex items-start gap-2">
        <Button size="xs">Extra Small</Button>
        <Button size="icon-xs">
          <IconBrandNextjs />
        </Button>
      </div>
      <div className="flex items-start gap-2">
        <Button size="sm">Small</Button>
        <Button size="icon-sm">
          <IconBrandNextjs />
        </Button>
      </div>
      <div className="flex items-start gap-2">
        <Button>Default</Button>
        <Button size="icon">
          <IconBrandNextjs />
        </Button>
      </div>
      <div className="flex items-start gap-2">
        <Button size="lg">Large</Button>
        <Button size="icon-lg">
          <IconBrandNextjs />
        </Button>
      </div>
    </div>
  )
}
