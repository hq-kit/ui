'use client'

import { getLocalTimeZone, isWeekend, today } from '@internationalized/date'
import { useLocale } from 'react-aria-components'
import { Calendar } from '@/components/ui/calendar'

const CalendarDemo = () => {
  const { locale } = useLocale()
  const now = today(getLocalTimeZone())
  const disabledRanges = [
    [now, now.add({ days: 5 })],
    [now.add({ days: 14 }), now.add({ days: 16 })],
    [now.add({ days: 23 }), now.add({ days: 24 })]
  ]
  return (
    <div>
      <Calendar
        className='rounded-lg border'
        isDateUnavailable={(date) =>
          isWeekend(date, locale) ||
          disabledRanges.some((interval) => date.compare(interval[0]) >= 0 && date.compare(interval[1]) <= 0)
        }
        minValue={today(getLocalTimeZone())}
      />
      <p className='mt-3 text-center text-muted-foreground text-xs' role='region'>
        Disabled Date
      </p>
    </div>
  )
}

export default CalendarDemo
