'use client'

import type { ThemeStyleProps } from '@/lib/themes/presets'
import { useCallback, useEffect, useRef, useState } from 'react'
import { type ColorSpace, getColorChannels } from 'react-aria-components'
import { useTheme } from '@/components/providers'
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
import { useThemeGenerator } from '@/hooks/use-theme'
import { colorFormatter } from '@/lib/themes/color-converter'

type ColorSwatchProps = {
  label: string
  value: string
  action: (value: string) => void
}

export const ColorSwatch = ({ label, value, action }: ColorSwatchProps) => {
  const [color, setColor] = useState(value)

  const [isHexFormat, setIsHexFormat] = useState(false)
  const [space, setSpace] = useState<ColorSpace>('rgb')

  const debounceRef = useRef<number>(0)

  useEffect(() => {
    setColor(colorFormatter(value, 'hex'))
  }, [value])

  useEffect(() => {
    if (colorFormatter(value, 'hex') === color) return
    window.clearTimeout(debounceRef.current)

    debounceRef.current = window.setTimeout(() => {
      action(color)
    }, 300)

    return () => window.clearTimeout(debounceRef.current)
  }, [color, action])

  return (
    <ColorPicker onChange={(v) => setColor(v.toString('hex'))} value={color}>
      <Popover>
        <Button className='flex w-full items-center justify-start gap-2 p-2' variant='ghost'>
          <Swatch />
          {label.replace('Foreground', 'FG')}
        </Button>
        <PopoverContent>
          <div className='space-y-2'>
            <Select
              aria-label='Color format'
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
  const { resolvedTheme } = useTheme()
  const { updateVar, currentStyles } = useThemeGenerator()
  const mode = resolvedTheme === 'light' ? 'light' : 'dark'
  const currentTheme = currentStyles[mode === 'dark' ? 'dark' : 'light']

  const updateColor = useCallback(
    (key: keyof ThemeStyleProps, value: string) => {
      if (!currentStyles) return
      updateVar(key, value, mode)
    },
    [currentTheme, resolvedTheme]
  )

  return (
    <div className='space-y-6'>
      <Accordion allowsMultipleExpanded className='w-full space-y-2' defaultExpandedKeys={['brand']}>
        {/* Brand Colors */}
        <AccordionItem className='rounded-lg border px-4' id='brand'>
          <AccordionTrigger className='cursor-pointer py-3 font-medium text-base'>Brand Colors</AccordionTrigger>
          <AccordionContent className='grid grid-cols-2'>
            <ColorSwatch
              action={(value) => updateColor('primary', value)}
              label='Primary'
              value={currentTheme?.primary || ''}
            />
            <ColorSwatch
              action={(value) => updateColor('primary-foreground', value)}
              label='Primary Foreground'
              value={currentTheme?.['primary-foreground'] || ''}
            />
            <ColorSwatch
              action={(value) => updateColor('secondary', value)}
              label='Secondary'
              value={currentTheme?.secondary || ''}
            />
            <ColorSwatch
              action={(value) => updateColor('secondary-foreground', value)}
              label='Secondary Foreground'
              value={currentTheme?.['secondary-foreground'] || ''}
            />
            <ColorSwatch
              action={(value) => updateColor('destructive', value)}
              label='Destructive'
              value={currentTheme?.destructive || ''}
            />
          </AccordionContent>
        </AccordionItem>

        {/* Base Colors */}
        <AccordionItem className='rounded-lg border px-4' id='base'>
          <AccordionTrigger className='cursor-pointer py-3 font-medium text-base'>Base Colors</AccordionTrigger>
          <AccordionContent className='grid grid-cols-2'>
            <ColorSwatch
              action={(value) => updateColor('background', value)}
              label='Background'
              value={currentTheme?.background || ''}
            />
            <ColorSwatch
              action={(value) => updateColor('foreground', value)}
              label='Foreground'
              value={currentTheme?.foreground || ''}
            />
            <ColorSwatch action={(value) => updateColor('card', value)} label='Card' value={currentTheme?.card || ''} />
            <ColorSwatch
              action={(value) => updateColor('card-foreground', value)}
              label='Card Foreground'
              value={currentTheme?.['card-foreground'] || ''}
            />
            <ColorSwatch
              action={(value) => updateColor('popover', value)}
              label='Popover'
              value={currentTheme?.popover || ''}
            />
            <ColorSwatch
              action={(value) => updateColor('popover-foreground', value)}
              label='Popover Foreground'
              value={currentTheme?.['popover-foreground'] || ''}
            />
          </AccordionContent>
        </AccordionItem>

        {/* Other Colors */}
        <AccordionItem className='rounded-lg border px-4' id='other'>
          <AccordionTrigger className='cursor-pointer py-3 font-medium text-base'>Other Colors</AccordionTrigger>
          <AccordionContent className='grid grid-cols-2'>
            <ColorSwatch
              action={(value) => updateColor('muted', value)}
              label='Muted'
              value={currentTheme?.muted || ''}
            />
            <ColorSwatch
              action={(value) => updateColor('muted-foreground', value)}
              label='Muted Foreground'
              value={currentTheme?.['muted-foreground'] || ''}
            />
            <ColorSwatch
              action={(value) => updateColor('accent', value)}
              label='Accent'
              value={currentTheme?.accent || ''}
            />
            <ColorSwatch
              action={(value) => updateColor('accent-foreground', value)}
              label='Accent Foreground'
              value={currentTheme?.['accent-foreground'] || ''}
            />
            <ColorSwatch
              action={(value) => updateColor('border', value)}
              label='Border'
              value={currentTheme?.border || ''}
            />
            <ColorSwatch
              action={(value) => updateColor('input', value)}
              label='Input'
              value={currentTheme?.input || ''}
            />
            <ColorSwatch action={(value) => updateColor('ring', value)} label='Ring' value={currentTheme?.ring || ''} />
          </AccordionContent>
        </AccordionItem>

        {/* Sidebar Colors */}
        <AccordionItem className='border! rounded-lg px-4' id='sidebar'>
          <AccordionTrigger className='cursor-pointer py-3 font-medium text-base'>Sidebar Colors</AccordionTrigger>
          <AccordionContent className='grid grid-cols-2'>
            <ColorSwatch
              action={(value) => updateColor('sidebar', value)}
              label='Sidebar'
              value={currentTheme?.sidebar || ''}
            />
            <ColorSwatch
              action={(value) => updateColor('sidebar-foreground', value)}
              label='Sidebar Foreground'
              value={currentTheme?.['sidebar-foreground'] || ''}
            />
            <ColorSwatch
              action={(value) => updateColor('sidebar-primary', value)}
              label='Sidebar Primary'
              value={currentTheme?.['sidebar-primary'] || ''}
            />
            <ColorSwatch
              action={(value) => updateColor('sidebar-primary-foreground', value)}
              label='Sidebar Primary Foreground'
              value={currentTheme?.['sidebar-primary-foreground'] || ''}
            />
            <ColorSwatch
              action={(value) => updateColor('sidebar-accent', value)}
              label='Sidebar Accent'
              value={currentTheme?.['sidebar-accent'] || ''}
            />
            <ColorSwatch
              action={(value) => updateColor('sidebar-accent-foreground', value)}
              label='Sidebar Accent Foreground'
              value={currentTheme?.['sidebar-accent-foreground'] || ''}
            />
            <ColorSwatch
              action={(value) => updateColor('sidebar-border', value)}
              label='Sidebar Border'
              value={currentTheme?.['sidebar-border'] || ''}
            />
            <ColorSwatch
              action={(value) => updateColor('sidebar-ring', value)}
              label='Sidebar Ring'
              value={currentTheme?.['sidebar-ring'] || ''}
            />
          </AccordionContent>
        </AccordionItem>

        {/* Chart Colors */}
        <AccordionItem className='border! rounded-lg px-4' id='chart'>
          <AccordionTrigger className='cursor-pointer py-3 font-medium text-base'>Chart Colors</AccordionTrigger>
          <AccordionContent className='grid grid-cols-2'>
            <ColorSwatch
              action={(value) => updateColor('chart-1', value)}
              label='Chart 1'
              value={currentTheme?.['chart-1'] || ''}
            />
            <ColorSwatch
              action={(value) => updateColor('chart-2', value)}
              label='Chart 2'
              value={currentTheme?.['chart-2'] || ''}
            />
            <ColorSwatch
              action={(value) => updateColor('chart-3', value)}
              label='Chart 3'
              value={currentTheme?.['chart-3'] || ''}
            />
            <ColorSwatch
              action={(value) => updateColor('chart-4', value)}
              label='Chart 4'
              value={currentTheme?.['chart-4'] || ''}
            />
            <ColorSwatch
              action={(value) => updateColor('chart-5', value)}
              label='Chart 5'
              value={currentTheme?.['chart-5'] || ''}
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default ThemeColorPanel
