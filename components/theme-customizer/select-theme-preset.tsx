'use client'

import type { ThemePreset, ThemeStyleProps } from '@/types/theme'
import { IconArrowsShuffle } from '@tabler/icons-react'
import { useCallback, useMemo } from 'react'
import { GridList, GridListItem, type Key } from 'react-aria-components'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { defaultThemeState } from '@/config/theme'
import { titleCase } from '@/lib/modifiers'
import { cn } from '@/lib/utils'

type SelectThemePresetProps = {
  presets: Record<string, ThemePreset>
  currentPreset: string | null
  onPresetChange: (value: Key | null) => void
}

const SelectThemePreset = ({ presets, currentPreset, onPresetChange }: SelectThemePresetProps) => {
  const presetNames = useMemo(() => {
    const allPresets = Object.keys(presets)

    const presetsWithBadges = allPresets.filter((name) => presets[name]?.meta?.badge)
    const presetsWithoutBadges = allPresets.filter((name) => !presets[name]?.meta?.badge)

    presetsWithBadges.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }))
    presetsWithoutBadges.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }))

    return ['default', ...presetsWithBadges, ...presetsWithoutBadges.filter((name) => name !== 'default')]
  }, [presets])

  const value = presetNames?.find((name) => name === currentPreset)

  const getThemeColor = (themeName: string, color: keyof ThemeStyleProps) => {
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
        <SelectTrigger className='w-full cursor-pointer'>
          <SelectValue />
        </SelectTrigger>
        <SelectContent isSearchable>
          <SelectGroup>
            {presetNames.map((name) => {
              const badge = getThemeBadge(name)
              return (
                <SelectItem className='flex items-center gap-3' id={name} key={name} textValue={name}>
                  <div className='flex items-center'>
                    <div className='relative size-5 bg-background'>
                      <div className='grid size-full grid-cols-2 grid-rows-2'>
                        <div style={{ backgroundColor: getThemeColor(name, 'primary') }} />
                        <div style={{ backgroundColor: getThemeColor(name, 'destructive') }} />
                        <div style={{ backgroundColor: getThemeColor(name, 'secondary') }} />
                        <div style={{ backgroundColor: getThemeColor(name, 'accent') }} />
                      </div>
                    </div>
                  </div>
                  <div className='flex items-center gap-2'>
                    <span style={{ fontFamily: getThemeColor(name, 'font-sans') }}>
                      {name.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase())}
                    </span>
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
      <GridList
        aria-label='Preset Theme'
        className='grid grid-cols-3 gap-2'
        disallowEmptySelection
        items={Object.entries(presets)
          .map(([key, value]) => ({
            title: key,
            light: value.light,
            dark: value.dark
          }))
          .sort((a, b) => a.title.localeCompare(b.title))}
        layout='grid'
        onSelectionChange={(v) => onPresetChange([...v][0] as Key)}
        selectedKeys={[value!]}
        selectionMode='single'
      >
        {(item) => (
          <GridListItem
            className={({ isHovered, isSelected, isFocusVisible }) =>
              cn(
                'flex cursor-pointer items-center justify-center truncate text-ellipsis whitespace-nowrap rounded-lg px-2 py-1 font-semibold text-[10px] transition',
                { 'ring-2 ring-ring': isFocusVisible || isSelected || isHovered }
              )
            }
            id={item.title}
            style={{
              backgroundColor: item?.light?.primary,
              color: item?.light?.['primary-foreground'],
              fontFamily: item?.light?.['font-sans']
            }}
          >
            {titleCase(item.title)}
          </GridListItem>
        )}
      </GridList>
    </div>
  )
}

export default SelectThemePreset
