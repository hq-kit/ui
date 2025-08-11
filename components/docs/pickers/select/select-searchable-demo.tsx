import { Select } from '@/components/ui'

const items = [
    { id: 1, name: 'Ubuntu' },
    { id: 2, name: 'Debian' },
    { id: 3, name: 'Fedora' },
    { id: 4, name: 'Arch' },
    { id: 5, name: 'Redhat' }
]

export default function AutocompleteDemo() {
    return (
        <Select items={items} label='Default' searchable>
            {(item) => <Select.Item id={item.id}>{item.name}</Select.Item>}
        </Select>
    )
}
