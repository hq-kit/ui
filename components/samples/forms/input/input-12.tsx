import { TextField } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const InputErrorDemo = () => {
  return (
    <TextField className='group' defaultValue='invalid@email.com' isInvalid type='email'>
      <Label>Input with error</Label>
      <Input placeholder='Email address' />
      <p className='text-muted-foreground text-xs group-aria-invalid:text-destructive'>This email is invalid.</p>
    </TextField>
  )
}

export default InputErrorDemo
