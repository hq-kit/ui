import { TextField } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const InputAddOnsDemo = () => {
  return (
    <TextField className='w-full max-w-xs space-y-2'>
      <Label>Input with add-ons</Label>
      <div className='flex rounded-md shadow-xs'>
        <span className='-z-1 inline-flex items-center rounded-l-md border border-input bg-background px-3 text-muted-foreground text-sm'>
          https://
        </span>
        <Input className='-mx-px rounded-none shadow-none' placeholder='shadcnstudio' />
        <span className='-z-1 inline-flex items-center rounded-r-md border border-input bg-background px-3 text-muted-foreground text-sm'>
          .com
        </span>
      </div>
    </TextField>
  )
}

export default InputAddOnsDemo
