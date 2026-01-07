import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const countries = [
  { value: '1', label: 'India', flag: 'https://cdn.shadcnstudio.com/ss-assets/flags/india.png' },
  { value: '2', label: 'China', flag: 'https://cdn.shadcnstudio.com/ss-assets/flags/china.png' },
  { value: '3', label: 'Monaco', flag: 'https://cdn.shadcnstudio.com/ss-assets/flags/monaco.png' },
  { value: '4', label: 'Serbia', flag: 'https://cdn.shadcnstudio.com/ss-assets/flags/serbia.png' },
  { value: '5', label: 'Romania', flag: 'https://cdn.shadcnstudio.com/ss-assets/flags/romania.png' },
  { value: '6', label: 'Mayotte', flag: 'https://cdn.shadcnstudio.com/ss-assets/flags/mayotte.png' },
  { value: '7', label: 'Iraq', flag: 'https://cdn.shadcnstudio.com/ss-assets/flags/iraq.png' },
  { value: '8', label: 'Syria', flag: 'https://cdn.shadcnstudio.com/ss-assets/flags/syria.png' },
  { value: '9', label: 'Korea', flag: 'https://cdn.shadcnstudio.com/ss-assets/flags/korea.png' },
  { value: '10', label: 'Zimbabwe', flag: 'https://cdn.shadcnstudio.com/ss-assets/flags/zimbabwe.png' }
]

const SelectWithFlagsDemo = () => {
  return (
    <Select className='w-full' defaultValue='1' placeholder='Select framework'>
      <Label>Options with flag</Label>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent items={countries}>
        {(country) => (
          <SelectItem id={country.value}>
            <img alt={`${country.label} flag`} className='h-4 w-5' src={country.flag} />{' '}
            <span className='truncate'>{country.label}</span>
          </SelectItem>
        )}
      </SelectContent>
    </Select>
  )
}

export default SelectWithFlagsDemo
