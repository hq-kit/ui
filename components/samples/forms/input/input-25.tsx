import { TextField } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const InputInsetLabelDemo = () => {
  return (
    <TextField className='relative w-full max-w-xs rounded-md border border-input bg-background shadow-xs outline-none transition-[color,box-shadow] focus-within:border-ring focus-within:ring-[3px] focus-within:ring-ring/50 has-disabled:pointer-events-none has-disabled:cursor-not-allowed has-aria-invalid:border-destructive has-disabled:opacity-50 has-aria-invalid:ring-destructive/20 has-[input:is(:disabled)]:*:pointer-events-none dark:has-aria-invalid:ring-destructive/40'>
      <Label className='block px-3 pt-1 font-medium text-foreground text-xs dark:bg-input/30'>
        Input with inset label
      </Label>
      <Input
        className='flex h-9 w-full bg-transparent px-3 pb-1 text-foreground text-sm placeholder:text-muted-foreground focus-visible:outline-none dark:bg-input/30'
        placeholder='Email address'
        type='email'
      />
    </TextField>
  )
}

export default InputInsetLabelDemo
