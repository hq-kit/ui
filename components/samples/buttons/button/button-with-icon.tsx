import { IconBrandAdobe } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"

export default () => {
  return (
    <div className="flex flex-wrap gap-3">
      <div className="flex flex-col items-center gap-2">
        <Button>
          <IconBrandAdobe /> Inline Start
        </Button>
        <Button>
          <IconBrandAdobe data-icon="inline-start" /> Inline Start
        </Button>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Button>
          Inline End
          <IconBrandAdobe />
        </Button>
        <Button>
          Inline End
          <IconBrandAdobe data-icon="inline-end" />
        </Button>
      </div>
    </div>
  )
}
