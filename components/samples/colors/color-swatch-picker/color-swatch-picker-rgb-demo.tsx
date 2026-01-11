import { ColorSwatch, ColorSwatchPicker, ColorSwatchPickerItem } from '@/components/ui/colors'

export default function ColorSwatchPickerRGBDemo() {
  return (
    <ColorSwatchPicker>
      <ColorSwatchPickerItem color={'rgb(255, 0, 0)'}>
        <ColorSwatch />
      </ColorSwatchPickerItem>
      <ColorSwatchPickerItem color={'rgb(0, 255, 0)'}>
        <ColorSwatch />
      </ColorSwatchPickerItem>
      <ColorSwatchPickerItem color={'rgb(0, 0, 255)'}>
        <ColorSwatch />
      </ColorSwatchPickerItem>
      <ColorSwatchPickerItem color={'rgb(0, 0, 0)'}>
        <ColorSwatch />
      </ColorSwatchPickerItem>
      <ColorSwatchPickerItem color={'rgb(255, 255, 255)'}>
        <ColorSwatch />
      </ColorSwatchPickerItem>
    </ColorSwatchPicker>
  )
}
