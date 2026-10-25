"use client"

import type { CSSProperties } from "react"
import { IconAlertOctagon, IconAlertTriangle, IconCircleCheck, IconInfoCircle, IconLoader } from "@tabler/icons-react"
import { Toaster as Sonner, type ToasterProps } from "sonner"
import { useTheme } from "@/stores/theme-store"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      className="toaster group"
      icons={{
        success: <IconCircleCheck className="size-4" />,
        info: <IconInfoCircle className="size-4" />,
        warning: <IconAlertTriangle className="size-4" />,
        error: <IconAlertOctagon className="size-4" />,
        loading: <IconLoader className="size-4 animate-spin" />
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--border-radius": "var(--radius)"
        } as CSSProperties
      }
      theme={theme as ToasterProps["theme"]}
      toastOptions={{
        classNames: {
          toast: "rounded-2xl"
        }
      }}
      {...props}
    />
  )
}

export { Toaster }
