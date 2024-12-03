'use client'

import React from 'react'

import { IconCheck, IconPalette, IconX } from 'hq-icons'
import { useTheme } from 'next-themes'
import { ListBox, ListBoxItem, type ListBoxItemProps } from 'react-aria-components'

import { getColorName } from '@/components/controllers/colors/colors'
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
import { Button, buttonVariants, cn, Container, Popover, Tabs } from '@/components/ui'

export default function ThemeCustomizer() {
    const [lightVars, setLightVars] = React.useState({
        '--background': Presets.hq.light['--background'],
        '--foreground': Presets.hq.light['--foreground'],
        '--primary': Presets.hq.light['--primary'],
        '--primary-foreground': Presets.hq.light['--primary-foreground'],
        '--secondary': Presets.hq.light['--secondary'],
        '--secondary-foreground': Presets.hq.light['--secondary-foreground'],
        '--danger': Presets.hq.light['--danger'],
        '--danger-foreground': Presets.hq.light['--danger-foreground'],
        '--success': Presets.hq.light['--success'],
        '--success-foreground': Presets.hq.light['--success-foreground'],
        '--warning': Presets.hq.light['--warning'],
        '--warning-foreground': Presets.hq.light['--warning-foreground'],
        '--info': Presets.hq.light['--info'],
        '--info-foreground': Presets.hq.light['--info-foreground'],
        '--dark': Presets.hq.light['--dark'],
        '--dark-foreground': Presets.hq.light['--dark-foreground'],
        '--muted': Presets.hq.light['--muted'],
        '--muted-foreground': Presets.hq.light['--muted-foreground']
    })
    const [darkVars, setDarkVars] = React.useState({
        '--background': Presets.hq.dark['--background'],
        '--foreground': Presets.hq.dark['--foreground'],
        '--primary': Presets.hq.dark['--primary'],
        '--primary-foreground': Presets.hq.dark['--primary-foreground'],
        '--secondary': Presets.hq.dark['--secondary'],
        '--secondary-foreground': Presets.hq.dark['--secondary-foreground'],
        '--danger': Presets.hq.dark['--danger'],
        '--danger-foreground': Presets.hq.dark['--danger-foreground'],
        '--success': Presets.hq.dark['--success'],
        '--success-foreground': Presets.hq.dark['--success-foreground'],
        '--warning': Presets.hq.dark['--warning'],
        '--warning-foreground': Presets.hq.dark['--warning-foreground'],
        '--info': Presets.hq.dark['--info'],
        '--info-foreground': Presets.hq.dark['--info-foreground'],
        '--dark': Presets.hq.dark['--dark'],
        '--dark-foreground': Presets.hq.dark['--dark-foreground'],
        '--muted': Presets.hq.dark['--muted'],
        '--muted-foreground': Presets.hq.dark['--muted-foreground']
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
        return `@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
    :root {
        ${Object.keys(lightVars)
            .map(
                (key) =>
                    `${key}: ${lightVars[key as keyof typeof lightVars]}; /* ${getColorName({ color: lightVars[key as keyof typeof lightVars], type: 'hsl' })} */`
            )
            .join('\n        ')}
        --radius: ${radius}rem;
    }
    .dark {
        ${Object.keys(darkVars)
            .map(
                (key) =>
                    `${key}: ${darkVars[key as keyof typeof darkVars]}; /* ${getColorName({ color: darkVars[key as keyof typeof darkVars], type: 'hsl' })} */`
            )
            .join('\n        ')}
    }
}


@layer base {
    html {
        @apply scroll-smooth;
    }

    * {
        @apply border-muted;
        font-feature-settings: 'cv11', 'ss01';
        font-variation-settings: 'opsz' 850;
        text-rendering: optimizeLegibility;
    }

    body {
        @apply bg-background text-foreground;
    }

    *::-webkit-scrollbar {
        @apply size-1.5 rounded-lg;
    }

    *::-webkit-scrollbar-track {
        @apply rounded-lg bg-transparent;
    }

    *::-webkit-scrollbar-thumb {
        @apply rounded-lg border border-transparent bg-muted;
    }
}

@layer components {
    .recharts-rectangle.recharts-tooltip-cursor {
        @apply fill-foreground/10;
    }

    .overflow-auto,
    .overflow-x-auto,
    .overflow-y-auto,
    .overflow-scroll,
    .overflow-x-scroll,
    .overflow-y-scroll {
        @apply [&::-webkit-scrollbar-thumb]:rounded-lg [&::-webkit-scrollbar-thumb]:bg-inherit;
    }
    .overflow-auto:hover,
    .overflow-x-auto:hover,
    .overflow-y-auto:hover,
    .overflow-scroll:hover,
    .overflow-x-scroll:hover,
    .overflow-y-scroll:hover {
        @apply [&::-webkit-scrollbar-thumb]:bg-muted;
    }

    .no-scrollbar {
        -ms-overflow-style: none; /* Internet Explorer and Edge */
        scrollbar-width: none; /* Firefox */
    }

    .no-scrollbar::-webkit-scrollbar {
        display: none; /* Safari and Chrome */
    }

    pre::-webkit-scrollbar {
        display: none;
    }
}`
    }

    return (
        <div>
            <Container className='w-full rounded-b-lg bg-background/60 backdrop-blur-xl sticky top-0 lg:top-14 py-4 z-10'>
                <div className='flex flex-row gap-3 justify-between items-center'>
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
                                    className='absolute right-4 top-2 sm:hidden'
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
                                            className='grid grid-cols-2 gap-2 sm:grid-cols-3 mt-2'
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
                                            className='grid grid-cols-2 gap-2 sm:grid-cols-3 mt-2'
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
                                            className='grid grid-cols-2 gap-2 sm:grid-cols-3 mt-2'
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
            <div
                className='bg-background mb-6 border-secondary-foreground/10 text-foreground'
                id='theme-container'
            >
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
                buttonVariants({
                    size: 'sm',
                    variant: 'outline',
                    className: 'justify-start text-xs cursor-pointer [&_svg]:size-3'
                })
            )}
        >
            {({ isSelected }) => (
                <>
                    <span
                        style={{ backgroundColor: color }}
                        className={cn(
                            'mr-1 text-white flex size-4 shrink-0 border -translate-x-1 items-center justify-center rounded'
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
