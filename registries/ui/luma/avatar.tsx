"use client"

import { type ComponentProps, createContext, type Dispatch, type SetStateAction, use, useEffect, useState } from "react"
import { cn } from "@/lib/utils"

type ImageLoadingStatus = "idle" | "loading" | "loaded" | "error"

type AvatarContextValue = {
  status: ImageLoadingStatus
  setStatus: Dispatch<SetStateAction<ImageLoadingStatus>>
}

const AvatarContext = createContext<AvatarContextValue | null>(null)

function useAvatarContext(component: string) {
  const context = use(AvatarContext)
  if (!context) {
    throw new Error(`<${component}> must be used within an <Avatar>`)
  }
  return context
}

const Avatar = ({ className, size, ...props }: ComponentProps<"span"> & { size?: "default" | "sm" | "lg" }) => {
  const [status, setStatus] = useState<ImageLoadingStatus>("idle")

  return (
    <AvatarContext.Provider value={{ status, setStatus }}>
      <span
        className={cn(
          "size-8 rounded-full after:rounded-full data-[size=lg]:size-10 data-[size=sm]:size-6 group/avatar relative flex shrink-0 select-none after:absolute after:inset-0 after:border after:border-border after:mix-blend-darken dark:after:mix-blend-lighten",
          className
        )}
        data-size={size}
        data-slot="avatar"
        data-status={status}
        {...props}
      />
    </AvatarContext.Provider>
  )
}

interface AvatarImageProps extends ComponentProps<"img"> {
  onLoadingStatusChange?: (status: ImageLoadingStatus) => void
}

const AvatarImage = ({
  className,
  src,
  referrerPolicy,
  crossOrigin,
  onLoadingStatusChange,
  ...props
}: AvatarImageProps) => {
  const { status, setStatus } = useAvatarContext("AvatarImage")

  useEffect(() => {
    if (!src) {
      setStatus("error")
      return
    }

    let isMounted = true
    setStatus("loading")

    const image = new window.Image()
    image.src = src as string
    if (referrerPolicy) image.referrerPolicy = referrerPolicy
    if (typeof crossOrigin === "string") image.crossOrigin = crossOrigin

    const handleLoad = () => {
      if (isMounted) setStatus("loaded")
    }
    const handleError = () => {
      if (isMounted) setStatus("error")
    }

    image.addEventListener("load", handleLoad)
    image.addEventListener("error", handleError)

    return () => {
      isMounted = false
      image.removeEventListener("load", handleLoad)
      image.removeEventListener("error", handleError)
    }
  }, [src, referrerPolicy, crossOrigin, setStatus])

  useEffect(() => {
    onLoadingStatusChange?.(status)
  }, [status, onLoadingStatusChange])

  if (status !== "loaded") return null

  return (
    <img
      alt={props?.alt ?? ""}
      className={cn("rounded-full aspect-square size-full object-cover", className)}
      crossOrigin={crossOrigin}
      data-slot="avatar-image"
      referrerPolicy={referrerPolicy}
      src={src}
      {...props}
    />
  )
}

interface AvatarFallbackProps extends ComponentProps<"span"> {
  delayMs?: number
}

const AvatarFallback = ({ className, delayMs, ...props }: AvatarFallbackProps) => {
  const { status } = useAvatarContext("AvatarFallback")
  const [canRender, setCanRender] = useState(delayMs === undefined)

  useEffect(() => {
    if (delayMs === undefined) return
    const timer = window.setTimeout(() => setCanRender(true), delayMs)
    return () => window.clearTimeout(timer)
  }, [delayMs])

  if (status === "loaded" || !canRender) return null

  return (
    <span
      className={cn(
        "bg-muted text-muted-foreground rounded-full flex size-full items-center justify-center text-sm group-data-[size=sm]/avatar:text-xs",
        className
      )}
      data-slot="avatar-fallback"
      {...props}
    />
  )
}

const AvatarBadge = ({ className, ...props }: ComponentProps<"span">) => (
  <span
    className={cn(
      "bg-primary text-primary-foreground ring-background absolute right-0 bottom-0 z-10 inline-flex select-none items-center justify-center rounded-full bg-blend-color ring-2",
      "group-data-[size=sm]/avatar:size-2 group-data-[size=sm]/avatar:[&>svg]:hidden",
      "group-data-[size=default]/avatar:size-2.5 group-data-[size=default]/avatar:[&>svg]:size-2",
      "group-data-[size=lg]/avatar:size-3 group-data-[size=lg]/avatar:[&>svg]:size-2",
      className
    )}
    data-slot="avatar-badge"
    {...props}
  />
)

const AvatarGroup = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn(
      "group/avatar-group flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background",
      className
    )}
    data-slot="avatar-group"
    {...props}
  />
)

const AvatarGroupCount = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn(
      "bg-muted text-muted-foreground size-8 rounded-full text-sm group-has-data-[size=lg]/avatar-group:size-10 group-has-data-[size=sm]/avatar-group:size-6 [&>svg]:size-4 group-has-data-[size=lg]/avatar-group:[&>svg]:size-5 group-has-data-[size=sm]/avatar-group:[&>svg]:size-3 relative flex shrink-0 items-center justify-center ring-2 ring-background",
      className
    )}
    data-slot="avatar-group-count"
    {...props}
  />
)

Avatar.Image = AvatarImage
Avatar.Fallback = AvatarFallback
Avatar.Badge = AvatarBadge
Avatar.Group = AvatarGroup
Avatar.GroupCount = AvatarGroupCount

export { Avatar, AvatarBadge, AvatarFallback, AvatarGroup, AvatarGroupCount, AvatarImage }
