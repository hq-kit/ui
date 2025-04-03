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
        <Select label='Javascript Frameworks' items={items}>
            {(item) => (
                <Select.Item id={item.id} textValue={item.name}>
                    <Select.Details label={item.name} description={item.description} />
                </Select.Item>
            )}
        </Select>
    )
}
