import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'

const Example = () => (
  <Progress value={65}>
    <Progress.Header>
      <Label>Uploading...</Label>
    </Progress.Header>
    <Progress.Track />
  </Progress>
)

export default Example
