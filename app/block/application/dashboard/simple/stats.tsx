import { IconTrendingDown, IconTrendingUp } from 'hq-icons'

import { Badge, Card } from '@/components/ui'

export default function Stats() {
    return (
        <div className='grid grid-cols-1 gap-4 px-4 md:grid-cols-2 lg:px-6 xl:grid-cols-4'>
            <Card>
                <Card.Header className='relative'>
                    <Card.Description>Total Revenue</Card.Description>
                    <Card.Title className='font-semibold text-2xl tabular-nums md:text-3xl'>$1,250.00</Card.Title>
                    <div className='absolute top-4 right-4'>
                        <Badge variant='outline'>
                            <IconTrendingUp />
                            +12.5%
                        </Badge>
                    </div>
                </Card.Header>
                <Card.Footer className='flex-col items-start gap-1 text-sm lg:flex-col'>
                    <div className='line-clamp-1 flex gap-2 font-medium'>
                        Trending up this month <IconTrendingUp className='size-4' />
                    </div>
                    <div className='text-muted-foreground'>Visitors for the last 6 months</div>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Header className='relative'>
                    <Card.Description>New Customers</Card.Description>
                    <Card.Title className='font-semibold text-2xl tabular-nums md:text-3xl'>1,234</Card.Title>
                    <div className='absolute top-4 right-4'>
                        <Badge variant='outline'>
                            <IconTrendingDown />
                            -20%
                        </Badge>
                    </div>
                </Card.Header>
                <Card.Footer className='flex-col items-start gap-1 text-sm lg:flex-col'>
                    <div className='line-clamp-1 flex gap-2 font-medium'>
                        Down 20% this period <IconTrendingDown className='size-4' />
                    </div>
                    <div className='text-muted-foreground'>Acquisition needs attention</div>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Header className='relative'>
                    <Card.Description>Active Accounts</Card.Description>
                    <Card.Title className='font-semibold text-2xl tabular-nums md:text-3xl'>45,678</Card.Title>
                    <div className='absolute top-4 right-4'>
                        <Badge variant='outline'>
                            <IconTrendingUp />
                            +12.5%
                        </Badge>
                    </div>
                </Card.Header>
                <Card.Footer className='flex-col items-start gap-1 text-sm lg:flex-col'>
                    <div className='line-clamp-1 flex gap-2 font-medium'>
                        Strong user retention <IconTrendingUp className='size-4' />
                    </div>
                    <div className='text-muted-foreground'>Engagement exceed targets</div>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Header className='relative'>
                    <Card.Description>Growth Rate</Card.Description>
                    <Card.Title className='font-semibold text-2xl tabular-nums md:text-3xl'>4.5%</Card.Title>
                    <div className='absolute top-4 right-4'>
                        <Badge variant='outline'>
                            <IconTrendingUp />
                            +4.5%
                        </Badge>
                    </div>
                </Card.Header>
                <Card.Footer className='flex-col items-start gap-1 text-sm lg:flex-col'>
                    <div className='line-clamp-1 flex gap-2 font-medium'>
                        Steady performance <IconTrendingUp className='size-4' />
                    </div>
                    <div className='text-muted-foreground'>Meets growth projections</div>
                </Card.Footer>
            </Card>
        </div>
    )
}
