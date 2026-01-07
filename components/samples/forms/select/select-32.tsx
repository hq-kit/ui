import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const options = [
  {
    value: 'clothing',
    label: 'Clothing'
  },
  {
    value: 'footwear',
    label: 'Footwear'
  },
  {
    value: 'accessories',
    label: 'Accessories'
  },
  {
    value: 'jewelry',
    label: 'Jewelry',
    disable: true
  },
  {
    value: 'outerwear',
    label: 'Outerwear'
  },
  {
    value: 'fragrance',
    label: 'Fragrance'
  },
  {
    value: 'makeup',
    label: 'Makeup'
  },
  {
    value: 'skincare',
    label: 'Skincare'
  },
  {
    value: 'furniture',
    label: 'Furniture'
  },
  {
    value: 'lighting',
    label: 'Lighting'
  },
  {
    value: 'kitchenware',
    label: 'Kitchenware',
    disable: true
  },
  {
    value: 'computers',
    label: 'Computers'
  },
  {
    value: 'audio',
    label: 'Audio'
  },
  {
    value: 'wearables',
    label: 'Wearables'
  },
  {
    value: 'supplements',
    label: 'Supplements'
  },
  {
    value: 'sportswear',
    label: 'Sportswear'
  }
]

const MultipleSelectDemo = () => {
  return (
    <Select
      className='w-full max-w-xs'
      defaultValue={['clothing', 'footwear']}
      placeholder='Select categories'
      selectionMode='multiple'
    >
      <Label>Multiple Select</Label>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent items={options}>{(item) => <SelectItem id={item.value}>{item.label}</SelectItem>}</SelectContent>
    </Select>
  )
}

export default MultipleSelectDemo
