'use client'

import {
  IconBolt,
  IconBuilding,
  IconBuildingFactory,
  IconDeviceDesktop,
  IconFileDollar,
  IconHospital,
  IconMovie,
  IconScale,
  IconSchool,
  IconTractor
} from '@tabler/icons-react'
import { ComboBox, ComboBoxContent, ComboBoxInput, ComboBoxItem } from '@/components/ui/combo-box'
import { Label } from '@/components/ui/label'

const options = [
  {
    value: 'information technology',
    label: 'Information Technology',
    icon: IconDeviceDesktop
  },
  {
    value: 'healthcare',
    label: 'Healthcare',
    icon: IconHospital
  },
  {
    value: 'finance',
    label: 'Finance',
    icon: IconFileDollar
  },
  {
    value: 'education',
    label: 'Education',
    icon: IconSchool
  },
  {
    value: 'entertainment',
    label: 'Entertainment',
    icon: IconMovie
  },
  {
    value: 'manufacturing',
    label: 'Manufacturing',
    icon: IconBuildingFactory
  },
  {
    value: 'energy',
    label: 'Energy',
    icon: IconBolt
  },
  {
    value: 'hospitality',
    label: 'Hospitality',
    icon: IconBuilding
  },
  {
    value: 'legal',
    label: 'Legal',
    icon: IconScale
  },
  {
    value: 'agriculture',
    label: 'Agriculture',
    icon: IconTractor
  }
]

export default function ComboboxOptionWithIIconDemo() {
  return (
    <ComboBox>
      <Label>Combobox option with icon</Label>
      <ComboBoxInput placeholder='Select industry category' />
      <ComboBoxContent items={options}>
        {(option) => (
          <ComboBoxItem id={option.value} textValue={option.label}>
            <option.icon className='size-4 text-muted-foreground' />
            <span>{option.label}</span>
          </ComboBoxItem>
        )}
      </ComboBoxContent>
    </ComboBox>
  )
}
