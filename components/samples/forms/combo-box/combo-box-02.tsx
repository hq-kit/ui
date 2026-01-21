import { ComboBox, ComboBoxContent, ComboBoxGroup, ComboBoxInput, ComboBoxItem } from '@/components/ui/combo-box'
import { Label } from '@/components/ui/label'

const options = [
  {
    id: '1',
    name: 'Debian',
    distros: [
      {
        id: '1-1',
        name: 'MX'
      },
      {
        id: '1-2',
        name: 'Kali'
      },
      {
        id: '1-3',
        name: 'Deepin'
      }
    ]
  },
  {
    id: '2',
    name: 'Ubuntu',
    distros: [
      {
        id: '2-1',
        name: 'Mint'
      },
      {
        id: '2-2',
        name: 'KDE Neon'
      },
      {
        id: '2-3',
        name: 'Zorin'
      }
    ]
  },
  {
    id: '3',
    name: 'Fedora',
    distros: [
      {
        id: '3-1',
        name: 'CentOS'
      },
      {
        id: '3-2',
        name: 'Alma'
      },
      {
        id: '3-3',
        name: 'Nobara'
      }
    ]
  },
  {
    id: 4,
    name: 'Arch',
    distros: [
      {
        id: '4-1',
        name: 'Endeavour'
      },
      {
        id: '4-2',
        name: 'Garuda'
      },
      {
        id: '4-3',
        name: 'CachyOS'
      }
    ]
  }
]

export default function ComboBox01() {
  return (
    <ComboBox>
      <Label>Combobox option Group</Label>
      <ComboBoxInput placeholder='Choose a distro' />
      <ComboBoxContent items={options}>
        {(option) => (
          <ComboBoxGroup items={option.distros} title={option.name}>
            {(option) => <ComboBoxItem id={option.id}>{option.name}</ComboBoxItem>}
          </ComboBoxGroup>
        )}
      </ComboBoxContent>
    </ComboBox>
  )
}
