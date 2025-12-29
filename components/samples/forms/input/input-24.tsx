import { TextField } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const InputFloatingLabelDemo = () => {
  return (
    <TextField type='email'>
      <Label className='absolute top-1/2 block origin-start -translate-y-1/2 cursor-text px-2 text-muted-foreground text-sm transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:cursor-default group-focus-within:font-medium group-focus-within:text-foreground group-focus-within:text-xs has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:font-medium has-[+input:not(:placeholder-shown)]:text-foreground has-[+input:not(:placeholder-shown)]:text-xs'>
        <span className='inline-flex bg-background px-1'>Input with floating label</span>
      </Label>
      <Input className='dark:bg-background' placeholder=' ' />
    </TextField>
  )
}

export default InputFloatingLabelDemo
