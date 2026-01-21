import { Label } from '@/components/ui/label'
import { Meter } from '@/components/ui/meter'

const Example = () => (
  <Meter value={35}>
    <Meter.Header>
      <div className='space-y-1'>
        <Label>Project Setup</Label>
        <p className='text-muted-foreground text-xs'>Installing dependencies</p>
      </div>
      <Meter.Value />
    </Meter.Header>
    <Meter.Track />
  </Meter>
)

export default Example
