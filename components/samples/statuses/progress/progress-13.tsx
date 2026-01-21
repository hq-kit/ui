import { Progress } from '@/components/ui/progress'

const Example = () => (
  <Progress className='w-full max-w-md **:data-[slot=track]:h-2' value={60}>
    <Progress.Track />
  </Progress>
)

export default Example
