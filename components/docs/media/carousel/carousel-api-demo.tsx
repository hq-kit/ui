'use client'

import * as React from 'react'

import { Button } from 'react-aria-components'

import { Card, Carousel, type CarouselApi } from '@/components/ui'
import { cn } from '@/lib/utils'

export default function CarouselDApiDemo() {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        if (!api) {
            return
        }
        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)
        api.on('select', () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    const handleSelect = (index: number) => {
        if (api) {
            api.scrollTo(index)
            setCurrent(index + 1)
        }
    }

    return (
        <Carousel setApi={setApi} className='w-full max-w-sm'>
            <Carousel.Content items={Array.from({ length: 10 }, (_, id) => ({ id: id + 1 }))}>
                {({ id }) => (
                    <Carousel.Item id={id}>
                        <Card>
                            <Card.Content className='flex aspect-square items-center justify-center p-6'>
                                <span className='text-4xl font-semibold'>{id}</span>
                            </Card.Content>
                        </Card>
                    </Carousel.Item>
                )}
            </Carousel.Content>
            <div className='flex items-center justify-between'>
                <div className='text-muted-fg flex gap-1 py-2 text-center text-sm'>
                    {Array.from({ length: 10 }).map((_, index) => (
                        <Button
                            className={cn(
                                'rounded-full transition size-3',
                                current === index + 1
                                    ? 'bg-primary'
                                    : 'bg-muted hover:bg-primary/50'
                            )}
                            aria-label={`Slide ${current} of ${count}`}
                            onPress={() => handleSelect(index)}
                            key={index}
                        />
                    ))}
                </div>

                <Carousel.Handler />
            </div>
        </Carousel>
    )
}
