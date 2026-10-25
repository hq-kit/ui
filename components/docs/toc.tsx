"use client"

import { cn } from "cn"
import { LayoutGroup, motion } from "motion/react"
import { Suspense, useEffect, useId, useMemo, useRef, useState } from "react"

export interface Item {
  title: string
  url: string
  items: Item[]
}

interface TocProps {
  className?: string
  context?: "docs" | "blog"
  items: Item[]
}

interface FlatItem extends Item {
  depth: number
}

function flattenItems(items: Item[], depth = 0): FlatItem[] {
  return items.flatMap((item) => [{ ...item, depth }, ...flattenItems(item.items ?? [], depth + 1)])
}

function getId(url: string) {
  return decodeURIComponent(url.split("#")[1] ?? "")
}

export function Toc({ className, items }: TocProps) {
  const navRef = useRef<HTMLElement>(null)
  const flatItems = useMemo(() => flattenItems(items), [items])
  const ids = useMemo(() => flatItems.map((item) => getId(item.url)).filter(Boolean), [flatItems])
  const activeId = useActiveItem(ids)
  const activeIndex = ids.indexOf(activeId ?? "")
  const id = useId()
  const minDepth = flatItems.reduce((min, item) => Math.min(min, item.depth), Infinity)

  useEffect(() => {
    if (!activeId || activeIndex < 2) return

    const nav = navRef.current
    const anchor = nav?.querySelector<HTMLAnchorElement>(`a[href="#${CSS.escape(activeId)}"]`)

    if (!nav || !anchor) return

    const anchorRect = anchor.getBoundingClientRect()
    const navRect = nav.getBoundingClientRect()

    nav.scrollTo({
      top: nav.scrollTop + anchorRect.top - navRect.top - (nav.clientHeight - anchorRect.height) / 2,
      behavior: "smooth"
    })
  }, [activeId, activeIndex])

  return (
    <LayoutGroup id={id}>
      <aside className="w-80">
        <nav
          aria-labelledby={`${id}-title`}
          className="scrollbar-none scroll-fade-y relative h-[calc(100vh-22rem)] overflow-y-auto p-6"
          ref={navRef}
        >
          <Suspense>
            {flatItems.length > 0 && (
              <>
                <h2 className="mb-4 text-muted-foreground text-sm/6" id={`${id}-title`}>
                  On this page
                </h2>

                <ul className="flex flex-col gap-y-2.5">
                  {flatItems.map((item) => (
                    <TocLink activeId={activeId} item={item} key={item.url} minDepth={minDepth} />
                  ))}
                </ul>
              </>
            )}
          </Suspense>
        </nav>
      </aside>
    </LayoutGroup>
  )
}

interface TocLinkProps {
  item: FlatItem
  activeId: string | null
  minDepth: number
}

function TocLink({ item, activeId, minDepth }: TocLinkProps) {
  const isActive = getId(item.url) === activeId

  return (
    <li className="relative">
      {isActive && (
        <motion.span
          className="absolute top-1/2 -left-6 hidden h-6 w-0.5 -translate-y-1/2 rounded-full bg-primary md:block"
          layoutId="currentIndicator"
          transition={{
            type: "spring",
            stiffness: 450,
            damping: 35,
            mass: 0.8
          }}
        />
      )}

      <a
        aria-current={isActive ? "location" : undefined}
        className={cn(
          "block text-sm/6 tracking-tight no-underline outline-hidden duration-200",
          "focus-visible:text-primary focus-visible:outline-hidden",
          "text-muted-foreground/90 data-[active=true]:text-primary"
        )}
        data-active={isActive}
        href={item.url}
        style={{
          marginLeft: (item.depth - minDepth) * 16
        }}
      >
        {item.title}
      </a>
    </li>
  )
}

function useActiveItem(itemIds: string[]) {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const elements = itemIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null)

    if (!elements.length) return

    let ticking = false

    const updateActiveItem = () => {
      ticking = false

      // Garis aktivasi berada sekitar 25% dari atas viewport.
      const activationLine = window.innerHeight * 0.1

      let currentId = elements[0].id

      for (const element of elements) {
        if (element.getBoundingClientRect().top <= activationLine) {
          currentId = element.id
        } else {
          break
        }
      }

      setActiveId((previous) => (previous === currentId ? previous : currentId))
    }

    const scheduleUpdate = () => {
      if (ticking) return

      ticking = true
      requestAnimationFrame(updateActiveItem)
    }

    window.addEventListener("scroll", scheduleUpdate, { passive: true })
    window.addEventListener("resize", scheduleUpdate)

    updateActiveItem()

    return () => {
      window.removeEventListener("scroll", scheduleUpdate)
      window.removeEventListener("resize", scheduleUpdate)
    }
  }, [itemIds])

  return activeId
}
