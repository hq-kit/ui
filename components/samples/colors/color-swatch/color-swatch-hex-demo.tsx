import { ColorSwatch } from '@/components/ui/colors'

export default function ColorSwatchHexDemo() {
  return (
    <div className='flex gap-2'>
      <ColorSwatch color={'#FF0000'} />
      <ColorSwatch color={'#00FF00'} />
      <ColorSwatch color={'#0000FF'} />
      <ColorSwatch color={'#000000'} />
      <ColorSwatch color={'#FFFFFF'} />
    </div>
  )
}
