import { TextField } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const InputColoredRingDemo = () => {
  return (
    <TextField type='email'>
      <Label>Input with colored ring</Label>
      <Input
        className='focus-visible:border-indigo-500 focus-visible:ring-indigo-500/20 dark:focus-visible:ring-indigo-500/40'
        placeholder='Email address'
      />
    </TextField>
  )
}

export default InputColoredRingDemo
