'use client'

import type { Key } from 'react-aria-components'
import { IconArrowsShuffle } from '@tabler/icons-react'
import { useCallback, useMemo } from 'react'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { defaultThemeState } from '@/config/theme'
import { type Preset, presets, type ThemeStyleProps, type ThemeStyles } from '@/lib/themes/presets'

type SelectThemePresetProps = {
  presets: Record<string, ThemeStyles>
  currentPreset: string | null
  onPresetChange: (value: Key | null) => void
}

const getThemeColor = (themeName: Preset, color: keyof ThemeStyleProps) => {
  const theme = themeName === 'default' ? defaultThemeState : presets[themeName]
  return theme?.light?.[color] || theme?.dark?.[color] || '#000000'
}

const SelectThemePreset = ({ presets, currentPreset, onPresetChange }: SelectThemePresetProps) => {
  const presetNames = useMemo(() => {
    const allPresets = Object.keys(presets)

    return ['default', ...allPresets]
  }, [presets])

  const value = presetNames?.find((name) => name === currentPreset)

  const randomize = useCallback(() => {
    const random = Math.floor(Math.random() * presetNames.length)

    onPresetChange(presetNames[random])
  }, [onPresetChange, presetNames])

  return (
    <div className='flex flex-col gap-4'>
      <Button className='cursor-pointer' onPress={randomize} variant='default'>
        <IconArrowsShuffle className='size-4' />
        Random
      </Button>
      <Select aria-label='preset' onChange={onPresetChange} value={value}>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent
          isSearchable
          items={presetNames.map((preset) => ({
            title: preset
          }))}
        >
          {(item) => (
            <SelectItem className='flex items-center gap-3' id={item.title} textValue={item.title}>
              {/* Theme Color Grid Icon */}
              <div className='flex items-center'>
                <div className='relative size-6.5 rounded border bg-background p-1'>
                  <div className='grid h-full w-full grid-cols-2 grid-rows-2 gap-0.5'>
                    <div className='rounded-[2px]' style={{ backgroundColor: getThemeColor(item.title, 'primary') }} />
                    <div
                      className='rounded-[2px]'
                      style={{ backgroundColor: getThemeColor(item.title, 'destructive') }}
                    />
                    <div
                      className='rounded-[2px]'
                      style={{ backgroundColor: getThemeColor(item.title, 'secondary') }}
                    />
                    <div className='rounded-full' style={{ backgroundColor: getThemeColor(item.title, 'accent') }} />
                  </div>
                </div>
              </div>
              <div className='flex items-center gap-2'>
                <span>{item.title.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase())}</span>
              </div>
            </SelectItem>
          )}
        </SelectContent>
      </Select>
    </div>
  )
}

export default SelectThemePreset
