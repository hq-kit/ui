import { TextField } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const InputRequiredDemo = () => {
  return (
    <TextField isRequired type='email'>
      <Label className='gap-1'>
        Required input <span className='text-destructive'>*</span>
      </Label>
      <Input placeholder='Email address' />
    </TextField>
  )
}

export default InputRequiredDemo
