'use client'

import type { Key } from 'react-aria-components'
import type { ThemePreset, ThemeStyleProps } from '@/types/theme'
import { IconArrowsShuffle } from '@tabler/icons-react'
import { useCallback, useMemo } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { defaultThemeState } from '@/config/theme'
import { cn } from '@/lib/utils'

type SelectThemePresetProps = {
  presets: Record<string, ThemePreset>
  currentPreset: string | null
  onPresetChange: (value: Key | null) => void
}

const SelectThemePreset = ({ presets, currentPreset, onPresetChange }: SelectThemePresetProps) => {
  const presetNames = useMemo(() => {
    const allPresets = Object.keys(presets)

    // Separate presets with badges and those without
    const presetsWithBadges = allPresets.filter((name) => presets[name]?.meta?.badge)
    const presetsWithoutBadges = allPresets.filter((name) => !presets[name]?.meta?.badge)

    // Sort each group alphabetically
    presetsWithBadges.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }))
    presetsWithoutBadges.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }))

    // Always keep 'default' as the first item in the list without badges
    return ['default', ...presetsWithBadges, ...presetsWithoutBadges.filter((name) => name !== 'default')]
  }, [presets])

  const value = presetNames?.find((name) => name === currentPreset)

  // Helper function to get theme color
  const getThemeColor = (themeName: string, color: keyof ThemeStyleProps) => {
    // If it's default theme, use the first preset as default
    const theme = themeName === 'default' ? defaultThemeState : presets[themeName]

    return theme?.light?.[color] || theme?.dark?.[color] || '#000000'
  }

  // Helper function to get badge for a theme
  const getThemeBadge = (themeName: string) => {
    if (themeName === 'default') return null

    return presets[themeName]?.meta?.badge || null
  }

  // Randomize the preset
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
      <Select name='Theme Preset' onChange={onPresetChange} placeholder='Choose Theme' value={value}>
        <Label className='sr-only'>Preset</Label>
        <SelectTrigger className='h-12 w-full cursor-pointer'>
          <SelectValue />
        </SelectTrigger>
        <SelectContent isSearchable>
          <SelectGroup>
            {presetNames.map((name) => {
              const badge = getThemeBadge(name)
              return (
                <SelectItem className='flex items-center gap-3' id={name} key={name} textValue={name}>
                  <div className='flex items-center'>
                    <div className='relative size-6.5 rounded border bg-background p-1'>
                      <div className='grid h-full w-full grid-cols-2 grid-rows-2 gap-0.5'>
                        <div className='rounded-[2px]' style={{ backgroundColor: getThemeColor(name, 'primary') }} />
                        <div
                          className='rounded-[2px]'
                          style={{ backgroundColor: getThemeColor(name, 'destructive') }}
                        />
                        <div className='rounded-[2px]' style={{ backgroundColor: getThemeColor(name, 'secondary') }} />
                        <div className='rounded-full' style={{ backgroundColor: getThemeColor(name, 'accent') }} />
                      </div>
                    </div>
                  </div>
                  <div className='flex items-center gap-2'>
                    <span>{name.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase())}</span>
                    {badge && (
                      <Badge
                        className={cn('rounded-full', {
                          'border-destructive bg-destructive/10 text-destructive': badge === 'Trending'
                        })}
                        variant={badge === 'New' ? 'default' : 'outline'}
                      >
                        {badge}
                      </Badge>
                    )}
                  </div>
                </SelectItem>
              )
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}

export default SelectThemePreset
