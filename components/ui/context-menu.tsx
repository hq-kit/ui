'use client'

import React from 'react'

import { MenuProps } from 'react-aria-components'

import { cn } from '@/lib/utils'

import { Menu } from './menu'

interface ContextMenuContextProps {
    triggerRef: React.RefObject<HTMLDivElement | null>
    contextMenuOffset: { offset: number; crossOffset: number } | null
    setContextMenuOffset: React.Dispatch<
        React.SetStateAction<{ offset: number; crossOffset: number } | null>
    >
}

const ContextMenuContext = React.createContext<ContextMenuContextProps>({
    triggerRef: React.createRef(),
    contextMenuOffset: null,
    setContextMenuOffset: () => {}
})

const useContextMenu = () => {
    const context = React.use(ContextMenuContext)
    if (!context) {
        throw new Error('useContextMenu must be used within a ContextMenu')
    }
    return context
}

interface ContextMenuProps {
    children: React.ReactNode
}

const ContextMenu = ({ children }: ContextMenuProps) => {
    const [contextMenuOffset, setContextMenuOffset] = React.useState<{
        offset: number
        crossOffset: number
    } | null>(null)
    const triggerRef = React.useRef<HTMLDivElement>(null)
    return (
        <ContextMenuContext.Provider
            value={{ triggerRef, contextMenuOffset, setContextMenuOffset }}
        >
            {children}
        </ContextMenuContext.Provider>
    )
}

const ContextMenuTrigger = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
    const { triggerRef, setContextMenuOffset } = useContextMenu()

    const onContextMenu = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault()
        const rect = e.currentTarget.getBoundingClientRect()
        setContextMenuOffset({
            offset: e.clientY - rect.bottom,
            crossOffset: e.clientX - rect.left
        })
    }
    return (
        <div
            className={cn('cursor-default outline-hidden disabled:opacity-50', className)}
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
        | 'showArrow'
        | 'isOpen'
        | 'onOpenChange'
        | 'triggerRef'
        | 'placement'
        | 'shouldFlip'
        | 'className'
    > {
    className?: string
}

const ContextMenuContent = <T extends object>(props: ContextMenuContentProps<T>) => {
    const { contextMenuOffset, setContextMenuOffset, triggerRef } = useContextMenu()
    return contextMenuOffset ? (
        <Menu.Content
            aria-label={props['aria-label'] ?? 'Context Menu'}
            isOpen={!!contextMenuOffset}
            offset={contextMenuOffset?.offset}
            crossOffset={contextMenuOffset?.crossOffset}
            onOpenChange={() => setContextMenuOffset(null)}
            triggerRef={triggerRef}
            placement='bottom left'
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
ContextMenu.Submenu = Menu.Submenu
ContextMenu.Header = Menu.Header

export { ContextMenu }
