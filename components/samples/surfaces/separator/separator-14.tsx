import { Separator } from '@/components/ui/separator'

export const title = 'Gradient Separator'

const Example = () => (
  <div className='space-y-4'>
    <p className='text-sm'>Above</p>
    <Separator className='h-2 w-full bg-linear-to-r! from-transparent via-border to-transparent' />
    <p className='text-sm'>Below</p>
  </div>
)

export default Example
