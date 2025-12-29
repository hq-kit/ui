'use client'
import { useId } from 'react'
import { Form } from 'react-aria-components'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const InputStartSelectDemo = () => {
  const id = useId()

  return (
    <Form className='w-full max-w-xs space-y-2'>
      <Label htmlFor={id}>Input with start select</Label>
      <div className='flex rounded-md shadow-xs'>
        <Select defaultValue='https://'>
          <SelectTrigger className='rounded-r-none shadow-none focus-visible:z-1' id={id}>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem className='pr-2 [&_svg]:hidden' id='https://'>
              https://
            </SelectItem>
            <SelectItem className='pr-2 [&_svg]:hidden' id='http://'>
              http://
            </SelectItem>
            <SelectItem className='pr-2 [&_svg]:hidden' id='ftp://'>
              ftp://
            </SelectItem>
            <SelectItem className='pr-2 [&_svg]:hidden' id='sftp://'>
              sftp://
            </SelectItem>
            <SelectItem className='pr-2 [&_svg]:hidden' id='ws://'>
              ws://
            </SelectItem>
            <SelectItem className='pr-2 [&_svg]:hidden' id='wss://'>
              wss://
            </SelectItem>
          </SelectContent>
        </Select>
        <Input className='-ms-px rounded-l-none shadow-none' id={id} placeholder='shadcnstudio.com' type='text' />
      </div>
    </Form>
  )
}

export default InputStartSelectDemo
