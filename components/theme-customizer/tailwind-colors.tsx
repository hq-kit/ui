"use client"

import { useRef } from "react"
import { Focusable } from "react-aria-components"
import { Tooltip } from "@/components/ui/tooltip"
import colors from "@/lib/themes/tailwind-colors.json"

type Props = {
  value?: string
  onChange?: (value: string) => void
}
function useGridNavigation(count: number, columns = 11) {
  const refs = useRef<HTMLButtonElement[]>([])

  return (index: number) => {
    const focus = (next: number) => {
      if (next < 0 || next >= count) return

      refs.current[next]?.focus()
    }

    return {
      ref: (el: HTMLButtonElement | null) => {
        if (el) refs.current[index] = el
      },
      tabIndex: index === 0 ? 0 : -1,
      onKeyDown: (e: React.KeyboardEvent) => {
        let next = index

        switch (e.key) {
          case "ArrowRight":
            next++
            break
          case "ArrowLeft":
            next--
            break
          case "ArrowDown":
            if (index === 0) {
              next = 1
            } else {
              next += columns
            }
            break
          case "ArrowUp":
            if (index === 1) {
              next = 0
            } else if (index < 13 && index !== 0) {
              next = 1
            } else {
              next -= columns
            }
            break
          case "Home":
            next = 0
            break
          case "End":
            next = count - 1
            break
          default:
            return
        }

        e.preventDefault()
        focus(next)
      }
    }
  }
}

export default function TailwindColorSwatch({ value, onChange }: Props) {
  const items = Object.entries(colors).flatMap(([name, set]) =>
    Array.isArray(set)
      ? set.map((color) => ({
          id: color.oklch,
          name: `${name}-${color}`
        }))
      : [{ id: set, name }]
  )

  const grid = useGridNavigation(items.length)

  return (
    <div className="grid grid-cols-11">
      {items.map((item, index) => (
        <Tooltip key={item.id + index}>
          <Focusable>
            <button
              {...grid(index)}
              aria-label={item.id}
              aria-pressed={value === item.id}
              className="focus:ring-ring h-3.25 w-full rounded-none border border-transparent outline-hidden focus:z-10 focus:border-white focus:ring-2"
              onClick={() => onChange?.(item.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault()
                  onChange?.(item.id)
                  return
                }

                grid(index).onKeyDown(e)
              }}
              style={{
                backgroundColor: item.id,
                border: value === item.id ? "1px solid black" : "none",
                gridColumn: index < 2 ? "1 / -1" : "span 1 / span 1"
              }}
              type="button"
            />
          </Focusable>
          <Tooltip.Content>{item.name}</Tooltip.Content>
        </Tooltip>
      ))}
    </div>
  )
}
