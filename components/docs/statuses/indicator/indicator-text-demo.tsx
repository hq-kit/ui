import { Avatar, Button } from '@/components/ui'
import { Indicator } from '@/components/ui/indicator'
import { IconBell, IconShoppingCart } from '@tabler/icons-react'

export default function IndicatorTextDemo() {
    return (
        <div className='flex flex-wrap gap-4'>
            <Indicator text={<IconBell />}>
                <Avatar shape='square' src='https://i.pravatar.cc/77' />
            </Indicator>
            <Indicator text='new'>
                <Avatar shape='square' src='https://i.pravatar.cc/77' />
            </Indicator>
            <Indicator text='99+' shape='square'>
                <Button icon variant='outline'>
                    <IconShoppingCart />
                </Button>
            </Indicator>
        </div>
    )
}
