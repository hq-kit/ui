import { IconBell } from '@tabler/icons-react'
import { Fragment } from 'react'
import { Button } from '@/components/ui'
import { Indicator } from '@/components/ui/indicator'

const sizes = ['xs', 'sm', 'md', 'lg'] as const
const shapes = ['circle', 'square'] as const
const variants = ['primary', 'secondary', 'destructive', 'outline'] as const

export default function IndicatorVariantsDemo() {
    return (
        <div className='grid grid-cols-4 gap-4'>
            {sizes.map((size) => (
                <Fragment key={size}>
                    {shapes.map((shape) => (
                        <Fragment key={shape}>
                            {variants.map((variant) => (
                                <Indicator key={variant} shape={shape} size={size} variant={variant}>
                                    <Button icon variant='outline'>
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
