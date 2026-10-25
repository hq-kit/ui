"use client"

import {
  IconAlertCircleFilled,
  IconAlertTriangleFilled,
  IconCircleCheckFilled,
  IconInfoCircleFilled,
  IconX,
  type TablerIcon
} from "@tabler/icons-react"
import { cn } from "cn"
import { type CSSProperties, type ReactNode, useRef } from "react"
import {
  Button,
  UNSTABLE_ToastContent as RACToastContent,
  Text,
  UNSTABLE_Toast as Toast,
  type ToastProps,
  UNSTABLE_ToastQueue as ToastQueue,
  UNSTABLE_ToastRegion as ToastRegion
} from "react-aria-components"
import { flushSync } from "react-dom"

export interface ToastOptions {
  description?: string
  duration?: number
  icon?: ReactNode
}

interface ToastData extends ToastOptions {
  title: string
  type: ToastType
  className?: string
}

const MAX_VISIBLE = 3
const STACK_SCALE = 8

export const toastQueue = new ToastQueue<ToastData>({
  maxVisibleToasts: MAX_VISIBLE,
  wrapUpdate(fn) {
    if ("startViewTransition" in document) {
      document.startViewTransition(() => {
        flushSync(fn)
      })
    } else {
      fn()
    }
  }
})

type ToastType = "success" | "error" | "info" | "warning" | "message"

type ToastFn = {
  (title: string, options?: ToastOptions): ReturnType<typeof addToast>

  success: (title: string, options?: ToastOptions) => ReturnType<typeof addToast>
  error: (title: string, options?: ToastOptions) => ReturnType<typeof addToast>
  info: (title: string, options?: ToastOptions) => ReturnType<typeof addToast>
  warning: (title: string, options?: ToastOptions) => ReturnType<typeof addToast>
  message: (title: string, options?: ToastOptions) => ReturnType<typeof addToast>

  dismiss: (key: string) => void
  dismissAll: () => void
  pause: () => void
  resume: () => void
}

export const toast: ToastFn = Object.assign(
  (title: string, options: ToastOptions = {}) => addToast("message", title, options),
  {
    success: (title: string, options: ToastOptions = {}) => addToast("success", title, options),
    error: (title: string, options: ToastOptions = {}) => addToast("error", title, options),
    info: (title: string, options: ToastOptions = {}) => addToast("info", title, options),
    warning: (title: string, options: ToastOptions = {}) => addToast("warning", title, options),
    message: (title: string, options: ToastOptions = {}) => addToast("message", title, options),
    dismiss: (key: string) => toastQueue.close(key),
    dismissAll: () => toastQueue.clear(),
    pause: () => toastQueue.pauseAll(),
    resume: () => toastQueue.resumeAll()
  }
)

function addToast(type: ToastType, title: string, options: ToastOptions) {
  return toastQueue.add(
    {
      title,
      description: options.description,
      type,
      icon: options.icon
    },
    {
      timeout: options.duration ?? 5000
    }
  )
}

export function Toaster() {
  return (
    <>
      <ToastRegion
        aria-label="Notifications"
        className="group fixed right-6 bottom-6 z-100 w-[calc(100vw-2.5rem)] sm:w-90"
        onMouseEnter={toast.pause}
        onMouseLeave={toast.resume}
        onTouchEnd={toast.resume}
        onTouchStart={toast.pause}
        queue={toastQueue}
      >
        {({ toast }) => {
          const visibleToasts = toastQueue.visibleToasts
          const index = visibleToasts.findIndex((visible) => visible.key === toast.key)
          const stackIndex = Math.max(0, visibleToasts.length - 1 - index)
          return (
            <ToastItem stackIndex={stackIndex} toast={toast} visibleToasts={visibleToasts.length}>
              <ToastContent data={toast.content} />
            </ToastItem>
          )
        }}
      </ToastRegion>
      <style>{` ::view-transition-new(.toast):only-child { animation: slide-in 200ms; } ::view-transition-old(.toast):only-child { animation: slide-out 200ms; animation-fill-mode: forwards; } @keyframes slide-out { to { translate: 0 100%; opacity: 0; visibility: hidden; } } @keyframes slide-in { from { translate: 0 100%; opacity: 0; } } `}</style>
    </>
  )
}

function ToastContent({ data }: { data: ToastData }) {
  const { icon: Icon, color, backgroundColor, borderColor } = getColor(data.type)
  return (
    <RACToastContent className="relative">
      <div className="group/toast-body relative grid w-full gap-0.5 rounded-lg text-left text-sm has-[>svg]:grid-cols-[auto_1fr] has-[>svg]:gap-x-2 has-[button]:relative has-[button]:pr-18 *:[svg]:row-span-2 *:[svg:not([class*='size-'])]:size-5">
        {Icon && <Icon style={{ color: color }} />}
        <div className="min-w-0 flex-1 space-y-1">
          <Text
            className="[&_a]:hover:text-foreground leading-0 font-medium group-has-[>svg]/toast-body:col-start-2 [&_a]:underline [&_a]:underline-offset-3"
            slot="title"
          >
            {data.title}
          </Text>

          {data.description && (
            <Text
              className="text-muted-foreground [&_a]:hover:text-foreground text-sm text-balance md:text-pretty [&_a]:underline [&_a]:underline-offset-3 [&_p:not(:last-child)]:mb-4"
              slot="description"
            >
              {data.description}
            </Text>
          )}
        </div>
      </div>
      <Button
        aria-label="Tutup notifikasi"
        className="focus-visible:ring-ring absolute -top-6 -left-6 grid size-5 place-items-center rounded-full border opacity-100 shadow-sm transition focus-visible:opacity-100 focus-visible:ring-2 focus-visible:outline-none data-pressed:translate-y-px sm:opacity-0 sm:group-hover:opacity-100"
        slot="close"
        style={{ borderColor: borderColor, backgroundColor: backgroundColor }}
      >
        <IconX size={12} style={{ color: color }} />
      </Button>
    </RACToastContent>
  )
}

