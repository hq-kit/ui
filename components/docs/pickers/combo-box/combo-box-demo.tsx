import { ComboBox } from '@/components/ui'

const items = [
    { id: 1, name: 'Ubuntu' },
    { id: 2, name: 'Debian' },
    { id: 3, name: 'Fedora' },
    { id: 4, name: 'Arch' },
    { id: 5, name: 'Redhat' }
]

export default function ComboBoxDemo() {
    return (
        <div className='grid gap-2 sm:grid-cols-4'>
            <ComboBox items={items} label='Default'>
                {(item) => <ComboBox.Item id={item.id}>{item.name}</ComboBox.Item>}
            </ComboBox>
            <ComboBox isReadOnly items={items} label='Readonly'>
                {(item) => <ComboBox.Item id={item.id}>{item.name}</ComboBox.Item>}
            </ComboBox>
            <ComboBox isInvalid items={items} label='Invalid'>
                {(item) => <ComboBox.Item id={item.id}>{item.name}</ComboBox.Item>}
            </ComboBox>
            <ComboBox isDisabled items={items} label='Disabled'>
                {(item) => <ComboBox.Item id={item.id}>{item.name}</ComboBox.Item>}
            </ComboBox>
        </div>
    )
}
