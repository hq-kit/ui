import { ColorSwatch } from '@/components/ui/colors'

export default function ColorSwatchHSLDemo() {
  return (
    <div className='flex gap-2'>
      <ColorSwatch color={'hsl(0, 100%, 50%)'} />
      <ColorSwatch color={'hsl(120, 100%, 50%)'} />
      <ColorSwatch color={'hsl(240, 100%, 50%)'} />
      <ColorSwatch color={'hsl(0, 0%, 0%)'} />
      <ColorSwatch color={'hsl(0, 0%, 100%)'} />
    </div>
  )
}
