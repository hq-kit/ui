import { Label } from '@/components/ui/label'
import { Meter } from '@/components/ui/meter'

const Example = () => (
  <Meter value={65}>
    <Meter.Track />
    <Meter.Header className='mt-3 mb-0'>
      <Label>Almost there!</Label>
    </Meter.Header>
  </Meter>
)

export default Example
