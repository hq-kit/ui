import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const CardOverlayDemo = () => {
  return (
    <Card className='relative max-w-md py-0 before:absolute before:size-full before:rounded-xl before:bg-primary/70'>
      <CardContent className='px-0'>
        <img
          alt='Banner'
          className='h-70 w-md rounded-xl'
          src='https://cdn.shadcnstudio.com/ss-assets/components/card/image-8.png?widht=448&height=280&format=auto'
        />
      </CardContent>
      <div className='absolute'>
        <CardHeader className='w-full pt-6 text-primary-foreground'>
          <CardTitle>Creative Catalyst</CardTitle>
        </CardHeader>
        <CardContent className='text-primary-foreground/80'>
          Step into a world where imagination takes the lead and every pixel tells a story. This is a space designed to
          unleash your creative potential without boundaries or time constraints. Explore bold ideas, experiment with
          vibrant concepts, and craft visuals that inspire and captivate.
        </CardContent>
      </div>
    </Card>
  )
}

export default CardOverlayDemo
