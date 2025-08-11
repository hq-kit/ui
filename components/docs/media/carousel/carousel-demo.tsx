'use client'

import Image from 'next/image'
import { Carousel } from '@/components/ui'

export default function CarouselDemo() {
    return (
        <Carousel className='w-full max-w-xs'>
            <Carousel.Content>
                <Carousel.Item className='basis-1/2'>
                    <Image
                        alt='image 1'
                        className='rounded-lg'
                        height={300}
                        src='https://picsum.photos/id/61/400/300'
                        width={400}
                    />
                </Carousel.Item>
                <Carousel.Item className='basis-1/2'>
                    <Image
                        alt='image 2'
                        className='rounded-lg'
                        height={300}
                        src='https://picsum.photos/id/62/400/300'
                        width={400}
                    />
                </Carousel.Item>
                <Carousel.Item className='basis-1/2'>
                    <Image
                        alt='image 3'
                        className='rounded-lg'
                        height={300}
                        src='https://picsum.photos/id/63/400/300'
                        width={400}
                    />
                </Carousel.Item>
                <Carousel.Item className='basis-1/2'>
                    <Image
                        alt='image 4'
                        className='rounded-lg'
                        height={300}
                        src='https://picsum.photos/id/64/400/300'
                        width={400}
                    />
                </Carousel.Item>
                <Carousel.Item className='basis-1/2'>
                    <Image
                        alt='image 5'
                        className='rounded-lg'
                        height={300}
                        src='https://picsum.photos/id/65/400/300'
                        width={400}
                    />
                </Carousel.Item>
                <Carousel.Item className='basis-1/2'>
                    <Image
                        alt='image 6'
                        className='rounded-lg'
                        height={300}
                        src='https://picsum.photos/id/66/400/300'
                        width={400}
                    />
                </Carousel.Item>
                <Carousel.Item className='basis-1/2'>
                    <Image
                        alt='image 7'
                        className='rounded-lg'
                        height={300}
                        src='https://picsum.photos/id/61/400/300'
                        width={400}
                    />
                </Carousel.Item>
            </Carousel.Content>
            <Carousel.Handler />
        </Carousel>
    )
}
