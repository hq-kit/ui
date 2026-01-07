import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

const CardGroupDemo = () => {
  return (
    <div className='flex py-6 *:rounded-none *:shadow-none max-xl:flex-col max-xl:*:not-last:border-b-0 max-xl:*:last:rounded-b-xl max-xl:*:first:rounded-t-xl xl:*:not-last:border-r-0 xl:*:last:rounded-r-xl xl:*:first:rounded-l-xl'>
      <Card className='overflow-hidden pt-0'>
        <CardContent className='px-0'>
          <img
            alt='Banner'
            className='aspect-video w-92 object-cover'
            src='https://cdn.shadcnstudio.com/ss-assets/components/card/image-7.png?width=368&format=auto'
          />
        </CardContent>
        <CardHeader>
          <CardTitle>Mystical Blue Swirl</CardTitle>
          <CardDescription>
            Dive into the depths of an enchanting swirl where vibrant blues and soft pinks merge seamlessly, creating a
            mesmerizing flow of colors.
          </CardDescription>
        </CardHeader>
        <CardFooter className='gap-3 max-sm:flex-col max-sm:items-stretch'>
          <Button>Explore More</Button>
          <Button variant={'outline'}>Download Now</Button>
        </CardFooter>
      </Card>
      <Card className='overflow-hidden pt-0'>
        <CardContent className='px-0'>
          <img
            alt='Banner'
            className='aspect-video w-92 object-cover'
            src='https://cdn.shadcnstudio.com/ss-assets/components/card/image-5.png?width=368&format=auto'
          />
        </CardContent>
        <CardHeader>
          <CardTitle>Cosmic Blue Waves</CardTitle>
          <CardDescription>
            Explore the mysteries of the cosmos with deep, swirling waves of blue and purple, evoking a sense of depth
            and infinite space.
          </CardDescription>
        </CardHeader>
        <CardFooter className='gap-3 max-sm:flex-col max-sm:items-stretch'>
          <Button>Explore More</Button>
          <Button variant={'outline'}>Download Now</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default CardGroupDemo
