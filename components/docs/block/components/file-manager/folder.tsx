'use client'

import { GridListItemProps } from 'react-aria-components'

import { GridList } from '@/components/ui'

export default function Folder(props: GridListItemProps) {
    return <GridList.Item {...props} />
}
