import {
    IconBrandArc,
    IconBrandChrome,
    IconBrandEdge,
    IconBrandFirefox,
    IconBrandOpera,
    IconBrandSafari
} from '@tabler/icons-react'
import { Select } from '@/components/ui'

const items = [
    { id: 1, name: 'Chrome', icon: IconBrandChrome },
    { id: 2, name: 'Firefox', icon: IconBrandFirefox },
    { id: 3, name: 'Opera', icon: IconBrandOpera },
    { id: 4, name: 'Arc', icon: IconBrandArc },
    { id: 5, name: 'Edge', icon: IconBrandEdge },
    { id: 6, name: 'Safari', icon: IconBrandSafari }
]

export default function SelectWithIconDemo() {
    return (
        <Select items={items} label='Linux Distro'>
            {(item) => (
                <Select.Item id={item.id} textValue={item.name}>
                    <item.icon />
                    <Select.Label>{item.name}</Select.Label>
                </Select.Item>
            )}
        </Select>
    )
}
