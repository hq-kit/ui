'use client'

import { IconFilter } from '@tabler/icons-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Popover, PopoverContent } from '@/components/ui/popover'
import { Slider, SliderFill, SliderGroup, SliderThumb, SliderTrack } from '@/components/ui/slider'

const filters = ['Most liked', 'Highest reviewed', 'Newest', 'Most popular']

const PopoverFilterDemo = () => {
  const [selected, setSelected] = useState(['Most liked', 'Newest'])
  const [price, setPrice] = useState([450])

  return (
    <Popover>
      <Button size='icon' variant='outline'>
        <IconFilter />
        <span className='sr-only'>Filter</span>
      </Button>
      <PopoverContent>
        <div className='grid gap-4'>
          <div className='flex items-center justify-between gap-2'>
            <span className='font-medium'>Filter</span>
            <Button
              className='h-7 rounded-full px-2 py-1 text-xs'
              onClick={() => {
                setSelected(['Most liked', 'Newest'])
                setPrice([450])
              }}
              variant='secondary'
            >
              Reset all
            </Button>
          </div>
          <div className='flex flex-col gap-2'>
            {filters.map((label, index) => (
              <Checkbox
                isSelected={selected.includes(label)}
                key={index}
                onChange={(checked) =>
                  setSelected(checked ? [...selected, label] : selected.filter((item) => item !== label))
                }
              >
                {label}
              </Checkbox>
            ))}
          </div>
          <div className='grid gap-3'>
            <Label>Price range</Label>
            <div className='space-y-2'>
              <Slider
                aria-label='Price range'
                maxValue={1000}
                onChange={(v) => setPrice(v as any)}
                step={50}
                value={price}
              >
                <SliderGroup>
                  <SliderTrack>
                    <SliderFill />
                    <SliderThumb />
                  </SliderTrack>
                </SliderGroup>
              </Slider>
              <span className='flex w-full items-center justify-between gap-1 font-medium text-muted-foreground text-xs'>
                <span>0</span>
                <span>500</span>
                <span>1000</span>
              </span>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default PopoverFilterDemo
