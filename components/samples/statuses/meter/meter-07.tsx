import { Meter } from '@/components/ui/meter'

const Example = () => (
  <Meter className='w-full max-w-md **:data-[slot=bar]:bg-yellow-500 **:data-[slot=track]:bg-yellow-200' value={50}>
    <Meter.Track />
  </Meter>
)

export default Example
