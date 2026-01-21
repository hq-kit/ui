import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

const CheckboxCardDemo = () => {
  return (
    <div className='space-y-2'>
      <Label className='flex items-start gap-2 rounded-lg border p-3 hover:bg-accent/50 has-data-selected:border-blue-600 has-data-selected:bg-blue-50 dark:has-data-selected:border-blue-900 dark:has-data-selected:bg-blue-950'>
        <Checkbox
          className='data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700'
          defaultSelected
        />
        <div className='grid gap-1.5 font-normal'>
          <p className='font-medium text-sm leading-none'>Auto Start</p>
          <p className='text-muted-foreground text-sm'>Starting with your OS.</p>
        </div>
      </Label>
      <Label className='flex items-start gap-2 rounded-lg border p-3 hover:bg-accent/50 has-data-selected:border-blue-600 has-data-selected:bg-blue-50 dark:has-data-selected:border-blue-900 dark:has-data-selected:bg-blue-950'>
        <Checkbox className='data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700' />
        <div className='grid gap-1.5 font-normal'>
          <p className='font-medium text-sm leading-none'>Auto update</p>
          <p className='text-muted-foreground text-sm'>Download and install new version</p>
        </div>
      </Label>
    </div>
  )
}

export default CheckboxCardDemo
