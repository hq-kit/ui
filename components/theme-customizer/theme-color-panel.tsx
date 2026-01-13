'use client'

import type { ThemePreset, ThemeStyleProps } from '@/types/theme'
import { useCallback, useEffect, useState } from 'react'
import { type ColorSpace, getColorChannels } from 'react-aria-components'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import {
  ColorArea,
  ColorField,
  ColorPicker,
  ColorSlider,
  ColorSliderTrack,
  ColorThumb,
  ColorSwatch as Swatch
} from '@/components/ui/colors'
import { Input } from '@/components/ui/input'
import { Popover, PopoverContent } from '@/components/ui/popover'
import { Select } from '@/components/ui/select'
import { useSettings } from '@/hooks/use-settings'
import { colorFormatter } from '@/lib/themes/color-converter'

type ColorSwatchProps = {
  label: string
  value: string
  onChange: (value: string) => void
}

function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}

export const ColorSwatch = ({ label, value, onChange }: ColorSwatchProps) => {
  const [localValue, setLocalValue] = useState(value)

  const [isHexFormat, setIsHexFormat] = useState(false)
  const [space, setSpace] = useState<ColorSpace>('rgb')

  const debouncedSearchTerm = useDebounce(localValue, 300)

  useEffect(() => {
    if (debouncedSearchTerm) {
      onChange(debouncedSearchTerm)
    }
  }, [debouncedSearchTerm])

  useEffect(() => {
    setLocalValue(colorFormatter(value, 'hex'))
  }, [value])

  return (
    <ColorPicker onChange={(v) => setLocalValue(v.toString('hex'))} value={localValue}>
      <Popover>
        <Button className='flex w-full items-center justify-start gap-2 p-2' variant='ghost'>
          <Swatch />
          {label.replace('Foreground', 'FG')}
        </Button>
        <PopoverContent>
          <div className='space-y-2'>
            <Select
              onChange={(s) => {
                setSpace(s as ColorSpace)
                setIsHexFormat(s === 'hex')
              }}
              value={space}
            >
              <Select.Trigger>
                <Select.Value />
              </Select.Trigger>
              <Select.Content>
                {['rgb', 'hex', 'hsl', 'hsb'].map((s) => (
                  <Select.Item id={s} key={s}>
                    {s.toUpperCase()}
                  </Select.Item>
                ))}
              </Select.Content>
            </Select>
            <ColorArea
              className='w-full'
              colorSpace={space}
              xChannel={space === 'hsl' || space === 'hsb' ? 'hue' : 'red'}
              yChannel={space === 'hsl' || space === 'hsb' ? 'saturation' : 'green'}
            />
            <ColorSlider
              channel={space === 'hsl' ? 'lightness' : space === 'hsb' ? 'brightness' : 'blue'}
              colorSpace={space}
            >
              <ColorSliderTrack>
                <ColorThumb />
              </ColorSliderTrack>
            </ColorSlider>
            {isHexFormat ? (
              <ColorField aria-label='Hex Color'>
                <Input />
              </ColorField>
            ) : getColorChannels(space).length > 0 ? (
              <div className='flex gap-2'>
                {getColorChannels(space).map((channel) => (
                  <ColorField aria-label={channel} channel={channel} colorSpace={space} key={channel}>
                    <Input />
                  </ColorField>
                ))}
              </div>
            ) : null}
          </div>
        </PopoverContent>
      </Popover>
    </ColorPicker>
  )
}

