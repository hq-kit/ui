import { Progress } from '@/components/ui/progress'

const Example = () => (
  <Progress
    className='w-full max-w-md **:data-[slot=bar]:bg-linear-to-r **:data-[slot=track]:bg-purple-500/20 **:data-[slot=bar]:from-blue-500 **:data-[slot=bar]:to-purple-500'
    value={65}
  >
    <Progress.Track />
  </Progress>
)

export default Example
