import { Toggle } from '@/components/ui/toggle'

const ToggleBasic = () => {
  return <Toggle>{({ isSelected }) => <>{isSelected ? 'Unpin' : 'Pin'}</>}</Toggle>
}

export default ToggleBasic
