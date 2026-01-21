'use client'

import { Form } from 'react-aria-components'
import { Button } from '@/components/ui/button'
import { FieldLabel } from '@/components/ui/field'
import { Slider, SliderFill, SliderOutput, SliderThumb, SliderTrack } from '@/components/ui/slider'

export default function FieldSliderDemo() {
  return (
    <Form className='w-full space-y-4' onSubmit={(e) => e.preventDefault()}>
      <Slider defaultValue={20}>
        <div className='flex items-center justify-between'>
          <FieldLabel>Opacity</FieldLabel>
          <SliderOutput />
        </div>
        <SliderTrack>
          <SliderFill />
          <SliderThumb />
        </SliderTrack>
      </Slider>
      <Button type='submit'>Submit</Button>
    </Form>
  )
}
