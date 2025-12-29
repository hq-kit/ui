import { IconUser } from '@tabler/icons-react'
import { TextField } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const InputStartIconDemo = () => {
  return (
    <TextField type='text'>
      <Label>Input with start icon</Label>
      <div className='relative'>
        <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-3 text-muted-foreground peer-disabled:opacity-50'>
          <IconUser className='size-4' />
          <span className='sr-only'>User</span>
        </div>
        <Input className='peer pl-9' placeholder='Username' />
      </div>
    </TextField>
  )
}

export default InputStartIconDemo
