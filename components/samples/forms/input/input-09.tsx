import { TextField } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const InputStartHelperTextDemo = () => {
  return (
    <TextField type='email'>
      <Label>Input with start helper text</Label>
      <Input placeholder='Email address' />
      <p className='text-muted-foreground text-xs'>We&apos;ll never share your email with anyone else.</p>
    </TextField>
  )
}

export default InputStartHelperTextDemo
