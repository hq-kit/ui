import { Carousel, CarouselButton, CarouselContent, CarouselHandler, CarouselItem } from '@/components/ui/carousel'

export default function CarouselOptionsDemo() {
  return (
    <Carousel
      className='w-full max-w-2xl py-4'
      opts={{
        align: 'center',
        loop: true
      }}
    >
      <CarouselContent>
        {Array.from({ length: 16 }, (_, id) => ({ id: id + 1 })).map(({ id }) => (
          <CarouselItem className='basis-1/2 lg:basis-1/3' key={id}>
            <div className='flex aspect-square items-center justify-center rounded-xl border'>{id}</div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselHandler>
        <CarouselButton segment='previous' />
        <CarouselButton segment='next' />
      </CarouselHandler>
    </Carousel>
  )
}
