"use client"
import type { Key } from "react-aria-components/TagGroup"
import React, { type ReactNode } from "react"
import { I18nProvider, useLocale } from "react-aria-components"

// https://github.com/unicode-org/cldr/blob/22af90ae3bb04263f651323ce3d9a71747a75ffb/common/supplemental/supplementalData.xml#L4649-L4664
const preferences = [
  // Tier 1
  { value: "fr-FR" },
  { value: "fr-CA" },
  { value: "de-DE" },
  { value: "en-US" },
  { value: "en-GB" },
  { value: "ja-JP", ordering: "gregory japanese" },
  // // Tier 2
  { value: "da-DK" },
  { value: "nl-NL" },
  { value: "fi-FI" },
  { value: "it-IT" },
  { value: "nb-NO" },
  { value: "es-ES" },
  { value: "sv-SE" },
  { value: "pt-BR" },
  // // Tier 3
  { value: "zh-CN" },
  { value: "zh-TW", ordering: "gregory roc chinese" },
  { value: "ko-KR" },
  // // Tier 4
  { value: "bg-BG" },
  { value: "hr-HR" },
  { value: "cs-CZ" },
  { value: "et-EE" },
  { value: "hu-HU" },
  { value: "lv-LV" },
  { value: "lt-LT" },
  { value: "pl-PL" },
  { value: "ro-RO" },
  { value: "ru-RU" },
  { value: "sr-SP" },
  { value: "sk-SK" },
  { value: "sl-SI" },
  { value: "tr-TR" },
  { value: "uk-UA" },
  // // Tier 5
  { value: "ar-AE", ordering: "gregory islamic-umalqura islamic islamic-civil islamic-tbla" },
  { value: "ar-DZ", ordering: "gregory islamic islamic-civil islamic-tbla" },
  { value: "AR-EG", ordering: "gregory coptic islamic islamic-civil islamic-tbla" },
  { value: "ar-SA", ordering: "islamic-umalqura gregory islamic islamic-rgsa" },
  { value: "el-GR" },
  { value: "he-IL", ordering: "gregory hebrew islamic islamic-civil islamic-tbla" },

  { value: "fa-AF", ordering: "persian gregory islamic islamic-civil islamic-tbla" },
  // {territories: 'CN CX HK MO SG', ordering: 'gregory chinese'},
  { value: "am-ET", ordering: "gregory ethiopic ethioaa" },
  { value: "hi-IN", ordering: "gregory indian" },
  // {territories: 'KR', ordering: 'gregory dangi'},
  { value: "th-TH", ordering: "buddhist gregory" }
]

const calendars = [
  { key: "gregory", name: "Gregorian" },
  { key: "japanese", name: "Japanese" },
  { key: "buddhist", name: "Buddhist" },
  { key: "roc", name: "Taiwan" },
  { key: "persian", name: "Persian" },
  { key: "indian", name: "Indian" },
  { key: "islamic-umalqura", name: "Islamic (Umm al-Qura)" },
  { key: "islamic-civil", name: "Islamic Civil" },
  { key: "islamic-tbla", name: "Islamic Tabular" },
  { key: "hebrew", name: "Hebrew" },
  { key: "coptic", name: "Coptic" },
  { key: "ethiopic", name: "Ethiopic" },
  { key: "ethioaa", name: "Ethiopic (Amete Alem)" }
]

