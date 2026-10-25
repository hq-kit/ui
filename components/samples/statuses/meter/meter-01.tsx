import { Meter } from "@/components/ui/meter"

const Example = () => (
  <Meter className="w-full max-w-md" value={60}>
    <Meter.Label>Usage</Meter.Label>
    <Meter.Value />
  </Meter>
)

export default Example
