import { Input } from '@/components/ui/input'

const InputSizesDemo = () => {
  return (
    <div className='w-full max-w-xs space-y-2'>
      <Input className='h-8' placeholder='Small input' type='text' />
      <Input placeholder='Medium input' type='text' />
      <Input className='h-10' placeholder='Large input' type='text' />
    </div>
  )
}

export default InputSizesDemo
