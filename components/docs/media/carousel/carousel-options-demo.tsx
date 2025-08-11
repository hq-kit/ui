'use client'

import { Card, Carousel } from '@/components/ui'

export default function CarouselOptionsDemo() {
    return (
        <Carousel
            className='w-full max-w-2xl'
            opts={{
                align: 'center',
                loop: true
            }}
        >
            <Carousel.Content items={Array.from({ length: 16 }, (_, id) => ({ id: id + 1 }))}>
                {({ id }) => (
                    <Carousel.Item className='basis-1/2 lg:basis-1/3' id={id}>
                        <Card className='flex aspect-square items-center justify-center'>
                            <Card.Title>{id}</Card.Title>
                        </Card>
                    </Carousel.Item>
                )}
            </Carousel.Content>

            <Carousel.Handler />
        </Carousel>
    )
}
