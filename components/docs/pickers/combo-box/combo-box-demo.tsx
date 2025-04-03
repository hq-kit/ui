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
        <div className='grid sm:grid-cols-4 gap-2'>
            <ComboBox label='Default' items={items}>
                {(item) => <ComboBox.Item id={item.id}>{item.name}</ComboBox.Item>}
            </ComboBox>
            <ComboBox label='Readonly' items={items} isReadOnly>
                {(item) => <ComboBox.Item id={item.id}>{item.name}</ComboBox.Item>}
            </ComboBox>
            <ComboBox label='Invalid' items={items} isInvalid>
                {(item) => <ComboBox.Item id={item.id}>{item.name}</ComboBox.Item>}
            </ComboBox>
            <ComboBox label='Disabled' items={items} isDisabled>
                {(item) => <ComboBox.Item id={item.id}>{item.name}</ComboBox.Item>}
            </ComboBox>
        </div>
    )
}
