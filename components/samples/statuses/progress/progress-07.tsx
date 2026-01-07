import { Progress } from '@/components/ui/progress'

const Example = () => (
  <Progress className='w-full max-w-md **:data-[slot=bar]:bg-yellow-500 **:data-[slot=track]:bg-yellow-200' value={50}>
    <Progress.Track />
  </Progress>
)

export default Example
