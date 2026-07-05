import { Label } from "@/components/ui/field"
import { Progress } from "@/components/ui/progress"

const Example = () => (
  <Progress value={65}>
    <Label>Uploading...</Label>
  </Progress>
)

export default Example
