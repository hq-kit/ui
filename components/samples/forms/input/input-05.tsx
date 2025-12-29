import { TextField } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const InputReadOnlyDemo = () => {
  return (
    <TextField defaultValue='example@xyz.com' isReadOnly type='email'>
      <Label>Read-only input</Label>
      <Input placeholder='Email address' />
    </TextField>
  )
}

export default InputReadOnlyDemo
