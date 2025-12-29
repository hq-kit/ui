import { TextField } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const InputHintTextDemo = () => {
  return (
    <TextField type='email'>
      <div className='flex items-center justify-between gap-1'>
        <Label>Input with hint text</Label>
        <span className='text-muted-foreground text-xs'>Optional field</span>
      </div>
      <Input placeholder='Email address' />
    </TextField>
  )
}

export default InputHintTextDemo
