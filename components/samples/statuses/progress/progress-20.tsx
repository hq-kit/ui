import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'

const Example = () => (
  <Progress value={35}>
    <Progress.Header>
      <div className='space-y-1'>
        <Label>Project Setup</Label>
        <p className='text-muted-foreground text-xs'>Installing dependencies</p>
      </div>
      <Progress.Value />
    </Progress.Header>
    <Progress.Track />
  </Progress>
)

export default Example
