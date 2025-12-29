import { TextField } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const InputEndTextAddOnDemo = () => {
  return (
    <TextField className='w-full max-w-xs space-y-2'>
      <Label>Input with end text add-on</Label>
      <div className='relative'>
        <Input className='peer pr-13' placeholder='shadcnstudio' />
        <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center justify-center pr-3 text-sm peer-disabled:opacity-50'>
          .com
        </span>
      </div>
    </TextField>
  )
}

export default InputEndTextAddOnDemo
