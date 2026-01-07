import { Meter } from '@/components/ui/meter'

const Example = () => (
  <Meter className='w-full max-w-md **:data-[slot=track]:h-1.5' value={60}>
    <Meter.Track />
  </Meter>
)

export default Example
