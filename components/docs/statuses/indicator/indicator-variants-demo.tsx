import { Button } from '@/components/ui'
import { Indicator } from '@/components/ui/indicator'
import { IconBell } from 'hq-icons'
import { Fragment } from 'react'

const sizes = ['xs', 'sm', 'md', 'lg'] as const
const shapes = ['circle', 'square'] as const
const variants = ['primary', 'secondary', 'danger', 'outline'] as const

export default function IndicatorVariantsDemo() {
    return (
        <div className='grid grid-cols-4 gap-4'>
            {sizes.map((size) => (
                <Fragment key={size}>
                    {shapes.map((shape) => (
                        <Fragment key={shape}>
                            {variants.map((variant) => (
                                <Indicator key={variant} size={size} shape={shape} variant={variant}>
                                    <Button variant='outline' icon>
                                        <IconBell />
                                    </Button>
                                </Indicator>
                            ))}
                        </Fragment>
                    ))}
                </Fragment>
            ))}
        </div>
    )
}
