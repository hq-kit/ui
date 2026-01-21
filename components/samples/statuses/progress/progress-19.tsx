import { Label } from '@/components/ui/label'
import { Progress } from '@/components/ui/progress'

const Example = () => {
  const current = 7
  const total = 10
  const value = (current / total) * 100

  return (
    <Progress value={value}>
      <Progress.Header>
        <Label>Tasks completed</Label>
        <span className='font-medium'>
          {current} of {total}
        </span>
      </Progress.Header>
      <Progress.Track />
    </Progress>
  )
}

export default Example
