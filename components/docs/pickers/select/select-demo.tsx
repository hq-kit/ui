import { Select } from '@/components/ui'

const items = [
    { id: 1, name: 'Ubuntu' },
    { id: 2, name: 'Debian' },
    { id: 3, name: 'Fedora' },
    { id: 4, name: 'Arch' },
    { id: 5, name: 'Redhat' }
]

export default function SelectDemo() {
    return (
        <div className='grid sm:grid-cols-3 gap-2'>
            <Select label='Default' items={items}>
                {(item) => <Select.Item id={item.id}>{item.name}</Select.Item>}
            </Select>
            <Select label='Invalid' items={items} isInvalid>
                {(item) => <Select.Item id={item.id}>{item.name}</Select.Item>}
            </Select>
            <Select label='Disabled' items={items} isDisabled>
                {(item) => <Select.Item id={item.id}>{item.name}</Select.Item>}
            </Select>
        </div>
    )
}