const ThemeColorPanel = () => {
  const { settings, updateSettings } = useSettings()

  const currentTheme = settings.theme.styles?.[settings.mode === 'system' ? 'light' : settings.mode] as
    | Partial<ThemeStyleProps>
    | undefined

  const updateColor = useCallback(
    (key: keyof ThemeStyleProps, value: string) => {
      if (!currentTheme) return

      // apply common styles to both light and dark modes
      if (key === 'font-sans' || key === 'font-mono' || key === 'radius') {
        updateSettings({
          theme: {
            ...settings.theme,
            styles: {
              ...settings.theme.styles,
              light: { ...settings.theme.styles?.light, [key]: value },
              dark: { ...settings.theme.styles?.dark, [key]: value }
            }
          }
        })

        return
      }

      updateSettings({
        theme: {
          ...settings.theme,
          styles: {
            ...settings.theme.styles,
            [settings.mode]: {
              ...settings.theme.styles?.[settings.mode as keyof ThemePreset],
              [key]: value
            }
          }
        }
      })
    },
    [currentTheme, settings.theme.styles]
  )

  return (
    <div className='space-y-6'>
      <Accordion allowsMultipleExpanded className='w-full space-y-2' defaultExpandedKeys={['brand']}>
        {/* Brand Colors */}
        <AccordionItem className='rounded-lg border px-4' id='brand'>
          <AccordionTrigger className='cursor-pointer py-3 font-medium text-base'>Brand Colors</AccordionTrigger>
          <AccordionContent className='grid grid-cols-2'>
            <ColorSwatch
              label='Primary'
              onChange={(value) => updateColor('primary', value)}
              value={currentTheme?.primary || ''}
            />
            <ColorSwatch
              label='Primary Foreground'
              onChange={(value) => updateColor('primary-foreground', value)}
              value={currentTheme?.['primary-foreground'] || ''}
            />
            <ColorSwatch
              label='Secondary'
              onChange={(value) => updateColor('secondary', value)}
              value={currentTheme?.secondary || ''}
            />
            <ColorSwatch
              label='Secondary Foreground'
              onChange={(value) => updateColor('secondary-foreground', value)}
              value={currentTheme?.['secondary-foreground'] || ''}
            />
            <ColorSwatch
              label='Destructive'
              onChange={(value) => updateColor('destructive', value)}
              value={currentTheme?.destructive || ''}
            />
          </AccordionContent>
        </AccordionItem>

        {/* Base Colors */}
        <AccordionItem className='rounded-lg border px-4' id='base'>
          <AccordionTrigger className='cursor-pointer py-3 font-medium text-base'>Base Colors</AccordionTrigger>
          <AccordionContent className='grid grid-cols-2'>
            <ColorSwatch
              label='Background'
              onChange={(value) => updateColor('background', value)}
              value={currentTheme?.background || ''}
            />
            <ColorSwatch
              label='Foreground'
              onChange={(value) => updateColor('foreground', value)}
              value={currentTheme?.foreground || ''}
            />
            <ColorSwatch
              label='Card'
              onChange={(value) => updateColor('card', value)}
              value={currentTheme?.card || ''}
            />
            <ColorSwatch
              label='Card Foreground'
              onChange={(value) => updateColor('card-foreground', value)}
              value={currentTheme?.['card-foreground'] || ''}
            />
            <ColorSwatch
              label='Popover'
              onChange={(value) => updateColor('popover', value)}
              value={currentTheme?.popover || ''}
            />
            <ColorSwatch
              label='Popover Foreground'
              onChange={(value) => updateColor('popover-foreground', value)}
              value={currentTheme?.['popover-foreground'] || ''}
            />
          </AccordionContent>
        </AccordionItem>

        {/* Other Colors */}
        <AccordionItem className='rounded-lg border px-4' id='other'>
          <AccordionTrigger className='cursor-pointer py-3 font-medium text-base'>Other Colors</AccordionTrigger>
          <AccordionContent className='grid grid-cols-2'>
            <ColorSwatch
              label='Muted'
              onChange={(value) => updateColor('muted', value)}
              value={currentTheme?.muted || ''}
            />
            <ColorSwatch
              label='Muted Foreground'
              onChange={(value) => updateColor('muted-foreground', value)}
              value={currentTheme?.['muted-foreground'] || ''}
            />
            <ColorSwatch
              label='Accent'
              onChange={(value) => updateColor('accent', value)}
              value={currentTheme?.accent || ''}
            />
            <ColorSwatch
              label='Accent Foreground'
              onChange={(value) => updateColor('accent-foreground', value)}
              value={currentTheme?.['accent-foreground'] || ''}
            />
            <ColorSwatch
              label='Border'
              onChange={(value) => updateColor('border', value)}
              value={currentTheme?.border || ''}
            />
            <ColorSwatch
              label='Input'
              onChange={(value) => updateColor('input', value)}
              value={currentTheme?.input || ''}
            />
            <ColorSwatch
              label='Ring'
              onChange={(value) => updateColor('ring', value)}
              value={currentTheme?.ring || ''}
            />
          </AccordionContent>
        </AccordionItem>

        {/* Sidebar Colors */}
        <AccordionItem className='border! rounded-lg px-4' id='sidebar'>
          <AccordionTrigger className='cursor-pointer py-3 font-medium text-base'>Sidebar Colors</AccordionTrigger>
          <AccordionContent className='grid grid-cols-2'>
            <ColorSwatch
              label='Sidebar'
              onChange={(value) => updateColor('sidebar', value)}
              value={currentTheme?.sidebar || ''}
            />
            <ColorSwatch
              label='Sidebar Foreground'
              onChange={(value) => updateColor('sidebar-foreground', value)}
              value={currentTheme?.['sidebar-foreground'] || ''}
            />
            <ColorSwatch
              label='Sidebar Primary'
              onChange={(value) => updateColor('sidebar-primary', value)}
              value={currentTheme?.['sidebar-primary'] || ''}
            />
            <ColorSwatch
              label='Sidebar Primary Foreground'
              onChange={(value) => updateColor('sidebar-primary-foreground', value)}
              value={currentTheme?.['sidebar-primary-foreground'] || ''}
            />
            <ColorSwatch
              label='Sidebar Accent'
              onChange={(value) => updateColor('sidebar-accent', value)}
              value={currentTheme?.['sidebar-accent'] || ''}
            />
            <ColorSwatch
              label='Sidebar Accent Foreground'
              onChange={(value) => updateColor('sidebar-accent-foreground', value)}
              value={currentTheme?.['sidebar-accent-foreground'] || ''}
            />
            <ColorSwatch
              label='Sidebar Border'
              onChange={(value) => updateColor('sidebar-border', value)}
              value={currentTheme?.['sidebar-border'] || ''}
            />
            <ColorSwatch
              label='Sidebar Ring'
              onChange={(value) => updateColor('sidebar-ring', value)}
              value={currentTheme?.['sidebar-ring'] || ''}
            />
          </AccordionContent>
        </AccordionItem>

        {/* Chart Colors */}
        <AccordionItem className='border! rounded-lg px-4' id='chart'>
          <AccordionTrigger className='cursor-pointer py-3 font-medium text-base'>Chart Colors</AccordionTrigger>
          <AccordionContent className='grid grid-cols-2'>
            <ColorSwatch
              label='Chart 1'
              onChange={(value) => updateColor('chart-1', value)}
              value={currentTheme?.['chart-1'] || ''}
            />
            <ColorSwatch
              label='Chart 2'
              onChange={(value) => updateColor('chart-2', value)}
              value={currentTheme?.['chart-2'] || ''}
            />
            <ColorSwatch
              label='Chart 3'
              onChange={(value) => updateColor('chart-3', value)}
              value={currentTheme?.['chart-3'] || ''}
            />
            <ColorSwatch
              label='Chart 4'
              onChange={(value) => updateColor('chart-4', value)}
              value={currentTheme?.['chart-4'] || ''}
            />
            <ColorSwatch
              label='Chart 5'
              onChange={(value) => updateColor('chart-5', value)}
              value={currentTheme?.['chart-5'] || ''}
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default ThemeColorPanel
