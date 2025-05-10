import { Button } from '@/components/ui'
import { Indicator } from '@/components/ui/indicator'

const variants = ['primary', 'secondary', 'danger', 'outline'] as const

export default function IndicatorPositionDemo() {
    return (
        <div className='grid grid-cols-4 gap-4'>
            {variants.map((variant) => (
                <Indicator key={variant} variant={variant}>
                    <Button>{variant}</Button>
                </Indicator>
            ))}
            {variants.map((variant) => (
                <Indicator key={variant} variant={variant} isInverse>
                    <Button>{variant}</Button>
                </Indicator>
            ))}
        </div>
    )
}
