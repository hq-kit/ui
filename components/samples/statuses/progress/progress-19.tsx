import { Label } from "@/components/ui/field"
import { Progress } from "@/components/ui/progress"

const Example = () => {
  const current = 7
  const total = 10
  const value = (current / total) * 100

  return (
    <Progress value={value}>
      <Label>Tasks completed</Label>
      <Progress.Value />
    </Progress>
  )
}

export default Example
