import { IconMail } from '@tabler/icons-react'
import { TextField } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const InputEndIconDemo = () => {
  return (
    <TextField type='email'>
      <Label>Input with end icon</Label>
      <div className='relative'>
        <Input className='peer pr-9' placeholder='Email address' />
        <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center justify-center pr-3 text-muted-foreground peer-disabled:opacity-50'>
          <IconMail className='size-4' />
          <span className='sr-only'>Email</span>
        </div>
      </div>
    </TextField>
  )
}

export default InputEndIconDemo
