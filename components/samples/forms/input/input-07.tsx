import { TextField } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const InputDefaultValueDemo = () => {
  return (
    <TextField type='email'>
      <Label>Input with default value</Label>
      <Input defaultValue='example@email.com' placeholder='Email address' />
    </TextField>
  )
}

export default InputDefaultValueDemo
