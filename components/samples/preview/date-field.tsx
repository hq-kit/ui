"use client"

import type { Key } from "react-aria-components"
import { useMemo, useState } from "react"
import { I18nProvider, useLocale } from "react-aria-components"
import { FieldSelect } from "@/components/forms"
import { Code } from "@/components/mdx/code-client"
import { DateField, DateInput } from "@/components/ui/date-field"

const localesList = [
  { id: "fr-FR" },
  { id: "fr-CA" },
  { id: "de-DE" },
  { id: "en-US" },
  { id: "en-GB" },
  { id: "ja-JP" },
  { id: "da-DK" },
  { id: "nl-NL" },
  { id: "fi-FI" },
  { id: "it-IT" },
  { id: "nb-NO" },
  { id: "es-ES" },
  { id: "sv-SE" },
  { id: "pt-BR" },
  { id: "zh-CN" },
  { id: "zh-TW" },
  { id: "ko-KR" },
  { id: "bg-BG" },
  { id: "hr-HR" },
  { id: "cs-CZ" },
  { id: "et-EE" },
  { id: "hu-HU" },
  { id: "lv-LV" },
  { id: "lt-LT" },
  { id: "pl-PL" },
  { id: "ro-RO" },
  { id: "ru-RU" },
  { id: "sr-SP" },
  { id: "sk-SK" },
  { id: "sl-SI" },
  { id: "tr-TR" },
  { id: "uk-UA" },
  { id: "ar-AE" },
  { id: "ar-DZ" },
  { id: "AR-EG" },
  { id: "ar-SA" },
  { id: "el-GR" },
  { id: "he-IL" },
  { id: "fa-AF" },
  { id: "am-ET" },
  { id: "hi-IN" },
  { id: "th-TH" }
]
const calendars = [
  { id: "gregory", label: "Gregorian" },
  { id: "japanese", label: "Japanese" },
  { id: "buddhist", label: "Buddhist" },
  { id: "roc", label: "Taiwan" },
  { id: "persian", label: "Persian" },
  { id: "indian", label: "Indian" },
  { id: "islamic-umalqura", label: "Islamic (Umm al-Qura)" },
  { id: "islamic-civil", label: "Islamic Civil" },
  { id: "islamic-tbla", label: "Islamic Tabular" },
  { id: "hebrew", label: "Hebrew" },
  { id: "coptic", label: "Coptic" },
  { id: "ethiopic", label: "Ethiopic" },
  { id: "ethioaa", label: "Ethiopic (Amete Alem)" }
]

export default function DateFieldPreview() {
  const { locale: defaultLocale } = useLocale()
  const langDisplay = useMemo(() => new Intl.DisplayNames(defaultLocale, { type: "language" }), [defaultLocale])
  const regionDisplay = useMemo(() => new Intl.DisplayNames(defaultLocale, { type: "region" }), [defaultLocale])
  const locales = useMemo(() => {
    return localesList
      .map((item) => {
        const locale = new Intl.Locale(item.id)
        return {
          ...item,
          label: `${langDisplay.of(locale.language)} (${regionDisplay.of(locale.region!)})`
        }
      })
      .sort((a, b) => a.label.localeCompare(b.label))
  }, [langDisplay, regionDisplay])

  const [locale, setLocale] = useState<Key | null>("en-US")
  const [calendar, setCalendar] = useState<Key | null>("gregory")

  return (
    <div>
      <div className="flex flex-col gap-2 lg:flex-row-reverse">
        <div className="flex flex-col gap-4 border-b p-4 lg:border-b-0 lg:border-l">
          <FieldSelect items={locales} label={"Locales"} name={"locales"} onChange={setLocale} value={locale} />
          <FieldSelect items={calendars} label={"Calendar"} name={"calendar"} onChange={setCalendar} value={calendar} />
        </div>
        <div className="grid min-h-52 w-full place-items-center">
          <div className="max-w-xs">
            <I18nProvider locale={`${locale}-u-ca-${calendar}`}>
              <DateField>
                <DateInput />
              </DateField>
            </I18nProvider>
          </div>
        </div>
      </div>
      <Code
        className="my-0 size-full rounded-lg rounded-t-none border **:[pre]:rounded-t-none"
        code={`import { I18nProvider } from 'react-aria-components';
import { DateInput } from '@/components/ui/date-input'
import { DateField } from '@/components/ui/field'
          
<I18nProvider locale='${locale}-u-ca-${calendar}'>
  <DateField>
    <DateInput />
  </DateField>
</I18nProvider>`}
        copy
      />
    </div>
  )
}
