import { Badge } from '@/components/ui/badge'

const BadgeGradientOutlineDemo = () => {
  return (
    <div className='flex items-center justify-center rounded-full bg-linear-to-r from-indigo-500 to-pink-500 p-0.5'>
      <Badge className='border-none bg-background text-foreground hover:bg-background'>Gradient Outline</Badge>
    </div>
  )
}

export default BadgeGradientOutlineDemo
