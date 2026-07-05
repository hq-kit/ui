import { Label } from "@/components/ui/field"
import { Meter } from "@/components/ui/meter"

const Example = () => {
  const current = 7
  const total = 10
  const value = (current / total) * 100

  return (
    <Meter value={value}>
      <Label>Tasks completed</Label>
      <Meter.Value />
    </Meter>
  )
}

export default Example
