'use client'

import type { ThemeStyles } from '@/lib/themes/presets'
import { IconArrowsShuffle } from '@tabler/icons-react'
import { useCallback, useMemo } from 'react'
import { GridList, GridListItem, type Key } from 'react-aria-components'
import { Button } from '@/components/ui/button'
import { titleCase } from '@/lib/modifiers'
import { cn } from '@/lib/utils'

type SelectThemePresetProps = {
  presets: Record<string, ThemeStyles>
  currentPreset: string | null
  onPresetChange: (value: Key | null) => void
}

const SelectThemePreset = ({ presets, currentPreset, onPresetChange }: SelectThemePresetProps) => {
  const presetNames = useMemo(() => {
    const allPresets = Object.keys(presets)

    return ['default', ...allPresets.filter((name) => name !== 'default')]
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
