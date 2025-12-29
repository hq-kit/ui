'use client'

import { Calendar } from '@/components/ui/calendar'

const CalendarMultiMonthDemo = () => {
  return (
    <div>
      <Calendar className='rounded-lg border' visibleDuration={{ months: 2 }} />
      <p className='mt-4 text-center text-muted-foreground text-xs' role='region'>
        Multi month calendar
      </p>
    </div>
  )
}

export default CalendarMultiMonthDemo
