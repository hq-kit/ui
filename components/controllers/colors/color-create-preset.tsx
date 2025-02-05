import React from 'react'

import chroma from 'chroma-js'
import { type ColorFormat, ListBox, parseColor } from 'react-aria-components'

import { ColorItem } from '@/components/controllers/colors/color-item'
import { ColorShades } from '@/components/controllers/colors/color-shades'
import {
    formatColorForTailwind,
    generateColorScale,
    getColorName,
    getfgColor
} from '@/components/controllers/colors/colors'
import ThemeSnippet from '@/components/controllers/themes/theme-snippet'
import { ColorField, defaultColor } from '@/components/ui'

export interface CustomColorProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
    selectedFormat?: ColorFormat
    tailwindVariable: boolean
}

export function CustomColor({ selectedFormat, tailwindVariable }: CustomColorProps) {
    const [customColors, setCustomColors] = React.useState({
        primary: defaultColor.toString('hex'),
        'primary-fg': getfgColor(defaultColor.toString('hex')),
        secondary: chroma(defaultColor.toString('hex')).luminance(0.4).hex(),
        'secondary-fg': chroma(defaultColor.toString('hex')).darken(2.5).hex(),
        danger: chroma(defaultColor.toString('hex')).set('lch.h', '+90').hex(),
        'danger-fg': getfgColor(defaultColor.toString('hex')),
        success: chroma(defaultColor.toString('hex')).set('lch.h', '-135').hex(),
        'success-fg': getfgColor(defaultColor.toString('hex')),
        info: chroma(defaultColor.toString('hex')).set('lch.h', '+45').hex(),
        'info-fg': getfgColor(defaultColor.toString('hex')),
        warning: chroma(defaultColor.toString('hex')).set('lch.h', '-225').hex(),
        'warning-fg': getfgColor(defaultColor.toString('hex'))
    })
    const [darkCustomColors, setDarkCustomColors] = React.useState({
        primary: chroma(defaultColor.toString('hex')).brighten(0.5).hex(),
        'primary-fg': getfgColor(defaultColor.toString('hex')),
        secondary: chroma(defaultColor.toString('hex')).luminance(0.4).brighten(0.5).hex(),
        'secondary-fg': chroma(defaultColor.toString('hex')).darken(2.5).hex(),
        danger: chroma(defaultColor.toString('hex')).set('lch.h', '+90').brighten(0.5).hex(),
        'danger-fg': getfgColor(defaultColor.toString('hex')),
        success: chroma(defaultColor.toString('hex')).set('lch.h', '-135').brighten(0.5).hex(),
        'success-fg': getfgColor(defaultColor.toString('hex')),
        info: chroma(defaultColor.toString('hex')).set('lch.h', '+45').brighten(0.5).hex(),
        'info-fg': getfgColor(defaultColor.toString('hex')),
        warning: chroma(defaultColor.toString('hex')).set('lch.h', '-225').brighten(0.5).hex(),
        'warning-fg': getfgColor(defaultColor.toString('hex'))
    })
    // @ts-expect-error no-type
    const handleChange = (c) => {
        setCustomColors({
            primary: c.toString('hex'),
            'primary-fg': getfgColor(c.toString('hex')),
            secondary: chroma(c.toString('hex')).luminance(0.4).hex(),
            'secondary-fg': chroma(c.toString('hex')).darken(2.5).hex(),
            danger: chroma(c.toString('hex')).set('lch.h', '+90').hex(),
            'danger-fg': getfgColor(c.toString('hex')),
            success: chroma(c.toString('hex')).set('lch.h', '-135').hex(),
            'success-fg': getfgColor(c.toString('hex')),
            info: chroma(c.toString('hex')).set('lch.h', '+45').hex(),
            'info-fg': getfgColor(c.toString('hex')),
            warning: chroma(c.toString('hex')).set('lch.h', '-225').hex(),
            'warning-fg': getfgColor(c.toString('hex'))
        })
        setDarkCustomColors({
            primary: chroma(c.toString('hex')).brighten(0.5).hex(),
            'primary-fg': getfgColor(c.toString('hex')),
            secondary: chroma(c.toString('hex')).luminance(0.4).brighten(0.5).hex(),
            'secondary-fg': chroma(c.toString('hex')).darken(2.5).hex(),
            danger: chroma(c.toString('hex')).set('lch.h', '+90').brighten(0.5).hex(),
            'danger-fg': getfgColor(c.toString('hex')),
            success: chroma(c.toString('hex')).set('lch.h', '-135').brighten(0.5).hex(),
            'success-fg': getfgColor(c.toString('hex')),
            info: chroma(c.toString('hex')).set('lch.h', '+45').brighten(0.5).hex(),
            'info-fg': getfgColor(c.toString('hex')),
            warning: chroma(c.toString('hex')).set('lch.h', '-225').brighten(0.5).hex(),
            'warning-fg': getfgColor(c.toString('hex'))
        })
    }

    function getStyleCss() {
        return `@layer base {
    :root {
        /* Your Background and fg */
        ${Object.keys(customColors)
            .map(
                (key) =>
                    `--${key}: ${formatColorForTailwind(parseColor(customColors[key as keyof typeof customColors]).toString('hsl'))}; /* ${getColorName({ color: customColors[key as keyof typeof customColors], type: 'hex' })} */`
            )
            .join('\n\t\t')}
        /* Rest of your root colors */
    }
    .dark {
        /* Your Background and fg */
        ${Object.keys(darkCustomColors)
            .map(
                (key) =>
                    `--${key}: ${formatColorForTailwind(parseColor(darkCustomColors[key as keyof typeof darkCustomColors]).toString('hsl'))}; /* ${getColorName({ color: darkCustomColors[key as keyof typeof darkCustomColors], type: 'hex' })} */`
            )
            .join('\n\t\t')}
        /* Rest of your root colors */
    }
}
`
    }

    return (
        <>
            <div className='bg-bg overflow-hidden rounded-lg border p-2'>
                <div className='mb-2 flex items-center justify-between'>
                    <ColorField
                        className='max-w-56'
                        value={parseColor(customColors.primary)}
                        onChange={handleChange}
                    />
                    <ThemeSnippet code={getStyleCss()} />
                </div>

                <ListBox
                    layout='grid'
                    orientation='horizontal'
                    className='bg-bg dark:bg-fg grid grid-cols-6 gap-1 rounded-lg border p-4'
                    aria-label='Custom Colors'
                >
                    {Object.entries(customColors).map(([key, value]) =>
                        key.includes('fg') ? null : (
                            <ColorItem
                                key={key}
                                tailwindVariable={tailwindVariable}
                                {...{
                                    textColor:
                                        customColors[`${key}-fg` as keyof typeof customColors],
                                    selectedFormat: selectedFormat ?? 'hsl',
                                    item: {
                                        shade: key,
                                        color: value
                                    },
                                    name: key
                                }}
                            />
                        )
                    )}
                </ListBox>
                <ListBox
                    layout='grid'
                    orientation='horizontal'
                    className='dark bg-bg grid grid-cols-6 gap-1 rounded-lg border p-4'
                    aria-label='Custom Colors Dark'
                >
                    {Object.entries(darkCustomColors).map(([key, value]) =>
                        key.includes('fg') ? null : (
                            <ColorItem
                                key={key}
                                tailwindVariable={tailwindVariable}
                                {...{
                                    textColor:
                                        darkCustomColors[
                                            `${key}-fg` as keyof typeof darkCustomColors
                                        ],
                                    selectedFormat: selectedFormat ?? 'hsl',
                                    item: {
                                        shade: key,
                                        color: value
                                    },
                                    name: key
                                }}
                            />
                        )
                    )}
                </ListBox>
            </div>
            <ColorShades
                item={{
                    name: getColorName({ color: customColors.primary }) as string,
                    // @ts-expect-error no-type
                    children: generateColorScale(customColors.primary)
                }}
                selectedFormat={selectedFormat}
                tailwindVariable={tailwindVariable}
            />
        </>
    )
}
