import { Checkbox } from '@/components/ui/checkbox'

const CheckboxSizesDemo = () => {
  return (
    <div className='flex items-center gap-2'>
      <Checkbox aria-label='Size default' className='size-4' defaultSelected />
      <Checkbox aria-label='Size small' className='size-5' defaultSelected />
      <Checkbox aria-label='Size large' className='size-6' defaultSelected />
    </div>
  )
}

export default CheckboxSizesDemo
