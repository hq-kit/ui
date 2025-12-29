import { TextField } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const InputRoundedDemo = () => {
  return (
    <TextField type='email'>
      <Label>Rounded input</Label>
      <Input className='rounded-full' placeholder='Email address' />
    </TextField>
  )
}

export default InputRoundedDemo
