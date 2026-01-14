'use client'

import { IconCopy, IconMoon, IconRotateClockwise, IconSun } from '@tabler/icons-react'
import { useTheme } from '@/components/providers'
import SelectFont from '@/components/theme-customizer/select-font'
import SelectThemePreset from '@/components/theme-customizer/select-theme-preset'
import ThemeVariablesDialog from '@/components/theme-customizer/theme-snippet'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Slider, SliderFill, SliderOutput, SliderThumb, SliderTrack } from '@/components/ui/slider'
import { useThemeGenerator } from '@/hooks/use-theme'
import { fontMonoFamilies } from '@/lib/fonts/mono'
import { fontSansFamilies } from '@/lib/fonts/sans'
import { presets } from '@/lib/themes/presets'
import ThemeColorPanel from './theme-color-panel'

const ThemeControlPanel = () => {
  const { resolvedTheme, setTheme } = useTheme()

  const { currentTheme, updatePresetTheme, updateFontSansFamily, updateFontMonoFamily, updateBorderRadius, reset } =
    useThemeGenerator()

  return (
    <div className='flex flex-col gap-6'>
      <div className='flex gap-2'>
        <ThemeVariablesDialog
          activeTheme={currentTheme.preset}
          darkTheme={currentTheme.styles.dark}
          lightTheme={currentTheme.styles.light}
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
          onChange={(key) => updateFontSansFamily(key as string)}
          value={currentTheme.styles.light['font-sans']}
        />
        <SelectFont
          fonts={fontMonoFamilies.sort((a, b) => a.label.localeCompare(b.label))}
          label='Font Mono'
          onChange={(key) => updateFontMonoFamily(key as string)}
          value={currentTheme.styles.light['font-mono']}
        />
      </div>

      <SelectThemePreset
        currentPreset={currentTheme.preset}
        onPresetChange={(v) => updatePresetTheme(v as string, resolvedTheme === 'dark' ? 'dark' : 'light')}
        presets={presets}
      />

      <Slider
        maxValue={2.5}
        minValue={0}
        onChange={(v) => updateBorderRadius(v.toString())}
        step={0.025}
        value={parseFloat(currentTheme.styles.light.radius!.replace('rem', ''))}
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
