"use client"
import { Combobox, ComboboxContent, ComboboxGroup, ComboboxInput, ComboboxItem } from "@/components/ui/combobox"
import { Label } from "@/components/ui/field"

const options = [
  {
    id: "1",
    name: "Debian",
    distros: [
      {
        id: "1-1",
        name: "MX",
        disabled: true
      },
      {
        id: "1-2",
        name: "Kali"
      },
      {
        id: "1-3",
        name: "Deepin",
        disabled: true
      }
    ]
  },
  {
    id: "2",
    name: "Ubuntu",
    distros: [
      {
        id: "2-1",
        name: "Mint"
      },
      {
        id: "2-2",
        name: "KDE Neon",
        disabled: true
      },
      {
        id: "2-3",
        name: "Zorin"
      }
    ]
  },
  {
    id: "3",
    name: "Fedora",
    distros: [
      {
        id: "3-1",
        name: "CentOS"
      },
      {
        id: "3-2",
        name: "Alma",
        disabled: true
      },
      {
        id: "3-3",
        name: "Nobara",
        disabled: true
      }
    ]
  },
  {
    id: 4,
    name: "Arch",
    distros: [
      {
        id: "4-1",
        name: "Endeavour",
        disabled: true
      },
      {
        id: "4-2",
        name: "Garuda",
        disabled: true
      },
      {
        id: "4-3",
        name: "CachyOS"
      }
    ]
  }
]

export default function ComboboxDisabledOption() {
  return (
    <Combobox>
      <Label>Comobox option disabled</Label>
      <ComboboxInput placeholder="Choose a distro" />
      <ComboboxContent items={options}>
        {(option) => (
          <ComboboxGroup items={option.distros} title={option.name}>
            {(option) => (
              <ComboboxItem id={option.id} isDisabled={option.disabled}>
                {option.name}
              </ComboboxItem>
            )}
          </ComboboxGroup>
        )}
      </ComboboxContent>
    </Combobox>
  )
}
