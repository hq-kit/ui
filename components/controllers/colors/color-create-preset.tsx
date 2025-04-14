import React from 'react'

import { type ColorFormat, parseColor } from 'react-aria-components'

import { ColorShades } from '@/components/controllers/colors/color-shades'
import { generateColorScale, getColorName } from '@/components/controllers/colors/colors'
import { ColorField, defaultColor } from '@/components/ui'

export interface CustomColorProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
    selectedFormat?: ColorFormat
    tailwindVariable: boolean
}

export function CustomColor({ selectedFormat, tailwindVariable }: CustomColorProps) {
    const [customColor, setCustomColor] = React.useState(defaultColor.toString('hex'))
    // @ts-expect-error no-type
    const handleChange = (c) => {
        setCustomColor(c.toString('hex'))
    }

    return (
        <>
            <div className='bg-bg overflow-hidden rounded-lg border p-2'>
                <ColorField className='max-w-56' value={parseColor(customColor)} onChange={handleChange} />
            </div>
            <ColorShades
                item={{
                    name: getColorName({ color: customColor }) as string,
                    // @ts-expect-error no-type
                    children: generateColorScale(customColor)
                }}
                selectedFormat={selectedFormat}
                tailwindVariable={tailwindVariable}
            />
        </>
    )
}
