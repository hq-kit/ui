import { Toggle } from "@/components/ui/toggle"

export default () => {
  return (
    <div className="flex gap-2">
      <Toggle variant="outline">Outline</Toggle>
      <Toggle variant="ghost">Ghost</Toggle>
    </div>
  )
}
