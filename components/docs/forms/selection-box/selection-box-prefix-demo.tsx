import { SelectionBox } from '@/components/ui'
import { IconBrandArch, IconBrandDebian, IconBrandFedora, IconBrandUbuntu } from 'hq-icons'

export default function SelectionBoxPrefixDemo() {
    return (
        <SelectionBox selectionMode='multiple' label='Linux Distro'>
            <SelectionBox.Item prefix={<IconBrandUbuntu />} value='ubuntu'>
                Ubuntu
            </SelectionBox.Item>
            <SelectionBox.Item prefix={<IconBrandDebian />} value='debian'>
                Debian
            </SelectionBox.Item>
            <SelectionBox.Item prefix={<IconBrandFedora />} value='fedora'>
                Fedora
            </SelectionBox.Item>
            <SelectionBox.Item prefix={<IconBrandArch />} value='arch'>
                Arch
            </SelectionBox.Item>
        </SelectionBox>
    )
}
