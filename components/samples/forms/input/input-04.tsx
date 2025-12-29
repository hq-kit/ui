import { TextField } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const InputDisabledDemo = () => {
  return (
    <TextField isDisabled type='email'>
      <Label>Disabled input</Label>
      <Input placeholder='Email address' />
    </TextField>
  )
}

export default InputDisabledDemo
