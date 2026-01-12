'use client'

// Type Imports
import type {ThemeStyleProps} from '@/types/theme'
import {IconCopy, IconMoon, IconRotateClockwise, IconSun} from '@tabler/icons-react'
import {useTheme} from 'next-themes'
import {useCallback, useEffect} from 'react'
import SelectFont from '@/components/theme-customizer/select-font'
import SelectThemePreset from '@/components/theme-customizer/select-theme-preset'
import ThemeVariablesDialog from '@/components/theme-customizer/theme-snippet'
import {Button} from '@/components/ui/button'
import {DEFAULT_FONT_MONO, DEFAULT_FONT_SANS} from '@/config/theme'
import {useSettings} from '@/hooks/use-settings'
import {getAppliedThemeFont, monoFonts, sansSerifFonts} from '@/lib/themes/fonts'
import {presets} from '@/lib/themes/presets'
import ThemeColorPanel from "@/components/theme-customizer/theme-color-panel";
import {Slider, SliderFill, SliderOutput, SliderThumb, SliderTrack} from "@/components/ui/slider";
import {Label} from "@/components/ui/label";

type Mode = 'light' | 'dark'

const ThemeControlPanel = () => {
    const {setTheme} = useTheme()
    const {settings, updateSettings, applyThemePreset, resetToDefault} = useSettings()

    const handleModeChange = (value: string) => {
        if (value) {
            const newMode = value as Mode

            const updatedSettings = {
                ...settings,
                mode: newMode,
                theme: {
                    ...settings.theme,
                    styles: {
                        light: settings.theme.styles?.light || {},
                        dark: settings.theme.styles?.dark || {}
                    }
                }
            }

            // Update settings first
            updateSettings(updatedSettings)

            // Then update next-themes
            setTheme(newMode)
        }
    }

    // Helper function to ensure both themes are updated together
    const updateBothThemes = (updates: Partial<ThemeStyleProps>) => {
        const currentLight = settings.theme.styles?.light || {}
        const currentDark = settings.theme.styles?.dark || {}

        const updatedSettings = {
            ...settings,
            theme: {
                ...settings.theme,
                styles: {
                    light: {...currentLight, ...updates},
                    dark: {...currentDark, ...updates}
                }
            }
        }

        // Update settings and persist to storage
        updateSettings(updatedSettings)
    }

    // Update font change handlers to use the new helper
    const handleFontChange = (fontType: 'font-sans' | 'font-mono', value: string) => {
        updateBothThemes({[fontType]: value})
    }

    // Update radius change handler to use the new helper
    const handleRadiusChange = (value: number) => {
        updateBothThemes({radius: `${value}rem`})
    }

    const handleStyleChange = useCallback(
        (key: keyof ThemeStyleProps, value: string) => {
            if (!settings.mode) return

            updateSettings({
                theme: {
                    ...settings.theme,
                    styles: {
                        ...settings.theme.styles,
                        [settings.mode as Mode]: {
                            ...settings.theme.styles?.[settings.mode as Mode],
                            [key]: value
                        }
                    }
                }
            })
        },
        [settings.theme, settings.mode, updateSettings]
    )

    useEffect(() => {
        if (!settings.theme.styles?.light || !settings.theme.styles?.dark) {
            const updatedSettings = {
                ...settings,
                theme: {
                    ...settings.theme,
                    styles: {
                        light: settings.theme.styles?.light || {},
                        dark: settings.theme.styles?.dark || {}
                    }
                }
            }

            updateSettings(updatedSettings)
        }
    }, [])

    useEffect(() => {
        if (settings.mode) {
            setTheme(settings.mode)
        }
    }, [settings.mode, setTheme])

    const currentStyles = settings.theme.styles?.[settings.mode as Mode] || {}

    return (
        <div className='flex flex-col gap-6'>
            <div className='flex gap-2'>
                <ThemeVariablesDialog
                    activeTheme={settings.theme.preset ?? ''}
                    darkTheme={settings.theme.styles?.dark}
                    lightTheme={settings.theme.styles?.light}
                    trigger={
                        <Button className='flex-1 cursor-pointer gap-2' size='lg' variant='outline'>
                            <IconCopy className='size-4'/>
                            Copy
                        </Button>
                    }
                />
                <Button className='flex-1 cursor-pointer gap-2' onPress={resetToDefault} size='lg' variant='outline'>
                    <IconRotateClockwise className='size-4'/>
                    Reset
                </Button>
            </div>

            <div className='grid grid-cols-2 gap-0 *:rounded-none *:first:rounded-l-lg *:last:rounded-r-lg'>
                <Button
                    onPress={() => handleModeChange('light')}
                    size='sm'
                    variant={settings.mode === 'light' ? 'default' : 'outline'}
                >
                    <IconSun/>
                    Light
                </Button>
                <Button
                    onPress={() => handleModeChange('dark')}
                    size='sm'
                    variant={settings.mode === 'dark' ? 'default' : 'outline'}
                >
                    <IconMoon/>
                    Dark
                </Button>
            </div>

            <div className='grid grid-cols-2 gap-2'>
                <SelectFont
                    value={getAppliedThemeFont(settings.theme.styles?.light, 'font-sans')}
                    defaultValue={DEFAULT_FONT_SANS}
                    fonts={sansSerifFonts}
                    label='Font Sans'
                    onChange={(v) => handleFontChange('font-sans', v!.toString())}
                />
                <SelectFont
                    value={getAppliedThemeFont(settings.theme.styles?.light, 'font-mono')}
                    defaultValue={DEFAULT_FONT_MONO}
                    fonts={monoFonts}
                    label='Font Mono'
                    onChange={(v) => handleFontChange('font-mono', v!.toString())}
                />
            </div>


            <SelectThemePreset
                currentPreset={settings.theme.preset || 'default'}
                onPresetChange={(v) => applyThemePreset(v as string)}
                presets={presets}
            />

            <ThemeColorPanel/>

            <Slider minValue={0}
                    maxValue={2.5}
                    step={0.025}
                    onChange={(v) => handleRadiusChange(v as number)}
                    value={parseFloat(currentStyles.radius?.replace('rem', '') || '0')}>
                <div className='flex items-center justify-between'>
                    <Label>Radius</Label>
                    <span className='flex font-medium text-base/6 sm:text-sm/6 gap-1'>
            <SliderOutput/>
            rem
          </span>
                </div>
                <SliderTrack>
                    <SliderFill/>
                    <SliderThumb/>
                </SliderTrack>
            </Slider>
        </div>
    )
}

export default ThemeControlPanel
