import { IconFlagDollar } from '@tabler/icons-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent } from '@/components/ui/popover'

const PopoverPricingDemo = () => {
  return (
    <Popover>
      <Button size='icon' variant='outline'>
        <IconFlagDollar />
        <span className='sr-only'>Pricing details</span>
      </Button>
      <PopoverContent className='w-80'>
        <div className='grid gap-2.5'>
          <div className='flex items-center justify-between'>
            <span className='font-semibold text-lg'>Enterprise Plan</span>
            <span className='font-medium text-sm'>$49.99/month</span>
          </div>
          <p className='text-sm'>
            Get unlimited access to all features including AI-powered analytics, custom branding, priority support, and
            advanced team collaboration tools.
          </p>
          <div className='flex items-center gap-2'>
            <Badge className='rounded-sm px-1.5 py-px text-xs' variant='destructive'>
              Limited Offer
            </Badge>
            <span className='text-muted-foreground text-xs'>20% discount on annual plan</span>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default PopoverPricingDemo
