import { Select } from '@/components/ui'
import { IconBrandArch, IconBrandDebian, IconBrandFedora, IconBrandRedhat, IconBrandUbuntu } from 'hq-icons'

export default function SelectWithIconDemo() {
    return (
        <Select label='Linux Distro'>
            <Select.Item id='ubuntu' textValue='Ubuntu'>
                <IconBrandUbuntu />
                Ubuntu
            </Select.Item>
            <Select.Item id='debian' textValue='Debian'>
                <IconBrandDebian />
                Debian
            </Select.Item>
            <Select.Item id='fedora' textValue='Fedora'>
                <IconBrandFedora />
                Fedora
            </Select.Item>
            <Select.Item id='arch' textValue='Arch'>
                <IconBrandArch />
                Arch
            </Select.Item>
            <Select.Item id='red-hat' textValue='RedHat'>
                <IconBrandRedhat />
                RedHat
            </Select.Item>
        </Select>
    )
}
