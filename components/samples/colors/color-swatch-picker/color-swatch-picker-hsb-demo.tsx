import { ColorSwatch, ColorSwatchPicker, ColorSwatchPickerItem } from '@/components/ui/colors'

export default function ColorSwatchPickerHSBDemo() {
  return (
    <ColorSwatchPicker>
      <ColorSwatchPickerItem color={'hsb(0, 100%, 50%)'}>
        <ColorSwatch />
      </ColorSwatchPickerItem>
      <ColorSwatchPickerItem color={'hsb(120, 100%, 50%)'}>
        <ColorSwatch />
      </ColorSwatchPickerItem>
      <ColorSwatchPickerItem color={'hsb(240, 100%, 50%)'}>
        <ColorSwatch />
      </ColorSwatchPickerItem>
      <ColorSwatchPickerItem color={'hsb(0, 0%, 0%)'}>
        <ColorSwatch />
      </ColorSwatchPickerItem>
      <ColorSwatchPickerItem color={'hsb(0, 0%, 100%)'}>
        <ColorSwatch />
      </ColorSwatchPickerItem>
    </ColorSwatchPicker>
  )
}
