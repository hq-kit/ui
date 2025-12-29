import { TextField } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const InputFilledDemo = () => {
  return (
    <TextField type='email'>
      <Label>Filled input</Label>
      <Input className='border-transparent bg-muted shadow-none' placeholder='Email address' />
    </TextField>
  )
}

export default InputFilledDemo
