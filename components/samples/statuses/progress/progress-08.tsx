import { Progress } from "@/components/ui/progress"

const Example = () => (
  <Progress className="w-full max-w-md **:data-[slot=bar]:bg-red-500 **:data-[slot=track]:bg-red-200" value={25} />
)

export default Example
