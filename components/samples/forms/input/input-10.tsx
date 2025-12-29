import { TextField } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const InputEndHelperTextDemo = () => {
  return (
    <TextField type='email'>
      <Label>Input with end helper text</Label>
      <Input placeholder='Email address' />
      <p className='text-end text-muted-foreground text-xs'>We&apos;ll never share your email with anyone else.</p>
    </TextField>
  )
}

export default InputEndHelperTextDemo
