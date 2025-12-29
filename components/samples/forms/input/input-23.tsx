import { TextField } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const InputOverlappingLabelDemo = () => {
  return (
    <TextField type='email'>
      <Label className='absolute top-0 left-2 z-1 block -translate-y-1/2 bg-background px-1 text-foreground text-xs'>
        Input with overlapping label
      </Label>
      <Input className='h-10 dark:bg-background' placeholder='Email address' />
    </TextField>
  )
}

export default InputOverlappingLabelDemo
