import { Separator } from '@/components/ui/separator'

const Example = () => (
  <div className='space-y-4'>
    <p className='text-sm'>Above</p>
    <div className='space-y-1'>
      <Separator />
      <Separator />
    </div>
    <p className='text-sm'>Below</p>
  </div>
)

export default Example
