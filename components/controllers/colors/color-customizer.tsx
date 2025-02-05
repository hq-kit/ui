'use client'

import React from 'react'

import { IconBrandTailwind, IconPalette } from 'hq-icons'
import { type ColorFormat } from 'react-aria-components'

import { CustomColor } from '@/components/controllers/colors/color-create-preset'
import { ColorShades } from '@/components/controllers/colors/color-shades'
import { generateColorScale } from '@/components/controllers/colors/colors'
import _radixcolors from '@/components/controllers/colors/radix-colors.json'
import SelectFormat from '@/components/controllers/colors/select-format'
import _tailwindcolors from '@/components/controllers/colors/tailwind-colors.json'
import { Button, Container, Popover, Toggle, Tooltip } from '@/components/ui'

export default function ColorCustomizer() {
    const [selectedFormat, setSelectedFormat] = React.useState<ColorFormat>('hsl')
    const [tailwindVariable, setTailwindVariable] = React.useState(false)

    const tailwindColors = _tailwindcolors.map((item) => ({
        name: item.name,
        children: generateColorScale(item.color)
    }))
    const radixColors = _radixcolors.map((item) => ({
        name: item.name,
        children: generateColorScale(item.color)
    }))

    return (
        <>
            <div className='bg-bg/60 sticky top-0 z-10 w-full rounded-b-lg py-6 backdrop-blur-xl lg:top-14'>
                <Container className='flex flex-row items-center justify-between gap-3'>
                    <Popover>
                        <Button variant='outline'>
                            <IconPalette /> Presets
                        </Button>
                        <Popover.Content placement='right'>In Progress</Popover.Content>
                    </Popover>
                    <div className='flex items-center gap-3'>
                        <Tooltip>
                            <Toggle
                                size='icon'
                                isSelected={tailwindVariable}
                                onChange={() => setTailwindVariable(!tailwindVariable)}
                            >
                                {({ isSelected }) => (
                                    <IconBrandTailwind
                                        className={isSelected ? '!text-sky-500' : '!text-fg'}
                                    />
                                )}
                            </Toggle>
                            <Tooltip.Content>Enable Tailwind Color Variable</Tooltip.Content>
                        </Tooltip>
                        <SelectFormat
                            selectedFormat={selectedFormat}
                            setSelectedFormat={setSelectedFormat}
                        />
                    </div>
                </Container>
            </div>
            <Container className='w-full space-y-2'>
                <CustomColor {...{ selectedFormat, tailwindVariable }} />
                <h2 className='text-muted-fg pt-2 font-semibold'>Tailwind Colors</h2>
                <div className='grid gap-2 sm:grid-cols-2'>
                    {tailwindColors.map((color, i) => (
                        <ColorShades
                            key={i}
                            // @ts-expect-error no-type
                            item={color}
                            selectedFormat={selectedFormat}
                            tailwindVariable={tailwindVariable}
                        />
                    ))}
                </div>

                <h2 className='text-muted-fg pt-2 font-semibold'>Radix Colors</h2>
                <div className='grid gap-2 sm:grid-cols-2'>
                    {radixColors.map((color, i) => (
                        <ColorShades
                            key={i}
                            // @ts-expect-error no-type
                            item={color}
                            selectedFormat={selectedFormat}
                            tailwindVariable={tailwindVariable}
                        />
                    ))}
                </div>
            </Container>
        </>
    )
}
