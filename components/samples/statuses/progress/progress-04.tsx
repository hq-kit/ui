import { Progress } from '@/components/ui/progress'

const Example = () => (
  <Progress className='w-full max-w-md' value={75}>
    <Progress.Track />
  </Progress>
)

export default Example
