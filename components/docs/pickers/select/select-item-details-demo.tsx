import { Select } from '@/components/ui'

const items = [
    {
        id: 1,
        name: 'React',
        description: 'Component-based JavaScript library'
    },
    {
        id: 2,
        name: 'Angular',
        description: 'Comprehensive TypeScript-based framework'
    },
    {
        id: 3,
        name: 'Vue.Js',
        description: 'Flexible and progressive UI framework'
    }
]

export default function SelectItemDetailsDemo() {
    return (
        <Select items={items} label='Javascript Frameworks'>
            {(item) => (
                <Select.Item id={item.id} textValue={item.name}>
                    <Select.Details description={item.description} label={item.name} />
                </Select.Item>
            )}
        </Select>
    )
}
