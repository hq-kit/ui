'use client'

import { IconSearch } from '@tabler/icons-react'
import { useAsyncList } from 'react-stately'
import { ComboBox } from '@/components/ui'

export default function ComboBoxAsyncDemo() {
    const list = useAsyncList<{ title: string }>({
        async load({ signal, filterText }) {
            const res = await fetch(`https://dummyjson.com/posts/search?q=${filterText}`, {
                signal
            }).then((r) => r.json())
            return {
                items: res.posts
            }
        }
    })
    return (
        <ComboBox
            inputValue={list.filterText}
            isPending={list.isLoading}
            items={list.items}
            onInputChange={list.setFilterText}
            prefix={<IconSearch />}
        >
            {(item) => (
                <ComboBox.Item id={item.title} key={item.title}>
                    {item.title}
                </ComboBox.Item>
            )}
        </ComboBox>
    )
}
