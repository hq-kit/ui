'use client'

import type { Placement } from '@react-types/overlays'
import type { ReactNode } from 'react'
import type { ColorPickerProps as RACColorPickerProps } from 'react-aria-components'
import { Button, ColorPicker as RACColorPicker } from 'react-aria-components'

import { ColorArea } from './color-area'
import { ColorField } from './color-field'
import { ColorSlider } from './color-slider'
import { ColorSwatch } from './color-swatch'
import { Description, Label } from './form'
import { Popover, PopoverContent } from './popover'

export interface ColorPickerProps extends RACColorPickerProps {
    label?: string
    children?: ReactNode
    showArrow?: boolean
    isDisabled?: boolean
    placement?: Placement
    description?: string
    trigger?: ReactNode
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
        <div className='group/field flex flex-col gap-y-2'>
            <RACColorPicker {...props}>
                <Popover>
                    <Button isDisabled={isDisabled} className='flex cursor-pointer items-center gap-2 outline-hidden'>
                        {props.trigger ?? (
                            <>
                                <ColorSwatch className='size-6' />
                                {label && <Label className='ml-2'>{label}</Label>}
                            </>
                        )}
                    </Button>
                    <PopoverContent showArrow={showArrow} placement={placement}>
                        <Popover.Body className='space-y-2 overflow-visible pb-4 sm:py-4'>
                            {children || (
                                <>
                                    <ColorArea
                                        className='w-full'
                                        colorSpace='hsb'
                                        xChannel='saturation'
                                        yChannel='brightness'
                                    />
                                    <ColorSlider showOutput={false} colorSpace='hsb' channel='hue' />
                                    <ColorField aria-label='Hex' />
                                </>
                            )}
                        </Popover.Body>
                    </PopoverContent>
                </Popover>
            </RACColorPicker>
            {description && <Description>{description}</Description>}
        </div>
    )
}

export { ColorPicker }
