import { ComboBox, ComboBoxContent, ComboBoxGroup, ComboBoxInput, ComboBoxItem } from '@/components/ui/combo-box'
import { Label } from '@/components/ui/label'

const options = [
  {
    id: '1',
    name: 'Debian',
    distros: [
      {
        id: '1-1',
        name: 'MX',
        disabled: true
      },
      {
        id: '1-2',
        name: 'Kali'
      },
      {
        id: '1-3',
        name: 'Deepin',
        disabled: true
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
        name: 'KDE Neon',
        disabled: true
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
        name: 'Alma',
        disabled: true
      },
      {
        id: '3-3',
        name: 'Nobara',
        disabled: true
      }
    ]
  },
  {
    id: 4,
    name: 'Arch',
    distros: [
      {
        id: '4-1',
        name: 'Endeavour',
        disabled: true
      },
      {
        id: '4-2',
        name: 'Garuda',
        disabled: true
      },
      {
        id: '4-3',
        name: 'CachyOS'
      }
    ]
  }
]

export default function ComboBox03() {
  return (
    <ComboBox>
      <Label>Comobox option disabled</Label>
      <ComboBoxInput placeholder='Choose a distro' />
      <ComboBoxContent items={options}>
        {(option) => (
          <ComboBoxGroup items={option.distros} title={option.name}>
            {(option) => (
              <ComboBoxItem id={option.id} isDisabled={option.disabled}>
                {option.name}
              </ComboBoxItem>
            )}
          </ComboBoxGroup>
        )}
      </ComboBoxContent>
    </ComboBox>
  )
}
