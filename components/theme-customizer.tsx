'use client'
import { useTheme } from '@/components/providers'
import { ThemeSnippet } from '@/components/theme-snippet'
import { Button, Select, Sheet } from '@/components/ui'
import { useThemeGenerator } from '@/lib/hooks/use-theme'
import { presets } from '@/lib/themes'
import { cn } from '@/lib/utils'
import { titleCase } from '@/lib/utils/modifiers'
import { IconMonitor, IconMoon, IconRotateCcw, IconSun, IconSwatchBook } from 'hq-icons'
import { GridList, GridListItem, type Selection } from 'react-aria-components'

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
            <Button name='Theme Customizer Toggle' icon className='fixed top-16 right-0 z-50 mt-1 rounded-r-none'>
                <IconSwatchBook />
            </Button>
            <Sheet.Content side='right' className='sm:max-w-md'>
                <Sheet.Header>
                    <Sheet.Title>Customize</Sheet.Title>
                    <Sheet.Description>Pick a style and color for your components.</Sheet.Description>
                </Sheet.Header>
                <Sheet.Body className='space-y-4'>
                    <div className='flex w-full flex-col gap-4 sm:flex-row'>
                        <Select
                            name='font-sans'
                            className='w-full'
                            label='Font Sans'
                            placeholder='Select a font'
                            selectedKey={currentFontSansFamily.label}
                            onSelectionChange={(key) =>
                                updateFontSansFamily(
                                    fontSansFamilies.find((f) => f.label === (key as string)) ?? fontSansFamilies[2]
                                )
                            }
                            items={fontSansFamilies}
                        >
                            {(item) => <Select.Item id={item.label}>{item.label}</Select.Item>}
                        </Select>
                        <Select
                            name='font-mono'
                            className='w-full'
                            label='Font Mono'
                            placeholder='Select a font'
                            selectedKey={currentFontMonoFamily.label}
                            onSelectionChange={(key) =>
                                updateFontMonoFamily(
                                    fontMonoFamilies.find((f) => f.label === (key as string)) ?? fontMonoFamilies[2]
                                )
                            }
                            items={fontMonoFamilies}
                        >
                            {(item) => <Select.Item id={item.label}>{item.label}</Select.Item>}
                        </Select>
                    </div>
                    <div className='group flex flex-col gap-1.5'>
                        <div className='font-medium text-muted-foreground text-sm group-has-focus:text-primary'>
                            Preset Theme
                        </div>
                        <GridList
                            layout='grid'
                            aria-label='Preset Theme'
                            className='grid grid-cols-3 gap-2'
                            disallowEmptySelection
                            selectionMode='single'
                            selectedKeys={[currentPresetTheme]}
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
                            items={Object.entries(presets).map(([key, value]) => ({
                                title: key,
                                light: value.light,
                                dark: value.dark
                            }))}
                        >
                            {(item) => (
                                <GridListItem
                                    style={{
                                        backgroundColor: mode === 'dark' ? item?.dark?.primary : item?.light?.primary,
                                        color:
                                            mode === 'dark'
                                                ? item?.dark?.['primary-foreground']
                                                : item?.light?.['primary-foreground']
                                    }}
                                    id={item.title}
                                    textValue={titleCase(item.title)}
                                    className={({ isHovered, isSelected, isFocusVisible }) =>
                                        cn(
                                            'flex cursor-pointer items-center justify-center truncate text-ellipsis whitespace-nowrap rounded-lg px-2 py-1 font-semibold text-xs transition',
                                            { 'ring-2 ring-ring': isFocusVisible || isSelected || isHovered }
                                        )
                                    }
                                >
                                    {titleCase(item.title)}
                                </GridListItem>
                            )}
                        </GridList>
                    </div>
                    <div className='grid grid-cols-3 gap-0 *:rounded-none *:first:rounded-l-lg *:last:rounded-r-lg'>
                        <Button
                            variant={mode === 'light' ? 'default' : 'outline'}
                            size='sm'
                            onPress={() => setMode('light')}
                        >
                            <IconSun />
                            Light
                        </Button>
                        <Button
                            variant={mode === 'system' ? 'default' : 'outline'}
                            size='sm'
                            onPress={() => setMode('system')}
                        >
                            <IconMonitor />
                            System
                        </Button>
                        <Button
                            variant={mode === 'dark' ? 'default' : 'outline'}
                            size='sm'
                            onPress={() => setMode('dark')}
                        >
                            <IconMoon />
                            Dark
                        </Button>
                    </div>
                </Sheet.Body>
                <Sheet.Footer className='flex-col justify-center sm:flex-col'>
                    <div className='flex flex-row justify-end gap-2'>
                        <ThemeSnippet />
                        <Button variant='destructive' onPress={() => reset()}>
                            <IconRotateCcw />
                            Reset
                        </Button>
                    </div>
                </Sheet.Footer>
            </Sheet.Content>
        </Sheet>
    )
}
