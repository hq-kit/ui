import { ComboBox, ComboBoxContent, ComboBoxInput, ComboBoxItem } from '@/components/ui/combo-box'
import { Label } from '@/components/ui/label'

const options = [
  { id: '1', value: 'Debian' },
  { id: '3', value: 'Fedora' },
  { id: '4', value: 'Arch' },
  { id: '5', value: 'Red Hat' },
  { id: '6', value: 'openSUSE' },
  { id: '7', value: 'Gentoo' },
  { id: '8', value: 'Slackware' },
  { id: '9', value: 'Void' },
  { id: '10', value: 'Alpine' }
]

export default function ComboBox02() {
  return (
    <ComboBox>
      <Label>Choose a distro</Label>
      <ComboBoxInput placeholder='Choose a distro' />
      <ComboBoxContent items={options}>
        {(option) => <ComboBoxItem id={option.id}>{option.value}</ComboBoxItem>}
      </ComboBoxContent>
    </ComboBox>
  )
}
