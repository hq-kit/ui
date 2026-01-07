import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'

const Example = () => (
  <Progress value={65}>
    <Progress.Track />
    <Progress.Header className='mt-3 mb-0'>
      <Label>Almost there!</Label>
    </Progress.Header>
  </Progress>
)

export default Example
