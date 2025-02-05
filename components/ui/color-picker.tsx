'use client'

import React from 'react'

import {
    Button,
    ColorPicker as ColorPickerPrimitive,
    Dialog,
    type ColorPickerProps as ColorPickerPrimitiveProps
} from 'react-aria-components'
import { tv } from 'tailwind-variants'

import type { Placement } from '@react-types/overlays'

import { ColorArea } from './color-area'
import { ColorField } from './color-field'
import { ColorSlider } from './color-slider'
import { ColorSwatch } from './color-swatch'
import { Description } from './field'
import { Popover } from './popover'
import { focusButtonStyles } from './utils'

const buttonStyles = tv({
    extend: focusButtonStyles,
    base: 'btn-trigger flex cursor-pointer items-center rounded-lg text-sm data-disabled:cursor-default data-disabled:opacity-50'
})

export interface ColorPickerProps extends ColorPickerPrimitiveProps {
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
        <div className='flex flex-col gap-y-2'>
            <ColorPickerPrimitive {...props}>
                <Popover>
                    <Button isDisabled={isDisabled} className={buttonStyles}>
                        <ColorSwatch className='size-6' />
                        {label && <span className='ml-2'>{label}</span>}
                    </Button>
                    <Popover.Content
                        className='overflow-y-auto px-0 pt-4 pb-3 outline-none **:aria-[expanded=true]:ring-transparent **:data-dialog:gap-2 **:data-focus-within:ring-transparent data-focused:outline-none **:data-focused:ring-transparent **:data-[slot=color-area]:w-full **:data-[slot=color-slider]:w-full sm:max-w-56 sm:min-w-min sm:p-3 sm:**:data-[slot=color-area]:size-56'
                        showArrow={showArrow}
                        placement={placement}
                    >
                        <Dialog className='flex flex-col gap-2 outline-hidden'>
                            {children || (
                                <>
                                    <ColorArea
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
                        </Dialog>
                    </Popover.Content>
                </Popover>
            </ColorPickerPrimitive>
            {description && <Description>{description}</Description>}
        </div>
    )
}

export { ColorPicker }
