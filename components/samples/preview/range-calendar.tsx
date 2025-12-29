'use client'

import type { Key } from 'react-aria-components'
import { useMemo, useState } from 'react'
import { I18nProvider, useLocale } from 'react-aria-components'
import { Code } from '@/components/mdx/code'
import { RangeCalendar } from '@/components/ui/calendar'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const localesList = [
  { value: 'fr-FR' },
  { value: 'fr-CA' },
  { value: 'de-DE' },
  { value: 'en-US' },
  { value: 'en-GB' },
  { value: 'ja-JP' },
  { value: 'da-DK' },
  { value: 'nl-NL' },
  { value: 'fi-FI' },
  { value: 'it-IT' },
  { value: 'nb-NO' },
  { value: 'es-ES' },
  { value: 'sv-SE' },
  { value: 'pt-BR' },
  { value: 'zh-CN' },
  { value: 'zh-TW' },
  { value: 'ko-KR' },
  { value: 'bg-BG' },
  { value: 'hr-HR' },
  { value: 'cs-CZ' },
  { value: 'et-EE' },
  { value: 'hu-HU' },
  { value: 'lv-LV' },
  { value: 'lt-LT' },
  { value: 'pl-PL' },
  { value: 'ro-RO' },
  { value: 'ru-RU' },
  { value: 'sr-SP' },
  { value: 'sk-SK' },
  { value: 'sl-SI' },
  { value: 'tr-TR' },
  { value: 'uk-UA' },
  { value: 'ar-AE' },
  { value: 'ar-DZ' },
  { value: 'AR-EG' },
  { value: 'ar-SA' },
  { value: 'el-GR' },
  { value: 'he-IL' },
  { value: 'fa-AF' },
  { value: 'am-ET' },
  { value: 'hi-IN' },
  { value: 'th-TH' }
]
const calendars = [
  { value: 'gregory', label: 'Gregorian' },
  { value: 'japanese', label: 'Japanese' },
  { value: 'buddhist', label: 'Buddhist' },
  { value: 'roc', label: 'Taiwan' },
  { value: 'persian', label: 'Persian' },
  { value: 'indian', label: 'Indian' },
  { value: 'islamic-umalqura', label: 'Islamic (Umm al-Qura)' },
  { value: 'islamic-civil', label: 'Islamic Civil' },
  { value: 'islamic-tbla', label: 'Islamic Tabular' },
  { value: 'hebrew', label: 'Hebrew' },
  { value: 'coptic', label: 'Coptic' },
  { value: 'ethiopic', label: 'Ethiopic' },
  { value: 'ethioaa', label: 'Ethiopic (Amete Alem)' }
]

export default function CalendarPreview() {
  const { locale: defaultLocale } = useLocale()
  const langDisplay = useMemo(() => new Intl.DisplayNames(defaultLocale, { type: 'language' }), [defaultLocale])
  const regionDisplay = useMemo(() => new Intl.DisplayNames(defaultLocale, { type: 'region' }), [defaultLocale])
  const locales = useMemo(() => {
    return localesList
      .map((item) => {
        const locale = new Intl.Locale(item.value)
        return {
          ...item,
          label: `${langDisplay.of(locale.language)} (${regionDisplay.of(locale.region!)})`
        }
      })
      .sort((a, b) => a.label.localeCompare(b.label))
  }, [langDisplay, regionDisplay])

  const [locale, setLocale] = useState<Key | null>('en-US')
  const [calendar, setCalendar] = useState<Key | null>('gregory')

  return (
    <div>
      <div className='flex flex-col gap-2 lg:flex-row-reverse'>
        <div className='flex flex-col gap-4 border-b p-4 lg:border-b-0 lg:border-l'>
          <Select onChange={setLocale} value={locale}>
            <Label>Locale</Label>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent items={locales}>
              {(item) => <SelectItem id={item.value}>{item.label}</SelectItem>}
            </SelectContent>
          </Select>
          <Select onChange={setCalendar} value={calendar}>
            <Label>Calendar</Label>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent items={calendars}>
              {(item) => <SelectItem id={item.value}>{item.label}</SelectItem>}
            </SelectContent>
          </Select>
        </div>
        <div className='grid min-h-52 w-full place-items-center'>
          <I18nProvider locale={`${locale}-u-ca-${calendar}`}>
            <RangeCalendar />
          </I18nProvider>
        </div>
      </div>
      <Code
        className='my-0 size-full rounded-lg rounded-t-none border **:[pre]:rounded-t-none'
        code={`import { I18nProvider } from 'react-aria-components';
import { RangeCalendar } from '@/components/ui/calendar';
          
<I18nProvider locale='${locale}-u-ca-${calendar}'>
  <RangeCalendar />
</I18nProvider>`}
        copy
      />
    </div>
  )
}
