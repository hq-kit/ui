import { Progress } from '@/components/ui/progress'

const Example = () => (
  <Progress className='w-full max-w-md **:data-[slot=bar]:bg-blue-500 **:data-[slot=track]:bg-blue-500/20' value={60}>
    <Progress.Track />
  </Progress>
)

export default Example
