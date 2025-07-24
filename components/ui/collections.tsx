'use client'

import { DropIndicator, isTextDropItem, useDragAndDrop } from 'react-aria-components'
import type { DragAndDropOptions, DropOperation } from 'react-aria-components'
import { type ListData, type ListOptions, useListData as RACListData } from 'react-stately'

const useList = <T extends object>(options: ListOptions<T>) => RACListData(options)
const useDND = <T extends object>({
    list,
    operation = 'move'
}: {
    list: ListData<T & { name: string }>
    operation?: DropOperation
    DragAndDropOptions?: DragAndDropOptions
}) =>
    useDragAndDrop({
        getItems: (items) =>
            [...items].map((item) => ({
                'text/plain': list.getItem(item)?.name ?? '',
                'custom-app-type': JSON.stringify(list.getItem(item as string)!)
            })),
        onReorder: (e) => {
            if (e.target.dropPosition === 'before') {
                list.moveBefore(e.target.key, e.keys)
            } else if (e.target.dropPosition === 'after') {
                list.moveAfter(e.target.key, e.keys)
            }
        },
        acceptedDragTypes: ['custom-app-type'],
        getDropOperation: () => operation,
        onInsert: async (e) => {
            const processedItems = await Promise.all(
                e.items.filter(isTextDropItem).map(async (item) => JSON.parse(await item.getText('custom-app-type')))
            )
            if (e.target.dropPosition === 'before') {
                list.insertBefore(e.target.key, ...processedItems)
            } else if (e.target.dropPosition === 'after') {
                list.insertAfter(e.target.key, ...processedItems)
            }
        },
        onRootDrop: async (e) => {
            const processedItems = await Promise.all(
                e.items.filter(isTextDropItem).map(async (item) => JSON.parse(await item.getText('custom-app-type')))
            )
            list.append(...processedItems)
        },
        onDragEnd: (e) => {
            if (e.dropOperation === 'move' && !e.isInternal) {
                list.remove(...e.keys)
            }
        },
        renderDropIndicator: (e) => (
            <DropIndicator
                target={e}
                className={({ isDropTarget }) =>
                    isDropTarget ? 'col-span-full rounded-md outline outline-primary' : ''
                }
            />
        ),
        renderDragPreview: (items) => (
            <ul className='w-full rounded-md bg-primary p-2 text-primary-foreground'>
                {items.map((item, i) => (
                    <li className='text-sm' key={i}>
                        {i + 1}. {item['text/plain']}
                    </li>
                ))}
            </ul>
        )
    })

export { useDND, useList }
