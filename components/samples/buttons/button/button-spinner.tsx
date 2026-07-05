import { Button } from "@/components/ui/button"

export default function ButtonSpinner() {
  return (
    <div className="flex gap-2">
      <Button isPending variant="outline">
        Generating
      </Button>
      <Button isPending variant="secondary">
        Downloading
      </Button>
    </div>
  )
}