function matchLocale(defaultLocale: string) {
  let parsed: Intl.Locale
  try {
    parsed = new Intl.Locale(defaultLocale)
  } catch {
    return "en-US"
  }

  const locales = preferences.map((p) => new Intl.Locale(p.value))

  // Try with both language and region first, and if that fails, try again with just language
  const p =
    locales.find((locale) => locale.language === parsed.language && locale.region === parsed.region) ||
    locales.find((locale) => locale.language === parsed.language)
  return p?.toString() || "en-US"
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const { locale: defaultLocale } = useLocale()
  const [locale, setLocale] = React.useState(() => matchLocale(defaultLocale))
  const [calendar, setCalendar] = React.useState(calendars[0].key)
  let [numberingSystem, setNumberingSystem] = React.useState<any>(
    () => new Intl.NumberFormat(defaultLocale).resolvedOptions().numberingSystem
  )

  const langDisplay = React.useMemo(() => new Intl.DisplayNames(defaultLocale, { type: "language" }), [defaultLocale])
  const regionDisplay = React.useMemo(() => new Intl.DisplayNames(defaultLocale, { type: "region" }), [defaultLocale])
  const locales = React.useMemo(() => {
    return preferences
      .map((item) => {
        const locale = new Intl.Locale(item.value)
        return {
          ...item,
          label: `${langDisplay.of(locale.language)} (${regionDisplay.of(locale.region!)})`
        }
      })
      .sort((a, b) => a.label.localeCompare(b.label))
  }, [langDisplay, regionDisplay])

  const pref = preferences.find((p) => p.value === locale)
  // @ts-expect-error there cannot be any undefined values in the array
  const preferredCalendars: Array<{ key: string; name: string }> = React.useMemo(
    () =>
      pref
        ? (pref.ordering || "gregory")
            .split(" ")
            .map((p) => calendars.find((c) => c.key === p))
            .filter(Boolean)
        : [calendars[0]],
    [pref]
  )
  const otherCalendars = React.useMemo(
    () => calendars.filter((c) => !preferredCalendars.some((p) => p?.key === c.key)),
    [preferredCalendars]
  )

  const updateLocale = (locale: string) => {
    setLocale(locale)
    const pref = preferences.find((p) => p.value === locale)
    setCalendar((pref?.ordering || "gregory").split(" ")[0])
    setNumberingSystem(new Intl.NumberFormat(locale || defaultLocale).resolvedOptions().numberingSystem)
  }

  const updateCalendar = (calendar: string) => {
    setCalendar(calendar)
    const selectedLocale = new Intl.Locale(locale || defaultLocale, {
      calendar: calendar && calendar !== preferredCalendars[0]!.key ? calendar : undefined
    })
    setNumberingSystem(new Intl.NumberFormat(selectedLocale.toString()).resolvedOptions().numberingSystem)
  }

  const selectedLocale = new Intl.Locale(locale || defaultLocale, {
    calendar: calendar && calendar !== preferredCalendars[0]!.key ? calendar : undefined,
    numberingSystem
  })

  const [numberFormat, setNumberFormat] = React.useState<any>("decimal")
  if (numberingSystem === "arabext") {
    numberingSystem = "arab"
  }

  const updateNumberFormat = (format: Key | null) => {
    setNumberFormat(format)
  }

  return (
    <>
      {/*<Sheet>*/}
      {/*  <Button*/}
      {/*    className="fixed top-24 right-0 z-50 mt-1 hidden rounded-r-none"*/}
      {/*    name="Theme Customizer Toggle"*/}
      {/*    size="icon"*/}
      {/*  >*/}
      {/*    <IconLanguage />*/}
      {/*  </Button>*/}
      {/*  <Sheet.Content overlayClassName="bg-transparent backdrop-blur-none!">*/}
      {/*    <Sheet.Header>*/}
      {/*      <Sheet.Title>Locale Selector</Sheet.Title>*/}
      {/*      <Sheet.Description>Set your preferences</Sheet.Description>*/}
      {/*    </Sheet.Header>*/}
      {/*    <Sheet.Body className="grid gap-4 pb-2 md:grid-cols-2">*/}
      {/*      <Select onChange={(e) => updateLocale(e!.toString())} value={locale}>*/}
      {/*        <Field.Label>Locale</Field.Label>*/}
      {/*        <Select.Trigger>*/}
      {/*          <Select.Value />*/}
      {/*        </Select.Trigger>*/}
      {/*        <Select.Content isSearchable items={locales} placement="bottom end">*/}
      {/*          {(item) => <Select.Item id={item.value}>{item.label}</Select.Item>}*/}
      {/*        </Select.Content>*/}
      {/*      </Select>*/}
      {/*      <Select onChange={(e) => updateCalendar(e!.toString())} value={calendar}>*/}
      {/*        <Field.Label>Calendar</Field.Label>*/}
      {/*        <Select.Trigger>*/}
      {/*          <Select.Value />*/}
      {/*        </Select.Trigger>*/}
      {/*        <Select.Content isSearchable placement="bottom end">*/}
      {/*          <Select.Group items={preferredCalendars} title="Preferred">*/}
      {/*            {(item: { key: string; name: string }) => <Select.Item>{item.name}</Select.Item>}*/}
      {/*          </Select.Group>*/}
      {/*          <Select.Group items={otherCalendars} title="Other">*/}
      {/*            {(item: { key: string; name: string }) => <Select.Item>{item.name}</Select.Item>}*/}
      {/*          </Select.Group>*/}
      {/*        </Select.Content>*/}
      {/*      </Select>*/}
      {/*      <Select onChange={setNumberingSystem} value={numberingSystem}>*/}
      {/*        <Field.Label>Numbering System</Field.Label>*/}
      {/*        <Select.Trigger>*/}
      {/*          <Select.Value />*/}
      {/*        </Select.Trigger>*/}
      {/*        <Select.Content placement="bottom end">*/}
      {/*          <Select.Item id="latn">Latin</Select.Item>*/}
      {/*          <Select.Item id="arab">Arabic</Select.Item>*/}
      {/*          <Select.Item id="hanidec">Hanidec</Select.Item>*/}
      {/*          <Select.Item id="deva">Devanagari</Select.Item>*/}
      {/*          <Select.Item id="beng">Bengali</Select.Item>*/}
      {/*        </Select.Content>*/}
      {/*      </Select>*/}
      {/*      <Select onChange={updateNumberFormat} value={numberFormat}>*/}
      {/*        <Field.Label>Number Format</Field.Label>*/}
      {/*        <Select.Trigger>*/}
      {/*          <Select.Value />*/}
      {/*        </Select.Trigger>*/}
      {/*        <Select.Content placement="bottom end">*/}
      {/*          <Select.Item id="decimal">Decimal</Select.Item>*/}
      {/*          <Select.Item id="percent">Percent</Select.Item>*/}
      {/*          <Select.Item id="currency">Currency</Select.Item>*/}
      {/*          <Select.Item id="unit">Unit</Select.Item>*/}
      {/*        </Select.Content>*/}
      {/*      </Select>*/}
      {/*    </Sheet.Body>*/}
      {/*  </Sheet.Content>*/}
      {/*</Sheet>*/}
      <I18nProvider locale={selectedLocale.toString()}>
        <LangWrapper>{children}</LangWrapper>
      </I18nProvider>
    </>
  )
}

function LangWrapper({ children }: { children: ReactNode }) {
  const { locale, direction } = useLocale()
  return (
    <div className="contents" dir={direction} lang={locale}>
      {children}
    </div>
  )
}
