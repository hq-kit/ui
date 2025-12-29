'use client'

import { Calendar } from '@/components/ui/calendar'

const CalendarVariableSizeDemo = () => {
  return (
    <div>
      <Calendar className='rounded-lg border [--cell-size:--spacing(11)] md:[--cell-size:--spacing(13)]' />
      <p className='mt-3 text-center text-muted-foreground text-xs' role='region'>
        Variable size calendar
      </p>
    </div>
  )
}

export default CalendarVariableSizeDemo
