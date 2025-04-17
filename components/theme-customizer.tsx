'use client'

import { IconMoon, IconRotateCcw, IconSun, IconSwatchBook } from 'hq-icons'
import { GridList, GridListItem, type Selection } from 'react-aria-components'

import { useTheme } from '@/components/providers'
import { Button, Label, Select, Sheet, Slider, Tabs, isBrightColor } from '@/components/ui'
import { useThemeGenerator } from '@/lib/hooks/use-theme'
import { cn } from '@/lib/utils'

import { ColorPreview, ThemeSnippet } from './theme-snippet'

export function ThemeCustomizer() {
    const { setTheme: setMode, resolvedTheme: mode } = useTheme()
    const {
        currentGrayColor,
        updateGrayColor,
        currentPresetColor,
        updatePresetColor,
        currentFontSansFamily,
        updateFontSansFamily,
        currentFontMonoFamily,
        updateFontMonoFamily,
        currentBorderRadius,
        updateBorderRadius,
        fontSansFamilies,
        fontMonoFamilies,
        grayColors,
        presetColors,
        reset
    } = useThemeGenerator()

    const presets = [
        { label: 'Brand', value: 'brand-' },
        { label: 'Tailwind', value: 'tw-' },
        { label: 'Radix', value: 'rd-' }
    ]

    return (
        <Sheet>
            <Button icon className='fixed top-16 right-0 z-50 mt-1 rounded-r-none'>
                <IconSwatchBook />
            </Button>
            <Sheet.Content isBlurred={false} side='right' className='sm:max-w-md'>
                <Sheet.Header>
                    <Sheet.Title>Customize</Sheet.Title>
                    <Sheet.Description>Pick a style and color for your components.</Sheet.Description>
                </Sheet.Header>
                <Sheet.Body className='space-y-4'>
                    <div className='flex w-full flex-col gap-4 sm:flex-row'>
                        <Select
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
                        <Label>Gray Color</Label>
                        <GridList
                            layout='grid'
                            aria-label='Gray Colors'
                            className='grid grid-cols-3 gap-2'
                            disallowEmptySelection
                            selectionMode='single'
                            selectedKeys={[currentGrayColor]}
                            onSelectionChange={(key) => {
                                // @ts-expect-error no-type
                                updateGrayColor(key.currentKey)
                            }}
                            items={grayColors}
                        >
                            {(item) => (
                                <GridListItem
                                    style={{
                                        backgroundColor: item.color,
                                        color: '#fff'
                                    }}
                                    id={item.name}
                                    textValue={item.label}
                                    className={({ isHovered, isSelected, isFocusVisible }) =>
                                        cn(
                                            'flex cursor-pointer items-center justify-center rounded-lg px-2 py-1 font-semibold text-xs transition',
                                            {
                                                'border ring-2 ring-bg/80 ring-inset':
                                                    isFocusVisible || isSelected || isHovered
                                            }
                                        )
                                    }
                                >
                                    {item.label}
                                </GridListItem>
                            )}
                        </GridList>
                    </div>
                    <div className='group flex flex-col gap-1.5'>
                        <Label>Accent Color</Label>
                        <Tabs>
                            <Tabs.List items={presets}>
                                {(item) => <Tabs.Label id={item.value}>{item.label}</Tabs.Label>}
                            </Tabs.List>
                            {presets.map((preset) => (
                                <Tabs.Content key={preset.value} id={preset.value}>
                                    <GridList
                                        layout='grid'
                                        aria-label='Accent Colors'
                                        className='grid grid-cols-3 gap-2'
                                        disallowEmptySelection
                                        selectionMode='single'
                                        selectedKeys={[currentPresetColor]}
                                        onSelectionChange={(selection: Selection) => {
                                            updatePresetColor([...selection][0] as string)
                                            updateBorderRadius(
                                                presetColors.find((c) => c.name === [...selection][0])?.radius ??
                                                    currentBorderRadius
                                            )
                                        }}
                                        items={presetColors.filter((c) => c.name.startsWith(preset.value))}
                                    >
                                        {(item) => (
                                            <GridListItem
                                                style={{
                                                    backgroundColor: item.color,
                                                    color: isBrightColor(item.color) ? '#000' : '#fff'
                                                }}
                                                id={item.name}
                                                textValue={item.label}
                                                className={({ isHovered, isSelected, isFocusVisible }) =>
                                                    cn(
                                                        'flex cursor-pointer items-center justify-center rounded-lg px-2 py-1 font-semibold text-xs transition',
                                                        {
                                                            'ring-2 ring-fg/80 ring-inset':
                                                                isFocusVisible || isSelected || isHovered
                                                        }
                                                    )
                                                }
                                            >
                                                {item.label}
                                            </GridListItem>
                                        )}
                                    </GridList>
                                </Tabs.Content>
                            ))}
                        </Tabs>
                    </div>
                    <Slider
                        label='Border Radius'
                        className='w-full'
                        defaultValue={currentBorderRadius}
                        minValue={0}
                        maxValue={1}
                        step={0.05}
                        value={currentBorderRadius}
                        onChange={(v) => updateBorderRadius(Number(v))}
                    />
                    <div className='grid grid-cols-2 gap-0 *:rounded-none *:first:rounded-l-lg *:last:rounded-r-lg'>
                        <Button
                            variant={mode === 'light' ? 'primary' : 'outline'}
                            size='sm'
                            onPress={() => setMode('light')}
                        >
                            <IconSun />
                            Light
                        </Button>
                        <Button
                            variant={mode === 'dark' ? 'primary' : 'outline'}
                            size='sm'
                            onPress={() => setMode('dark')}
                        >
                            <IconMoon />
                            Dark
                        </Button>
                    </div>
                </Sheet.Body>
                <Sheet.Footer className='flex-col justify-center sm:flex-col'>
                    <ColorPreview />
                    <div className='flex flex-row justify-end gap-2'>
                        <ThemeSnippet />
                        <Button variant='danger' onPress={() => reset()}>
                            <IconRotateCcw />
                            Reset
                        </Button>
                    </div>
                </Sheet.Footer>
            </Sheet.Content>
        </Sheet>
    )
}
