import { Avatar } from '@/components/ui/avatar'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const users = [
  {
    id: '1',
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png',
    fallback: 'PG',
    name: 'Phillip George'
  },
  {
    id: '2',
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png',
    fallback: 'JD',
    name: 'Jaylon Donin'
  },
  {
    id: '3',
    src: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png',
    fallback: 'TC',
    name: 'Tiana Curtis'
  }
]

const SelectWithAvatarsDemo = () => {
  return (
    <Select className='w-full' defaultValue='1' placeholder='Select framework'>
      <Label>Options with avatar</Label>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent className='[&_*[role=option]>span]:right-2 [&_*[role=option]>span]:left-auto [&_*[role=option]>span]:flex [&_*[role=option]>span]:items-center [&_*[role=option]>span]:gap-2 [&_*[role=option]]:pr-8 [&_*[role=option]]:pl-2'>
        <SelectGroup items={users} title='Impersonate user'>
          {(item) => (
            <SelectItem id={item.id} textValue={item.name}>
              <Avatar alt={item.name} className='size-5 rounded-full' fallback={item.fallback} src={item.src} />
              <span className='truncate'>{item.name}</span>
            </SelectItem>
          )}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default SelectWithAvatarsDemo
