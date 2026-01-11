import { ColorSwatch, ColorSwatchPicker, ColorSwatchPickerItem } from '@/components/ui/colors'

export default function ColorSwatchPickerHSLDemo() {
  return (
    <ColorSwatchPicker>
      <ColorSwatchPickerItem color={'hsl(0, 100%, 50%)'}>
        <ColorSwatch />
      </ColorSwatchPickerItem>
      <ColorSwatchPickerItem color={'hsl(120, 100%, 50%)'}>
        <ColorSwatch />
      </ColorSwatchPickerItem>
      <ColorSwatchPickerItem color={'hsl(240, 100%, 50%)'}>
        <ColorSwatch />
      </ColorSwatchPickerItem>
      <ColorSwatchPickerItem color={'hsl(0, 0%, 0%)'}>
        <ColorSwatch />
      </ColorSwatchPickerItem>
      <ColorSwatchPickerItem color={'hsl(0, 0%, 100%)'}>
        <ColorSwatch />
      </ColorSwatchPickerItem>
    </ColorSwatchPicker>
  )
}
