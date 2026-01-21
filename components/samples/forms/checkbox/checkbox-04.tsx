import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

const CheckboxTodoListDemo = () => {
  return (
    <Checkbox defaultSelected>
      {({ isSelected }) => <Label className={isSelected ? 'line-through' : ''}>Simple todo list</Label>}
    </Checkbox>
  )
}

export default CheckboxTodoListDemo
