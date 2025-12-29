'use client'

import { IconEye, IconEyeOff } from '@tabler/icons-react'
import { useId, useState } from 'react'
import { Button } from '@/components/ui/button'
import { TextField } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const InputPasswordDemo = () => {
  const [isVisible, setIsVisible] = useState(false)

  const id = useId()

  return (
    <TextField className='w-full max-w-xs space-y-2'>
      <Label>Password input</Label>
      <div className='relative'>
        <Input className='pr-9' placeholder='Password' type={isVisible ? 'text' : 'password'} />
        <Button
          className='absolute inset-y-0 right-0 rounded-l-none text-muted-foreground hover:bg-transparent focus-visible:ring-ring/50'
          onPress={() => setIsVisible((prevState) => !prevState)}
          size='icon'
          variant='ghost'
        >
          {isVisible ? <IconEyeOff /> : <IconEye />}
          <span className='sr-only'>{isVisible ? 'Hide password' : 'Show password'}</span>
        </Button>
      </div>
    </TextField>
  )
}

export default InputPasswordDemo
