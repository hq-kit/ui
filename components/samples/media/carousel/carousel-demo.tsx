import Image from 'next/image'
import { Carousel, CarouselButton, CarouselContent, CarouselHandler, CarouselItem } from '@/components/ui/carousel'

export default function CarouselDemo() {
  return (
    <Carousel className='w-full max-w-xs'>
      <CarouselContent>
        <CarouselItem className='basis-1/2'>
          <Image
            alt='image 1'
            className='rounded-xl'
            height={300}
            src='https://picsum.photos/id/1/400/300'
            width={400}
          />
        </CarouselItem>
        <CarouselItem className='basis-1/2'>
          <Image
            alt='image 2'
            className='rounded-xl'
            height={300}
            src='https://picsum.photos/id/2/400/300'
            width={400}
          />
        </CarouselItem>
        <CarouselItem className='basis-1/2'>
          <Image
            alt='image 3'
            className='rounded-xl'
            height={300}
            src='https://picsum.photos/id/3/400/300'
            width={400}
          />
        </CarouselItem>
        <CarouselItem className='basis-1/2'>
          <Image
            alt='image 4'
            className='rounded-xl'
            height={300}
            src='https://picsum.photos/id/4/400/300'
            width={400}
          />
        </CarouselItem>
        <CarouselItem className='basis-1/2'>
          <Image
            alt='image 5'
            className='rounded-xl'
            height={300}
            src='https://picsum.photos/id/5/400/300'
            width={400}
          />
        </CarouselItem>
        <CarouselItem className='basis-1/2'>
          <Image
            alt='image 6'
            className='rounded-xl'
            height={300}
            src='https://picsum.photos/id/6/400/300'
            width={400}
          />
        </CarouselItem>
        <CarouselItem className='basis-1/2'>
          <Image
            alt='image 7'
            className='rounded-xl'
            height={300}
            src='https://picsum.photos/id/7/400/300'
            width={400}
          />
        </CarouselItem>
      </CarouselContent>

      <CarouselHandler>
        <CarouselButton segment='previous' />
        <CarouselButton segment='next' />
      </CarouselHandler>
    </Carousel>
  )
}
