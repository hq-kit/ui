'use client'

import {
    type Dispatch,
    type HTMLAttributes,
    type MouseEvent,
    type ReactNode,
    type RefObject,
    type SetStateAction,
    createContext,
    createRef,
    use,
    useRef,
    useState
} from 'react'
import type { MenuProps } from 'react-aria-components'

import { cn } from '@/lib/utils'
import { Menu } from './menu'

interface ContextMenuContextProps {
    triggerRef: RefObject<HTMLDivElement | null>
    contextMenuOffset: { offset: number; crossOffset: number } | null
    setContextMenuOffset: Dispatch<SetStateAction<{ offset: number; crossOffset: number } | null>>
}

const ContextMenuContext = createContext<ContextMenuContextProps>({
    triggerRef: createRef(),
    contextMenuOffset: null,
    setContextMenuOffset: () => {}
})

const useContextMenu = () => {
    const context = use(ContextMenuContext)
    if (!context) {
        throw new Error('useContextMenu must be used within a ContextMenu')
    }
    return context
}

interface ContextMenuProps {
    children: ReactNode
}

const ContextMenu = ({ children }: ContextMenuProps) => {
    const [contextMenuOffset, setContextMenuOffset] = useState<{
        offset: number
        crossOffset: number
    } | null>(null)
    const triggerRef = useRef<HTMLDivElement>(null)
    return (
        <ContextMenuContext.Provider value={{ triggerRef, contextMenuOffset, setContextMenuOffset }}>
            {children}
        </ContextMenuContext.Provider>
    )
}

const ContextMenuTrigger = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
    const { triggerRef, setContextMenuOffset } = useContextMenu()

    const onContextMenu = (e: MouseEvent<HTMLDivElement>) => {
        e.preventDefault()
        const rect = e.currentTarget.getBoundingClientRect()
        setContextMenuOffset({
            offset: e.clientY - rect.bottom,
            crossOffset: e.clientX - rect.left
        })
    }
    return (
        <div
            className={cn('cursor-default select-none outline-hidden disabled:opacity-50', className)}
            ref={triggerRef}
            aria-haspopup='menu'
            onContextMenu={onContextMenu}
            {...props}
        />
    )
}

interface ContextMenuContentProps<T>
    extends Omit<
        MenuProps<T>,
        'showArrow' | 'isOpen' | 'onOpenChange' | 'triggerRef' | 'placement' | 'shouldFlip' | 'className'
    > {
    respectScreen?: boolean
    className?: string
}

const ContextMenuContent = <T extends object>(props: Omit<ContextMenuContentProps<T>, 'style'>) => {
    const { contextMenuOffset, setContextMenuOffset, triggerRef } = useContextMenu()
    return contextMenuOffset ? (
        <Menu.Content
            respectScreen={props.respectScreen}
            aria-label={props['aria-label'] ?? 'Context Menu'}
            isOpen={!!contextMenuOffset}
            offset={contextMenuOffset?.offset}
            crossOffset={contextMenuOffset?.crossOffset}
            triggerRef={triggerRef}
            placement='bottom left'
            onOpenChange={() => setContextMenuOffset(null)}
            onClose={() => setContextMenuOffset(null)}
            {...props}
        />
    ) : null
}

ContextMenu.Trigger = ContextMenuTrigger
ContextMenu.Content = ContextMenuContent
ContextMenu.Item = Menu.Item
ContextMenu.Label = Menu.Label
ContextMenu.Separator = Menu.Separator
ContextMenu.Details = Menu.Details
ContextMenu.Section = Menu.Section
ContextMenu.Header = Menu.Header

export { ContextMenu }
