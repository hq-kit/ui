'use client'

import React from 'react'

import {
    Button,
    ColorPicker as RACColorPicker,
    type ColorPickerProps as RACColorPickerProps
} from 'react-aria-components'

import type { Placement } from '@react-types/overlays'

import { ColorArea } from './color-area'
import { ColorField } from './color-field'
import { ColorSlider } from './color-slider'
import { ColorSwatch } from './color-swatch'
import { Description, Label } from './field'
import { Popover } from './popover'

export interface ColorPickerProps extends RACColorPickerProps {
    label?: string
    children?: React.ReactNode
    showArrow?: boolean
    isDisabled?: boolean
    placement?: Placement
    description?: string
}

const ColorPicker = ({
    showArrow = false,
    placement = 'bottom start',
    label,
    isDisabled,
    children,
    description,
    ...props
}: ColorPickerProps) => {
    return (
        <div className='flex flex-col gap-y-2 group'>
            <RACColorPicker {...props}>
                <Popover>
                    <Button
                        isDisabled={isDisabled}
                        className='flex items-center gap-2 outline-hidden'
                    >
                        <ColorSwatch className='size-6' />
                        {label && <Label className='ml-2'>{label}</Label>}
                    </Button>
                    <Popover.Content showArrow={showArrow} placement={placement}>
                        <Popover.Body className='space-y-2 pb-4 sm:py-4 overflow-visible'>
                            {children || (
                                <>
                                    <ColorArea
                                        className='w-full'
                                        colorSpace='hsb'
                                        xChannel='saturation'
                                        yChannel='brightness'
                                    />
                                    <ColorSlider
                                        showOutput={false}
                                        colorSpace='hsb'
                                        channel='hue'
                                    />
                                    <ColorField aria-label='Hex' />
                                </>
                            )}
                        </Popover.Body>
                    </Popover.Content>
                </Popover>
            </RACColorPicker>
            {description && <Description>{description}</Description>}
        </div>
    )
}

export { ColorPicker }
