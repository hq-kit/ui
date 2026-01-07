import { Progress } from '@/components/ui/progress'

const Example = () => (
  <Progress className='w-full max-w-md **:data-[slot=bar]:bg-green-500 **:data-[slot=track]:bg-green-200' value={70}>
    <Progress.Track />
  </Progress>
)

export default Example