export function ToastItem(props: ToastProps<ToastData> & { visibleToasts: number; stackIndex: number }) {
  const { visibleToasts, stackIndex, toast } = props
  const pointerStart = useRef<{ x: number; y: number } | null>(null)
  const elementRef = useRef<HTMLDivElement>(null)

  const onPointerDown = (e: React.PointerEvent) => {
    // Abaikan klik selain klik kiri mouse
    if (e.pointerType === "mouse" && e.button !== 0) return
    pointerStart.current = {
      x: e.clientX,
      y: e.clientY
    }
    // Menangkap pointer agar event tetap terpantau meski kursor keluar dari elemen
    e.currentTarget.setPointerCapture(e.pointerId)
  }

  const onPointerMove = (e: React.PointerEvent) => {
    if (!pointerStart.current || !elementRef.current) return
    const dx = e.clientX - pointerStart.current.x
    const dy = e.clientY - pointerStart.current.y

    // Geser hanya jika gerakan horizontal lebih dominan
    if (Math.abs(dx) > Math.abs(dy)) {
      elementRef.current.style.transform = `translateX(${dx}px)`
      elementRef.current.style.opacity = `${Math.max(0, 1 - Math.abs(dx) / 250)}`
    }
  }

  const onPointerUp = (e: React.PointerEvent) => {
    const start = pointerStart.current
    pointerStart.current = null

    if (!start || !elementRef.current) return

    const dx = e.clientX - start.x
    const dy = e.clientY - start.y

    elementRef.current.style.transition = "transform 50ms ease, opacity 50ms ease"

    if (Math.abs(dx) > 100 && Math.abs(dx) > Math.abs(dy)) {
      const direction = dx > 0 ? 1 : -1
      elementRef.current.style.transform = `translateX(${direction * 100}%)`
      elementRef.current.style.opacity = "0"

      setTimeout(() => {
        toastQueue.close(toast.key)
      }, 200)
    } else {
      elementRef.current.style.transform = ""
      elementRef.current.style.opacity = ""
    }

    try {
      e.currentTarget.releasePointerCapture(e.pointerId)
    } catch {}
  }

  return (
    <Toast
      onPointerCancel={onPointerUp}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      ref={elementRef}
      {...props}
      className={cn(
        "pointer-events-auto absolute right-0 bottom-0 flex w-full items-center rounded-lg p-4 shadow-sm transition duration-300 ease-out select-none motion-reduce:transition-none",
        `[view-transition-class:toast]`,
        "-translate-y-(--stack-margin) scale-(--stack-scale) group-hover:-translate-y-(--stack-margin-hover) group-hover:scale-100"
      )}
      data-variant={toast.content.type}
      style={
        {
          "--stack-scale": `${100 - Number(visibleToasts - 1 - stackIndex) * STACK_SCALE}%`,
          "--stack-margin": `${Number(visibleToasts - 1 - stackIndex) * 20}px`,
          "--stack-margin-hover": `${Number(visibleToasts - 1 - stackIndex) * 65}px`,
          zIndex: visibleToasts + stackIndex,
          viewTransitionName: toast.key,

          backgroundColor: getColor(toast.content.type).backgroundColor,
          color: getColor(toast.content.type).color,
          border: `1px solid ${getColor(toast.content.type).borderColor}`
        } as CSSProperties
      }
    />
  )
}

const getColor = (
  type: ToastType
): {
  backgroundColor: string
  color: string
  borderColor: string
  icon?: TablerIcon | null
} => {
  switch (type) {
    case "error":
      return {
        backgroundColor: "oklch(from var(--destructive) 1 calc(c * 0.15) h)",
        color: "var(--destructive)",
        borderColor: "oklch(from var(--destructive) 1 calc(c * 0.60) h)",
        icon: IconAlertCircleFilled
      }
    case "success":
      return {
        backgroundColor: "oklch(from var(--success) 1 calc(c * 0.15) h)",
        color: "var(--success)",
        borderColor: "oklch(from var(--success) 1 calc(c * 0.90) h)",
        icon: IconCircleCheckFilled
      }
    case "warning":
      return {
        backgroundColor: "oklch(from var(--warning) 1 calc(c * 0.10) h)",
        color: "var(--warning)",
        borderColor: "oklch(from var(--warning) 1 calc(c * 0.10) h)",
        icon: IconAlertTriangleFilled
      }
    case "info":
      return {
        backgroundColor: "oklch(from var(--info) 1 calc(c * 0.15) h)",
        color: "var(--info)",
        borderColor: "oklch(from var(--info) 1 calc(c * 0.60) h)",
        icon: IconInfoCircleFilled
      }
    case "message":
      return {
        backgroundColor: "var(--popover)",
        color: "var(--popover-foreground)",
        borderColor: "var(--border)"
      }
  }
}
