'use client'

import type { Component } from '@/types/search'
import { motion } from 'motion/react'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { Header, ListBox, ListBoxItem, type ListBoxItemProps, ListBoxSection } from 'react-aria-components'
import menus from '@/components-search.json'
import { titleCase } from '@/lib/modifiers'
import { cn } from '@/lib/utils'

export type SidebarItem = {
  section: string
  children?: { title: string; slug: string }[]
}

export function Aside() {
  useEffect(() => {
    const activeElement = document.querySelector('.is-active')

    if (activeElement) {
      activeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      })
    }
  }, [])

  const gettingStarted = menus[0] as SidebarItem
  const darkModes = menus[1] as SidebarItem
  const components = menus[2] as Component

  const sections = [
    {
      title: 'Getting Started',
      items: gettingStarted.children
    },
    {
      title: 'Dark Modes',
      items: darkModes.children
    },
    {
      title: 'Components',
      items: [],
      sections: components.children?.map((section) => ({
        title: section.subsection,
        items: section.children ?? []
      }))
    }
  ]

  return (
    <aside className='scrollbar-fade sticky top-7 h-screen w-64 overflow-y-auto overflow-x-hidden py-16 pr-8 pl-0.5 transition xl:w-72'>
      {sections.map((section) => (
        <ListBox aria-label='Navigation' className='flex flex-col' key={section.title}>
          <ListBoxSection>
            <Header className='mt-4 mb-2 font-semibold text-foreground'>{titleCase(section.title)}</Header>
            {section.items?.map((item) => (
              <MenuLink href={item.slug} key={item.slug} textValue={item.title}>
                {item.title}
              </MenuLink>
            ))}
          </ListBoxSection>
          {section.sections?.map((section) => (
            <ListBoxSection key={section.title}>
              <Header className='mt-4 mb-2 font-semibold text-foreground'>{titleCase(section.title)}</Header>
              {section.items?.map((item) => (
                <MenuLink href={item.slug} key={item.slug} textValue={item.title}>
                  {item.title}
                </MenuLink>
              ))}
            </ListBoxSection>
          ))}
        </ListBox>
      ))}
    </aside>
  )
}

const MenuLink = ({ href, className, ...props }: ListBoxItemProps) => {
  const pathname = usePathname()
  const isActive = pathname === href
  return (
    <ListBoxItem
      className={cn(
        'group relative flex w-full items-center py-1.5 text-muted-foreground text-sm transition-colors hover:font-semibold hover:text-foreground',
        isActive && 'font-semibold text-foreground',
        className
      )}
      href={href}
      {...props}
    >
      {(values) => (
        <>
          {values.isHovered && (
            <motion.div
              className='h-4 w-1 rounded-full bg-muted-foreground'
              layoutId='nav-indicator'
              transition={{
                type: 'spring',
                stiffness: 500,
                damping: 30,
                duration: 0.2
              }}
            />
          )}
          <motion.span
            animate={{
              marginLeft: values.isHovered ? '6px' : '0'
            }}
            className='z-1 flex flex-row items-center gap-1.5'
            transition={{ duration: 0.2 }}
          >
            {typeof props.children === 'function' ? props.children(values) : props.children}
          </motion.span>
        </>
      )}
    </ListBoxItem>
  )
}
