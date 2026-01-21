'use client'

import { getLocalTimeZone, isWeekend, today } from '@internationalized/date'
import { useLocale } from 'react-aria-components'
import { RangeCalendar } from '@/components/ui/calendar'

const RangeCalendarDisabledDemo = () => {
  const { locale } = useLocale()
  const now = today(getLocalTimeZone())
  const disabledRanges = [
    [now, now.add({ days: 5 })],
    [now.add({ days: 14 }), now.add({ days: 16 })],
    [now.add({ days: 23 }), now.add({ days: 24 })]
  ]
  return (
    <RangeCalendar
      className='rounded-lg border'
      isDateUnavailable={(date) =>
        isWeekend(date, locale) ||
        disabledRanges.some((interval) => date.compare(interval[0]) >= 0 && date.compare(interval[1]) <= 0)
      }
    />
  )
}

export default RangeCalendarDisabledDemo
