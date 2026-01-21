import { Label } from '@/components/ui/label'
import { Meter } from '@/components/ui/meter'

const Example = () => {
  const current = 7
  const total = 10
  const value = (current / total) * 100

  return (
    <Meter value={value}>
      <Meter.Header>
        <Label>Tasks completed</Label>
        <span className='font-medium'>
          {current} of {total}
        </span>
      </Meter.Header>
      <Meter.Track />
    </Meter>
  )
}

export default Example
