import { ColorSwatch } from '@/components/ui/colors'

export default function ColorSwatchHSBDemo() {
  return (
    <div className='flex gap-2'>
      <ColorSwatch color={'hsb(0, 100%, 50%)'} />
      <ColorSwatch color={'hsb(120, 100%, 50%)'} />
      <ColorSwatch color={'hsb(240, 100%, 50%)'} />
      <ColorSwatch color={'hsb(0, 0%, 0%)'} />
      <ColorSwatch color={'hsb(0, 0%, 100%)'} />
    </div>
  )
}
