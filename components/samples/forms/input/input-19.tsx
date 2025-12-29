import { TextField } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const InputStartAddOnDemo = () => {
  return (
    <TextField className='w-full max-w-xs space-y-2'>
      <Label>Input with start add-on</Label>
      <div className='flex rounded-md shadow-xs'>
        <span className='-z-1 inline-flex items-center rounded-l-md border border-input bg-background px-3 text-muted-foreground text-sm'>
          https://
        </span>
        <Input className='-ms-px rounded-l-none shadow-none' placeholder='shadcnstudio.com' />
      </div>
    </TextField>
  )
}

export default InputStartAddOnDemo
