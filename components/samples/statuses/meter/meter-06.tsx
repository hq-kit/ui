import { Meter } from '@/components/ui/meter'

const Example = () => (
  <Meter className='w-full max-w-md **:data-[slot=bar]:bg-green-500 **:data-[slot=track]:bg-green-200' value={70}>
    <Meter.Track />
  </Meter>
)

export default Example
