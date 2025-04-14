import { ListBox } from '@/components/ui'
import { Autocomplete } from '@/components/ui/autocomplete'

const items = [
    { id: 1, name: 'Ubuntu' },
    { id: 2, name: 'Debian' },
    { id: 3, name: 'Fedora' },
    { id: 4, name: 'Arch' },
    { id: 5, name: 'CentOS' },
    { id: 6, name: 'Gentoo' },
    { id: 7, name: 'OpenSuse' },
    { id: 8, name: 'Redhat' },
    { id: 9, name: 'FreeBSD' },
    { id: 10, name: 'NetBSD' }
]

export default function AutocompleteListBoxDemo() {
    return (
        <Autocomplete>
            <Autocomplete.Input className='mb-2' />
            <ListBox items={items} selectionMode='multiple' aria-label='Linux Distros'>
                {(item) => <ListBox.Item id={item.id}>{item.name}</ListBox.Item>}
            </ListBox>
        </Autocomplete>
    )
}
