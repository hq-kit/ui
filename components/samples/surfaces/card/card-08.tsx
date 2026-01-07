import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const CardSoftDemo = () => {
  return (
    <Card className='max-w-md gap-0 bg-primary/20'>
      <CardHeader>
        <CardTitle>Design Throwdown</CardTitle>
      </CardHeader>
      <CardContent>
        Where passion, pressure, and pixels collide—push your creativity to the edge and show what you are made of.
      </CardContent>
    </Card>
  )
}

export default CardSoftDemo
