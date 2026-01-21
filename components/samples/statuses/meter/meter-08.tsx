import { Meter } from '@/components/ui/meter'

const Example = () => (
  <Meter className='w-full max-w-md **:data-[slot=bar]:bg-red-500 **:data-[slot=track]:bg-red-200' value={25}>
    <Meter.Track />
  </Meter>
)

export default Example
