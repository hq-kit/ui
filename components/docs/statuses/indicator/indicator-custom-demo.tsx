import { Avatar, Button } from '@/components/ui'
import { Indicator } from '@/components/ui/indicator'
import { IconCheck, IconInfo } from 'hq-icons'

export default function IndicatorCustomDemo() {
    return (
        <div className='flex flex-wrap gap-6'>
            <Indicator className='size-9 bg-amber-600 *:[svg]:size-6' text={<IconInfo />}>
                <Button variant='outline'>Warning</Button>
            </Indicator>
            <Indicator className='bg-green-700' text={<IconCheck />}>
                <Button variant='outline'>Success</Button>
            </Indicator>
            <Indicator className='animate-pulse'>
                <Avatar shape='square' src='https://i.pravatar.cc/77' />
            </Indicator>
        </div>
    )
}
