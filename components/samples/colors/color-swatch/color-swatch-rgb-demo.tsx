import { ColorSwatch } from '@/components/ui/colors'

export default function ColorSwatchRGBDemo() {
  return (
    <div className='flex gap-2'>
      <ColorSwatch color={'rgb(255, 0, 0)'} />
      <ColorSwatch color={'rgb(0, 255, 0)'} />
      <ColorSwatch color={'rgb(0, 0, 255)'} />
      <ColorSwatch color={'rgb(0, 0, 0)'} />
      <ColorSwatch color={'rgb(255, 255, 255)'} />
    </div>
  )
}
