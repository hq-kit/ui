import { TextField } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const InputEndAddOnDemo = () => {
  return (
    <TextField className='w-full max-w-xs space-y-2'>
      <Label>Input with end add-on</Label>
      <div className='flex rounded-md shadow-xs'>
        <Input className='-me-px rounded-r-none shadow-none' placeholder='shadcnstudio' />
        <span className='-z-1 inline-flex items-center rounded-r-md border border-input bg-background px-3 text-muted-foreground text-sm'>
          .com
        </span>
      </div>
    </TextField>
  )
}

export default InputEndAddOnDemo
