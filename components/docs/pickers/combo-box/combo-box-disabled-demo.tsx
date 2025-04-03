import { ComboBox } from '@/components/ui'

const items = [
    { id: 1, name: 'Ubuntu', available: true },
    { id: 2, name: 'Debian', available: true },
    { id: 3, name: 'Fedora', available: false },
    { id: 4, name: 'Arch', available: false },
    { id: 5, name: 'CentOS', available: false },
    { id: 6, name: 'Gentoo', available: true },
    { id: 7, name: 'OpenSuse', available: false },
    { id: 8, name: 'Redhat', available: false },
    { id: 9, name: 'FreeBSD', available: false },
    { id: 10, name: 'NetBSD', available: true }
]

export default function ComboBoxDisabledDemo() {
    return (
        <ComboBox label='Linux Distro' items={items}>
            {(item) => (
                <ComboBox.Item id={item.id} isDisabled={!item.available}>
                    {item.name}
                </ComboBox.Item>
            )}
        </ComboBox>
    )
}
