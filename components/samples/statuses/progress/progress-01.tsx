import { Field } from "@/components/ui/field"
import { Progress } from "@/components/ui/progress"

const Example = () => (
  <Progress className="w-full max-w-md" isIndeterminate>
    <Field.Label>Progress</Field.Label>
    <Progress.Value />
  </Progress>
)

export default Example
