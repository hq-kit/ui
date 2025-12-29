import { TextField } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const InputLabelDemo = () => {
  return (
    <TextField type='email'>
      <Label>Input with label</Label>
      <Input placeholder='Email address' />
    </TextField>
  )
}

export default InputLabelDemo
