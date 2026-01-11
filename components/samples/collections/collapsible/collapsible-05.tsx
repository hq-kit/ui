import { IconChevronDown, IconStar } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Collapsible, CollapsibleContent } from '@/components/ui/collapsible'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'

const CollapsibleFilterDemo = () => {
  return (
    <div className='w-full max-w-87.5 space-y-3'>
      <Collapsible className='flex flex-col gap-2'>
        <div className='flex items-center justify-between gap-4 px-4'>
          <div className='font-semibold text-sm'>Price Range</div>
          <Button size='icon-sm' slot='trigger' variant='ghost'>
            <IconChevronDown className='in-data-[expanded=true]:rotate-180 text-muted-foreground transition-transform' />
            <span className='sr-only'>Toggle</span>
          </Button>
        </div>
        <CollapsibleContent className='flex flex-col gap-2'>
          <div className='flex items-center justify-between gap-4 px-4'>
            <Label className='shrink-0 font-medium text-sm' htmlFor='min-price'>
              Min Price
            </Label>
            <Input className='max-w-58' id='min-price' placeholder='0' type='number' />
          </div>
          <div className='flex items-center justify-between gap-4 px-4'>
            <Label className='shrink-0 font-medium text-sm' htmlFor='max-price'>
              Max Price
            </Label>
            <Input className='max-w-58' id='max-price' placeholder='1000' type='number' />
          </div>
        </CollapsibleContent>
      </Collapsible>
      <Separator />
      <Collapsible className='flex w-full max-w-87.5 flex-col gap-2'>
        <div className='flex items-center justify-between gap-4 px-4'>
          <div className='font-semibold text-sm'>Customer Ratings</div>
          <Button size='icon-sm' slot='trigger' variant='ghost'>
            <IconChevronDown className='in-data-[expanded=true]:rotate-180 text-muted-foreground transition-transform' />
            <span className='sr-only'>Toggle</span>
          </Button>
        </div>
        <CollapsibleContent className='flex flex-col gap-2'>
          <div className='flex items-center gap-2 px-4'>
            <Checkbox id='rating-4' />
            <Label className='flex shrink-0 items-center gap-1 font-medium text-sm' htmlFor='rating-4'>
              <span className='flex items-center gap-1'>
                4
                <IconStar className='size-4 fill-amber-500 stroke-amber-500 dark:fill-amber-400 dark:stroke-amber-400' />
              </span>
              & Up
            </Label>
          </div>
          <div className='flex items-center gap-2 px-4'>
            <Checkbox id='rating-3' />
            <Label className='flex shrink-0 items-center gap-1 font-medium text-sm' htmlFor='rating-3'>
              <span className='flex items-center gap-1'>
                3
                <IconStar className='size-4 fill-amber-500 stroke-amber-500 dark:fill-amber-400 dark:stroke-amber-400' />
              </span>
              & Up
            </Label>
          </div>
          <div className='flex items-center gap-2 px-4'>
            <Checkbox id='rating-2' />
            <Label className='flex shrink-0 items-center gap-1 font-medium text-sm' htmlFor='rating-2'>
              <span className='flex items-center gap-1'>
                2
                <IconStar className='size-4 fill-amber-500 stroke-amber-500 dark:fill-amber-400 dark:stroke-amber-400' />
              </span>
              & Up
            </Label>
          </div>
        </CollapsibleContent>
      </Collapsible>
      <Separator />
      <Collapsible className='flex w-full max-w-87.5 flex-col gap-2'>
        <div className='flex items-center justify-between gap-4 px-4'>
          <div className='font-semibold text-sm'>Brand</div>
          <Button size='icon-sm' slot='trigger' variant='ghost'>
            <IconChevronDown className='in-data-[expanded=true]:rotate-180 text-muted-foreground transition-transform' />
            <span className='sr-only'>Toggle</span>
          </Button>
        </div>
        <CollapsibleContent className='flex flex-col gap-2'>
          <div className='flex items-center gap-2 px-4'>
            <Checkbox id='brand-apple' />
            <Label className='shrink-0 font-medium text-sm' htmlFor='brand-apple'>
              Apple
            </Label>
          </div>
          <div className='flex items-center gap-2 px-4'>
            <Checkbox id='brand-samsung' />
            <Label className='shrink-0 font-medium text-sm' htmlFor='brand-samsung'>
              Samsung
            </Label>
          </div>
          <div className='flex items-center gap-2 px-4'>
            <Checkbox id='brand-google' />
            <Label className='shrink-0 font-medium text-sm' htmlFor='brand-google'>
              Google
            </Label>
          </div>
          <div className='flex items-center gap-2 px-4'>
            <Checkbox id='brand-oneplus' />
            <Label className='shrink-0 font-medium text-sm' htmlFor='brand-oneplus'>
              OnePlus
            </Label>
          </div>
          <div className='flex items-center gap-2 px-4'>
            <Checkbox id='brand-xiaomi' />
            <Label className='shrink-0 font-medium text-sm' htmlFor='brand-xiaomi'>
              Xiaomi
            </Label>
          </div>
        </CollapsibleContent>
      </Collapsible>
      <Separator />
      <Collapsible className='flex w-full max-w-87.5 flex-col gap-2'>
        <div className='flex items-center justify-between gap-4 px-4'>
          <div className='font-semibold text-sm'>Battery</div>
          <Button size='icon-sm' slot='trigger' variant='ghost'>
            <IconChevronDown className='in-data-[expanded=true]:rotate-180 text-muted-foreground transition-transform' />
            <span className='sr-only'>Toggle</span>
          </Button>
        </div>
        <CollapsibleContent className='flex flex-col gap-2'>
          <div className='flex items-center gap-2 px-4'>
            <Checkbox id='battery-3500' />
            <Label className='shrink-0 font-medium text-sm' htmlFor='battery-3500'>
              3500mAh
            </Label>
          </div>
          <div className='flex items-center gap-2 px-4'>
            <Checkbox id='battery-4000' />
            <Label className='shrink-0 font-medium text-sm' htmlFor='battery-4000'>
              4000mAh
            </Label>
          </div>
          <div className='flex items-center gap-2 px-4'>
            <Checkbox id='battery-5000' />
            <Label className='shrink-0 font-medium text-sm' htmlFor='battery-5000'>
              5000mAh
            </Label>
          </div>
          <div className='flex items-center gap-2 px-4'>
            <Checkbox id='battery-6000' />
            <Label className='shrink-0 font-medium text-sm' htmlFor='battery-6000'>
              6000mAh
            </Label>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}

export default CollapsibleFilterDemo
