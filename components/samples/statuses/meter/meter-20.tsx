import { Label } from "@/components/ui/field"
import { Meter } from "@/components/ui/meter"

const Example = () => (
  <Meter value={35}>
    <div className="space-y-1">
      <Label>Project Setup</Label>
      <p className="text-muted-foreground text-xs">Installing dependencies</p>
    </div>
    <Meter.Value />
  </Meter>
)

export default Example
