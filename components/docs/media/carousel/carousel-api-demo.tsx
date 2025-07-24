'use client'

import { useEffect, useState } from 'react'
import { Button } from 'react-aria-components'

import { Card, Carousel, type CarouselApi } from '@/components/ui'
import { cn } from '@/lib/utils'

export default function CarouselDApiDemo() {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)

    useEffect(() => {
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
                                <span className='font-semibold text-4xl'>{id}</span>
                            </Card.Content>
                        </Card>
                    </Carousel.Item>
                )}
            </Carousel.Content>
            <div className='flex items-center justify-between'>
                <div className='flex gap-1 py-2 text-center text-muted-foreground text-sm'>
                    {Array.from({ length: 10 }).map((_, index) => (
                        <Button
                            className={cn(
                                'size-3 rounded-full transition',
                                current === index + 1 ? 'bg-primary' : 'bg-muted hover:bg-primary/50'
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
