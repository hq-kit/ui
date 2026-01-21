import { Label } from '@/components/ui/label'
import { Meter } from '@/components/ui/meter'

const Example = () => (
  <Meter value={65}>
    <Meter.Header>
      <Label>Usage</Label>
    </Meter.Header>
    <Meter.Track />
  </Meter>
)

export default Example
