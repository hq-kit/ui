'use client'

import { IconSearch } from 'hq-icons'
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
            items={list.items}
            onInputChange={list.setFilterText}
            inputValue={list.filterText}
            isPending={list.isLoading}
            prefix={<IconSearch />}
        >
            {(item) => (
                <ComboBox.Item key={item.title} id={item.title}>
                    {item.title}
                </ComboBox.Item>
            )}
        </ComboBox>
    )
}
