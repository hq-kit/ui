import { Checkbox } from '@/components/ui/checkbox'

const CheckboxCircleDemo = () => (
  <div className='flex flex-col gap-2'>
    <Checkbox className='rounded-full [--primary:var(--color-sky-500)]'>Accept terms and conditions</Checkbox>
    <Checkbox className='rounded-full [--primary:var(--color-green-500)]'>Accept terms and conditions</Checkbox>
    <Checkbox className='rounded-full [--primary:var(--color-red-500)]'>Accept terms and conditions</Checkbox>
  </div>
)

export default CheckboxCircleDemo
