import { Meter } from '@/components/ui/meter'

const Example = () => (
  <Meter className='w-full max-w-md **:data-[slot=bar]:bg-blue-500 **:data-[slot=track]:bg-blue-500/20' value={60}>
    <Meter.Track />
  </Meter>
)

export default Example
