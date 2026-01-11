import { ColorSwatch, ColorSwatchPicker, ColorSwatchPickerItem } from '@/components/ui/colors'

export default function ColorSwatchPickerHexDemo() {
  return (
    <ColorSwatchPicker>
      <ColorSwatchPickerItem color={'#FF0000'}>
        <ColorSwatch />
      </ColorSwatchPickerItem>
      <ColorSwatchPickerItem color={'#00FF00'}>
        <ColorSwatch />
      </ColorSwatchPickerItem>
      <ColorSwatchPickerItem color={'#0000FF'}>
        <ColorSwatch />
      </ColorSwatchPickerItem>
      <ColorSwatchPickerItem color={'#000000'}>
        <ColorSwatch />
      </ColorSwatchPickerItem>
      <ColorSwatchPickerItem color={'#FFFFFF'}>
        <ColorSwatch />
      </ColorSwatchPickerItem>
    </ColorSwatchPicker>
  )
}
