import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

const CardTopImageDemo = () => {
  return (
    <Card className='max-w-md pt-0'>
      <CardContent className='px-0'>
        <img
          alt='Banner'
          className='aspect-video h-70 rounded-t-xl object-cover'
          src='https://cdn.shadcnstudio.com/ss-assets/components/card/image-2.png?height=280&format=auto'
        />
      </CardContent>
      <CardHeader>
        <CardTitle>Ethereal Swirl Gradient</CardTitle>
        <CardDescription>Smooth, flowing gradients blending rich reds and blues in an abstract swirl.</CardDescription>
      </CardHeader>
      <CardFooter className='gap-3 max-sm:flex-col max-sm:items-stretch'>
        <Button>Explore More</Button>
        <Button variant={'outline'}>Download Now</Button>
      </CardFooter>
    </Card>
  )
}

export default CardTopImageDemo
