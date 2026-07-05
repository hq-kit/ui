import { Label } from "@/components/ui/field"
import { Progress } from "@/components/ui/progress"

const Example = () => (
  <Progress value={35}>
    <div className="space-y-1">
      <Label>Project Setup</Label>
      <p className="text-muted-foreground text-xs">Installing dependencies</p>
    </div>
    <Progress.Value />
  </Progress>
)

export default Example
