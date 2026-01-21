import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

const CardHorizontalDemo = () => {
  return (
    <Card className='max-w-lg py-0 sm:flex-row sm:gap-0'>
      <CardContent className='grow px-0'>
        <img
          alt='Banner'
          className='size-full rounded-l-xl'
          src='https://cdn.shadcnstudio.com/ss-assets/components/card/image-3.png'
        />
      </CardContent>
      <div className='sm:min-w-54'>
        <CardHeader className='pt-6'>
          <CardTitle>Dreamy Colorwave Gradient</CardTitle>
          <CardDescription>A smooth blend of vibrant pinks, purples, and blues for a magical touch.</CardDescription>
        </CardHeader>
        <CardFooter className='gap-3 py-6'>
          <Button className='bg-linear-to-br bg-transparent from-purple-500 to-pink-500 text-white focus-visible:ring-pink-600/20'>
            Explore More
          </Button>
        </CardFooter>
      </div>
    </Card>
  )
}

export default CardHorizontalDemo
