'use client'

import Image from 'next/image'

import { Carousel } from '@/components/ui'

export default function CarouselDemo() {
    return (
        <Carousel className='w-full max-w-xs'>
            <Carousel.Content>
                <Carousel.Item className='basis-1/2'>
                    <Image
                        className='rounded-lg'
                        src='https://picsum.photos/id/61/400/300'
                        alt='image 1'
                        width={400}
                        height={300}
                    />
                </Carousel.Item>
                <Carousel.Item className='basis-1/2'>
                    <Image
                        className='rounded-lg'
                        src='https://picsum.photos/id/62/400/300'
                        alt='image 2'
                        width={400}
                        height={300}
                    />
                </Carousel.Item>
                <Carousel.Item className='basis-1/2'>
                    <Image
                        className='rounded-lg'
                        src='https://picsum.photos/id/63/400/300'
                        alt='image 3'
                        width={400}
                        height={300}
                    />
                </Carousel.Item>
                <Carousel.Item className='basis-1/2'>
                    <Image
                        className='rounded-lg'
                        src='https://picsum.photos/id/64/400/300'
                        alt='image 4'
                        width={400}
                        height={300}
                    />
                </Carousel.Item>
                <Carousel.Item className='basis-1/2'>
                    <Image
                        className='rounded-lg'
                        src='https://picsum.photos/id/65/400/300'
                        alt='image 5'
                        width={400}
                        height={300}
                    />
                </Carousel.Item>
                <Carousel.Item className='basis-1/2'>
                    <Image
                        className='rounded-lg'
                        src='https://picsum.photos/id/66/400/300'
                        alt='image 6'
                        width={400}
                        height={300}
                    />
                </Carousel.Item>
                <Carousel.Item className='basis-1/2'>
                    <Image
                        className='rounded-lg'
                        src='https://picsum.photos/id/61/400/300'
                        alt='image 7'
                        width={400}
                        height={300}
                    />
                </Carousel.Item>
            </Carousel.Content>
            <Carousel.Handler />
        </Carousel>
    )
}
