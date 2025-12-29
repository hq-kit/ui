import { useId } from 'react'
import { TextField } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const InputStartTextAddOnDemo = () => {
  const id = useId()

  return (
    <TextField className='w-full max-w-xs space-y-2'>
      <Label>Input with start text add-on</Label>
      <div className='relative'>
        <Input className='peer pl-17' placeholder='shadcnstudio.com' />
        <span className='pointer-events-none absolute inset-y-0 left-0 flex items-center justify-center pl-3 text-sm peer-disabled:opacity-50'>
          https://
        </span>
      </div>
    </TextField>
  )
}

export default InputStartTextAddOnDemo
