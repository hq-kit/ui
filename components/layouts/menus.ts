import type { Component } from '@/types/search'
import list from '@/components-search.json'

export type MenuItem = {
  section: string
  children?: { title: string; slug: string }[]
}

export function menus() {
  const gettingStarted = list[0] as MenuItem
  const frameworkGuides = list[1] as MenuItem
  const darkModes = list[2] as MenuItem
  const components = list[3] as Component

  return [
    {
      title: 'Getting Started',
      items: gettingStarted.children
    },
    {
      title: 'Framework Guides',
      items: frameworkGuides.children
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
}
