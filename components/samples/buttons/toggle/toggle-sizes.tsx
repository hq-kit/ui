import { IconBell, IconBellOff } from "@tabler/icons-react"
import { Toggle } from "@/components/ui/toggle"

export default () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <div className="flex items-start gap-2">
        <Toggle size="xs">Extra Small</Toggle>
        <Toggle size="icon-xs">{({ isSelected }) => (isSelected ? <IconBell /> : <IconBellOff />)}</Toggle>
      </div>
      <div className="flex items-start gap-2">
        <Toggle size="sm">Small</Toggle>
        <Toggle size="icon-sm">{({ isSelected }) => (isSelected ? <IconBell /> : <IconBellOff />)}</Toggle>
      </div>
      <div className="flex items-start gap-2">
        <Toggle>Medium</Toggle>
        <Toggle size="icon">{({ isSelected }) => (isSelected ? <IconBell /> : <IconBellOff />)}</Toggle>
      </div>
      <div className="flex items-start gap-2">
        <Toggle size="lg">Large</Toggle>
        <Toggle size="icon-lg">{({ isSelected }) => (isSelected ? <IconBell /> : <IconBellOff />)}</Toggle>
      </div>
    </div>
  )
}
