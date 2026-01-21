import { Label } from '@/components/ui/label'
import { Meter } from '@/components/ui/meter'

const Example = () => (
  <Meter value={65}>
    <Meter.Header>
      <Label>Meter</Label>
      <Meter.Value />
    </Meter.Header>
    <Meter.Track />
  </Meter>
)

export default Example
