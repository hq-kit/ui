import { Button } from '@/components/ui'
import { Indicator } from '@/components/ui/indicator'

export default function IndicatorInverseDemo() {
    return (
        <div className='flex flex-wrap gap-4'>
            <Indicator position='top'>
                <Button>Top</Button>
            </Indicator>
            <Indicator position='bottom'>
                <Button>Bottom</Button>
            </Indicator>
        </div>
    )
}
