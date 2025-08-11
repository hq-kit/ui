'use client'

import { IconColorSwatch, IconDeviceDesktop, IconMoon, IconRestore, IconSun } from '@tabler/icons-react'
import { GridList, GridListItem, type Selection } from 'react-aria-components'
import { useTheme } from '@/components/providers'
import { ThemeSnippet } from '@/components/theme-snippet'
import { Button, Select, Sheet } from '@/components/ui'
import { useThemeGenerator } from '@/lib/hooks/use-theme'
import { presets } from '@/lib/themes'
import { cn } from '@/lib/utils'
import { titleCase } from '@/lib/utils/modifiers'

export function ThemeCustomizer() {
    const { setTheme: setMode, resolvedTheme: mode } = useTheme()
    const {
        currentPresetTheme,
        updatePresetTheme,
        currentFontSansFamily,
        updateFontSansFamily,
        currentFontMonoFamily,
        updateFontMonoFamily,
        fontSansFamilies,
        fontMonoFamilies,
        reset
    } = useThemeGenerator()

    return (
        <Sheet>
            <Button className='fixed top-16 right-0 z-50 mt-1 rounded-r-none' icon name='Theme Customizer Toggle'>
                <IconColorSwatch />
            </Button>
            <Sheet.Content className='sm:max-w-md' side='right'>
                <Sheet.Header>
                    <Sheet.Title>Customize</Sheet.Title>
                    <Sheet.Description>Pick a style and color for your components.</Sheet.Description>
                </Sheet.Header>
                <Sheet.Body className='space-y-4'>
                    <div className='flex w-full flex-col gap-4 sm:flex-row'>
                        <Select
                            className='w-full whitespace-nowrap'
                            items={fontSansFamilies.sort((a, b) => a.label.localeCompare(b.label))}
                            label='Font Sans'
                            name='font-sans'
                            onSelectionChange={(key) =>
                                updateFontSansFamily(
                                    fontSansFamilies.find((f) => f.label === (key as string)) ?? fontSansFamilies[2]
                                )
                            }
                            placeholder='Select a font'
                            selectedKey={currentFontSansFamily.label}
                        >
                            {(item) => <Select.Item id={item.label}>{item.label}</Select.Item>}
                        </Select>
                        <Select
                            className='w-full whitespace-nowrap'
                            items={fontMonoFamilies.sort((a, b) => a.label.localeCompare(b.label))}
                            label='Font Mono'
                            name='font-mono'
                            onSelectionChange={(key) =>
                                updateFontMonoFamily(
                                    fontMonoFamilies.find((f) => f.label === (key as string)) ?? fontMonoFamilies[2]
                                )
                            }
                            placeholder='Select a font'
                            selectedKey={currentFontMonoFamily.label}
                        >
                            {(item) => <Select.Item id={item.label}>{item.label}</Select.Item>}
                        </Select>
                    </div>
                    <div className='group flex flex-col gap-1.5'>
                        <div className='font-medium text-muted-foreground text-sm group-has-focus:text-primary'>
                            Preset Theme
                        </div>
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
                            onSelectionChange={(selection: Selection) => {
                                updatePresetTheme([...selection][0] as string)
                                updateFontSansFamily(
                                    fontSansFamilies.find(
                                        (f) => f.value === presets[[...selection][0] as string]?.light?.['font-sans']
                                    ) ?? fontSansFamilies[2]
                                )
                                updateFontMonoFamily(
                                    fontMonoFamilies.find(
                                        (f) => f.value === presets[[...selection][0] as string]?.light?.['font-mono']
                                    ) ?? fontMonoFamilies[2]
                                )
                            }}
                            selectedKeys={[currentPresetTheme]}
                            selectionMode='single'
                        >
                            {(item) => (
                                <GridListItem
                                    className={({ isHovered, isSelected, isFocusVisible }) =>
                                        cn(
                                            'flex cursor-pointer items-center justify-center truncate text-ellipsis whitespace-nowrap rounded-lg px-2 py-1 font-semibold text-xs transition',
                                            { 'ring-2 ring-ring': isFocusVisible || isSelected || isHovered }
                                        )
                                    }
                                    id={item.title}
                                    style={{
                                        backgroundColor: mode === 'dark' ? item?.dark?.primary : item?.light?.primary,
                                        color:
                                            mode === 'dark'
                                                ? item?.dark?.['primary-foreground']
                                                : item?.light?.['primary-foreground']
                                    }}
                                    textValue={titleCase(item.title)}
                                >
                                    {titleCase(item.title)}
                                </GridListItem>
                            )}
                        </GridList>
                    </div>
                    <div className='grid grid-cols-3 gap-0 *:rounded-none *:first:rounded-l-lg *:last:rounded-r-lg'>
                        <Button
                            onPress={() => setMode('light')}
                            size='sm'
                            variant={mode === 'light' ? 'default' : 'outline'}
                        >
                            <IconSun />
                            Light
                        </Button>
                        <Button
                            onPress={() => setMode('system')}
                            size='sm'
                            variant={mode === 'system' ? 'default' : 'outline'}
                        >
                            <IconDeviceDesktop />
                            System
                        </Button>
                        <Button
                            onPress={() => setMode('dark')}
                            size='sm'
                            variant={mode === 'dark' ? 'default' : 'outline'}
                        >
                            <IconMoon />
                            Dark
                        </Button>
                    </div>
                </Sheet.Body>
                <Sheet.Footer className='flex-col justify-center sm:flex-col'>
                    <div className='flex flex-row justify-end gap-2'>
                        <ThemeSnippet />
                        <Button onPress={() => reset()} variant='destructive'>
                            <IconRestore />
                            Reset
                        </Button>
                    </div>
                </Sheet.Footer>
            </Sheet.Content>
        </Sheet>
    )
}
