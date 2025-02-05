'use client'

import React from 'react'

import { IconCheck, IconPalette, IconX } from 'hq-icons'
import { useTheme } from 'next-themes'
import { ListBox, ListBoxItem, type ListBoxItemProps } from 'react-aria-components'

import '@/components/controllers/themes/color.css'
import { applyTheme } from '@/components/controllers/themes/controller'
import ThemeContainer from '@/components/controllers/themes/theme-container'
import {
    BrandColors,
    Presets,
    RadixColors,
    TailwindColors
} from '@/components/controllers/themes/theme-presets'
import ThemeSnippet from '@/components/controllers/themes/theme-snippet'
import { Button, buttonStyles, cn, Container, Popover, Tabs } from '@/components/ui'

export default function ThemeCustomizer() {
    const [lightVars, setLightVars] = React.useState({
        '--bg': Presets.hq.light['--bg'],
        '--fg': Presets.hq.light['--fg'],
        '--primary': Presets.hq.light['--primary'],
        '--primary-fg': Presets.hq.light['--primary-fg'],
        '--secondary': Presets.hq.light['--secondary'],
        '--secondary-fg': Presets.hq.light['--secondary-fg'],
        '--danger': Presets.hq.light['--danger'],
        '--danger-fg': Presets.hq.light['--danger-fg'],
        '--success': Presets.hq.light['--success'],
        '--success-fg': Presets.hq.light['--success-fg'],
        '--warning': Presets.hq.light['--warning'],
        '--warning-fg': Presets.hq.light['--warning-fg'],
        '--muted': Presets.hq.light['--muted'],
        '--muted-fg': Presets.hq.light['--muted-fg']
    })
    const [darkVars, setDarkVars] = React.useState({
        '--bg': Presets.hq.dark['--bg'],
        '--fg': Presets.hq.dark['--fg'],
        '--primary': Presets.hq.dark['--primary'],
        '--primary-fg': Presets.hq.dark['--primary-fg'],
        '--secondary': Presets.hq.dark['--secondary'],
        '--secondary-fg': Presets.hq.dark['--secondary-fg'],
        '--danger': Presets.hq.dark['--danger'],
        '--danger-fg': Presets.hq.dark['--danger-fg'],
        '--success': Presets.hq.dark['--success'],
        '--success-fg': Presets.hq.dark['--success-fg'],
        '--warning': Presets.hq.dark['--warning'],
        '--warning-fg': Presets.hq.dark['--warning-fg'],
        '--muted': Presets.hq.dark['--muted'],
        '--muted-fg': Presets.hq.dark['--muted-fg']
    })
    const [radius, setRadius] = React.useState<number | undefined>(Presets.hq.radius)

    const [preset, setPreset] = React.useState<string>('hq')

    const { resolvedTheme } = useTheme()

    React.useEffect(() => {
        setLightVars({ ...lightVars, ...Presets[preset as keyof typeof Presets].light })
        setDarkVars({ ...darkVars, ...Presets[preset as keyof typeof Presets].dark })
        setRadius(Presets[preset as keyof typeof Presets].radius ?? Presets.hq.radius)
        applyTheme(
            document.querySelectorAll('#theme-container') as unknown as HTMLHtmlElement[],
            preset,
            resolvedTheme as 'dark' | 'light'
        )
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [preset, resolvedTheme])

    function getStyleCss() {
        return `@layer base {
    :root {
        ${Object.keys(lightVars)
            .map((key) => `${key}: ${lightVars[key as keyof typeof lightVars]};`)
            .join('\n        ')}
        --radius-lg: ${radius}rem;
        --radius-xs: calc(var(--radius-lg) * 0.5);
        --radius-sm: calc(var(--radius-lg) * 0.75);
        --radius-md: calc(var(--radius-lg) * 0.9);
        --radius-xl: calc(var(--radius-lg) * 1.25);
        --radius-2xl: calc(var(--radius-lg) * 1.5);
        --radius-3xl: calc(var(--radius-lg) * 2);
        --radius-4xl: calc(var(--radius-lg) * 3);
    }
    .dark {
        ${Object.keys(darkVars)
            .map((key) => `${key}: ${darkVars[key as keyof typeof darkVars]};`)
            .join('\n        ')}
    }

}`
    }

    return (
        <div>
            <Container className='bg-bg/60 sticky top-0 z-10 w-full rounded-b-lg py-4 backdrop-blur-xl lg:top-14'>
                <div className='flex flex-row items-center justify-between gap-3'>
                    <Popover>
                        <Button variant='outline'>
                            <IconPalette />
                            Presets
                        </Button>
                        <Popover.Content placement='right'>
                            <Popover.Header>
                                <Popover.Title>Presets</Popover.Title>
                                <Popover.Description>Select a preset</Popover.Description>
                                <Popover.Close
                                    variant='ghost'
                                    size='icon'
                                    className='absolute top-2 right-4 sm:hidden'
                                >
                                    <IconX />
                                </Popover.Close>
                            </Popover.Header>
                            <Popover.Body className='mt-2 space-y-2'>
                                <Tabs>
                                    <Tabs.List>
                                        <Tabs.Label id='tailwind'>Tailwind</Tabs.Label>
                                        <Tabs.Label id='radix'>Radix</Tabs.Label>
                                        <Tabs.Label id='brands'>Brands</Tabs.Label>
                                    </Tabs.List>
                                    <Tabs.Content id='tailwind'>
                                        <ListBox
                                            aria-label='Tailwind Colors'
                                            className='mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3'
                                            disallowEmptySelection
                                            selectionMode='single'
                                            selectedKeys={[preset]}
                                            // @ts-expect-error unknown-type
                                            onSelectionChange={(v) => setPreset(v.currentKey)}
                                            items={TailwindColors}
                                        >
                                            {(item) => (
                                                <ColorPresetPicker
                                                    id={item.name}
                                                    key={item.name}
                                                    color={item.color}
                                                    textValue={item.label}
                                                />
                                            )}
                                        </ListBox>
                                    </Tabs.Content>
                                    <Tabs.Content id='radix'>
                                        <ListBox
                                            aria-label='Radix Colors'
                                            className='mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3'
                                            disallowEmptySelection
                                            selectionMode='single'
                                            selectedKeys={[preset]}
                                            // @ts-expect-error unknown-type
                                            onSelectionChange={(v) => setPreset(v.currentKey)}
                                            items={RadixColors}
                                        >
                                            {(item) => (
                                                <ColorPresetPicker
                                                    id={item.name}
                                                    key={item.name}
                                                    color={item.color}
                                                    textValue={item.label}
                                                />
                                            )}
                                        </ListBox>
                                    </Tabs.Content>
                                    <Tabs.Content id='brands'>
                                        <ListBox
                                            aria-label='Brand Colors'
                                            className='mt-2 grid grid-cols-2 gap-2 sm:grid-cols-3'
                                            disallowEmptySelection
                                            selectionMode='single'
                                            selectedKeys={[preset]}
                                            // @ts-expect-error unknown-type
                                            onSelectionChange={(v) => setPreset(v.currentKey)}
                                            items={BrandColors}
                                        >
                                            {(item) => (
                                                <ColorPresetPicker
                                                    id={item.name}
                                                    key={item.name}
                                                    color={item.color}
                                                    textValue={item.label}
                                                />
                                            )}
                                        </ListBox>
                                    </Tabs.Content>
                                </Tabs>
                            </Popover.Body>
                        </Popover.Content>
                    </Popover>
                    <ThemeSnippet code={getStyleCss()} />
                </div>
            </Container>
            <div className='bg-bg text-fg mb-6' id='theme-container'>
                <ThemeContainer />
            </div>
        </div>
    )
}

interface ColorPresetPickerProps extends ListBoxItemProps {
    color: string
}

const ColorPresetPicker = ({ color, textValue, ...props }: ColorPresetPickerProps) => {
    return (
        <ListBoxItem
            {...props}
            textValue={textValue}
            className={cn(
                buttonStyles({
                    size: 'sm',
                    variant: 'outline',
                    className: 'cursor-pointer justify-start text-xs [&_svg]:size-3'
                })
            )}
        >
            {({ isSelected }) => (
                <>
                    <span
                        style={{ backgroundColor: color }}
                        className={cn(
                            'mr-1 flex size-4 shrink-0 -translate-x-1 items-center justify-center rounded border text-white'
                        )}
                    >
                        {isSelected && <IconCheck />}
                    </span>
                    {textValue}
                </>
            )}
        </ListBoxItem>
    )
}
