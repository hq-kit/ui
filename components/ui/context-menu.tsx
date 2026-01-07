'use client'

import type { MenuProps } from 'react-aria-components'
import {
  type ComponentPropsWithRef,
  createContext,
  createRef,
  type Dispatch,
  type MouseEvent,
  type ReactNode,
  type RefObject,
  type SetStateAction,
  use,
  useRef,
  useState
} from 'react'
import { cn } from '@/lib/utils'
import { DropdownMenu, DropdownMenuContent } from './dropdown-menu'

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

const ContextMenuTrigger = ({ className, ...props }: ComponentPropsWithRef<'div'>) => {
  const { setContextMenuOffset, triggerRef } = useContextMenu()
  const areaRef = useRef<HTMLDivElement>(null)

  const onContextMenu = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    const rect = e.currentTarget.getBoundingClientRect()
    triggerRef.current = areaRef.current
    setContextMenuOffset({
      offset: e.clientY - rect.bottom,
      crossOffset: e.clientX - rect.left
    })
  }
  return (
    <div
      aria-haspopup='menu'
      className={cn('relative cursor-default select-none outline-hidden disabled:opacity-50', className)}
      onContextMenu={onContextMenu}
      ref={areaRef}
      role='none'
      {...props}
    />
  )
}

type ContextMenuContentProps<T> = Omit<
  MenuProps<T>,
  'showArrow' | 'isOpen' | 'onOpenChange' | 'triggerRef' | 'placement' | 'shouldFlip' | 'className'
>

const ContextMenuContent = <T extends object>(props: Omit<ContextMenuContentProps<T>, 'style'>) => {
  const { contextMenuOffset, setContextMenuOffset, triggerRef } = useContextMenu()
  return contextMenuOffset ? (
    <DropdownMenuContent
      aria-label={props['aria-label'] ?? 'Context Menu'}
      crossOffset={contextMenuOffset?.crossOffset}
      isOpen={!!contextMenuOffset}
      offset={contextMenuOffset?.offset ?? 0}
      onClose={() => setContextMenuOffset(null)}
      onOpenChange={() => setContextMenuOffset(null)}
      placement='bottom left'
      triggerRef={triggerRef}
      {...props}
    />
  ) : null
}

ContextMenu.Trigger = ContextMenuTrigger
ContextMenu.Content = ContextMenuContent

const ContextMenuItem = DropdownMenu.Item
const ContextMenuSeparator = DropdownMenu.Separator
const ContextMenuGroup = DropdownMenu.Group
const ContextMenuLabel = DropdownMenu.Label
const ContextMenuSub = DropdownMenu.Sub
const ContextMenuSubTrigger = DropdownMenu.SubTrigger
const ContextMenuSubContent = DropdownMenu.SubContent

ContextMenu.Item = ContextMenuItem
ContextMenu.Separator = ContextMenuSeparator
ContextMenu.Group = ContextMenuGroup
ContextMenu.Label = ContextMenuLabel
ContextMenu.Sub = ContextMenuSub
ContextMenu.SubTrigger = ContextMenuSubTrigger
ContextMenu.SubContent = ContextMenuSubContent

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuLabel,
  ContextMenuItem,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuSeparator
}
