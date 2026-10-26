import { IconBrandAdobe } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"

export default () => {
  return (
    <div className="flex flex-wrap gap-3">
      <Button>
        <IconBrandAdobe /> Inline Start
      </Button>
      <Button>
        Inline End
        <IconBrandAdobe />
      </Button>
    </div>
  )
}
