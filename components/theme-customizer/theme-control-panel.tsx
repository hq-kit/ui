'use client'

import { IconCopy, IconMoon, IconRotateClockwise, IconSun } from '@tabler/icons-react'
import { useTheme } from '@/components/providers'
import SelectFont from '@/components/theme-customizer/select-font'
import SelectThemePreset from '@/components/theme-customizer/select-theme-preset'
import ThemeColorPanel from '@/components/theme-customizer/theme-color-panel'
import ThemeVariablesDialog from '@/components/theme-customizer/theme-snippet'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Slider, SliderFill, SliderOutput, SliderThumb, SliderTrack } from '@/components/ui/slider'
import { defaultThemeState } from '@/config/theme'
import { useThemeGenerator } from '@/hooks/use-theme'
import { fontMonoFamilies } from '@/lib/fonts/mono'
import { fontSansFamilies } from '@/lib/fonts/sans'
import { presets } from '@/lib/themes/presets'

const ThemeControlPanel = () => {
  const { resolvedTheme, setTheme } = useTheme()
  const { currentPreset, currentStyles, updatePreset, updateVar, reset } = useThemeGenerator()

  return (
    <div className='flex flex-col gap-6'>
      <div className='flex gap-2'>
        <ThemeVariablesDialog
          activeTheme={currentPreset}
          darkTheme={currentStyles.dark}
          lightTheme={currentStyles.light}
          trigger={
            <Button className='flex-1 cursor-pointer gap-2' size='lg' variant='outline'>
              <IconCopy className='size-4' />
              Copy
            </Button>
          }
        />
        <Button className='flex-1 cursor-pointer gap-2' onPress={reset} size='lg' variant='outline'>
          <IconRotateClockwise className='size-4' />
          Reset
        </Button>
      </div>

      <div className='grid grid-cols-2 gap-0 *:rounded-none *:first:rounded-l-lg *:last:rounded-r-lg'>
        <Button onPress={() => setTheme('light')} size='sm' variant={resolvedTheme === 'light' ? 'default' : 'outline'}>
          <IconSun />
          Light
        </Button>
        <Button onPress={() => setTheme('dark')} size='sm' variant={resolvedTheme === 'dark' ? 'default' : 'outline'}>
          <IconMoon />
          Dark
        </Button>
      </div>

      <div className='grid grid-cols-2 gap-2'>
        <SelectFont
          fonts={fontSansFamilies.sort((a, b) => a.label.localeCompare(b.label))}
          label='Font Sans'
          onChange={(key) => updateVar('font-sans', key as string, 'light')}
          value={currentStyles.light['font-sans']}
        />
        <SelectFont
          fonts={fontMonoFamilies.sort((a, b) => a.label.localeCompare(b.label))}
          label='Font Mono'
          onChange={(key) => updateVar('font-mono', key as string, 'light')}
          value={currentStyles.light['font-mono']}
        />
      </div>

      <SelectThemePreset
        currentPreset={currentPreset}
        onPresetChange={(v) => updatePreset(v as string)}
        presets={presets}
      />

      <Slider
        maxValue={2.5}
        minValue={0}
        onChange={(v) => updateVar('radius', `${v}rem`, 'light')}
        step={0.025}
        value={parseFloat(
          (currentStyles.light.radius ? currentStyles.light.radius! : defaultThemeState.light.radius!).replace(
            'rem',
            ''
          )
        )}
      >
        <div className='flex items-center justify-between'>
          <Label>Radius</Label>
          <span className='flex gap-1 font-medium text-base/6 sm:text-sm/6'>
            <SliderOutput />
            rem
          </span>
        </div>
        <SliderTrack>
          <SliderFill />
          <SliderThumb />
        </SliderTrack>
      </Slider>
      <ThemeColorPanel />
    </div>
  )
}

export default ThemeControlPanel
