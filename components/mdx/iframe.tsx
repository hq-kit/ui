"use client"

import type { Key } from "react-aria-components"
import { IconCode, IconDeviceDesktop, IconDeviceMobile, IconDeviceTablet, IconMaximize } from "@tabler/icons-react"
import { cn } from "cn"
import { useEffect, useRef, useState } from "react"
import { toast } from "sonner"
import { Install } from "@/components/mdx/install"
import { Badge } from "@/components/ui/badge"
import { Button, LinkButton } from "@/components/ui/button"
import { Dialog } from "@/components/ui/dialog"
import { ToggleGroup } from "@/components/ui/toggle"

export function Iframe({ component }: { component: string }) {
  const [screenWidth, setScreenWidth] = useState(new Set<Key>(["max-w-none"]))
  const [isVisible, setIsVisible] = useState(false)
  const frameRef = useRef<HTMLDivElement | null>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [code, setCode] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (!isOpen || code || isLoading) return
    setIsLoading(true)
    fetch(`/r/${component}`)
      .then(async (res) => {
        if (!res.ok) throw new Error("Failed to load code")
        const data = await res.json()
        setCode(data.files[0].content)
      })
      .catch(() => {
        toast.error("Failed to load code.")
      })
      .finally(() => setIsLoading(false))
  }, [code, isLoading, isOpen, component])

  useEffect(() => {
    const element = frameRef.current
    if (!element || isVisible) return
    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true)
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry?.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: "200px 0px" }
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [isVisible])

  return (
    <div className="group/demo bg-card relative overflow-hidden rounded-lg py-0">
      <div className="bg-accent flex h-0 w-full items-center justify-between gap-1 overflow-hidden backdrop-blur-2xl transition-[height,padding] group-hover/demo:h-12 group-hover/demo:p-2">
        <Badge className="text-xs font-medium" variant="default">
          {component.split("/").pop()}
        </Badge>
        <div className="hidden gap-1 sm:flex">
          <ToggleGroup
            className={"bg-background/60"}
            onSelectionChange={setScreenWidth}
            selectedKeys={screenWidth}
            selectionMode="single"
            size="sm"
            spacing={0}
            variant="outline"
          >
            <ToggleGroup.Item id="max-w-sm">
              <IconDeviceMobile />
            </ToggleGroup.Item>
            <ToggleGroup.Item id="max-w-3xl">
              <IconDeviceTablet />
            </ToggleGroup.Item>
            <ToggleGroup.Item id="max-w-none">
              <IconDeviceDesktop />
            </ToggleGroup.Item>
          </ToggleGroup>
          <Dialog isOpen={isOpen} onOpenChange={setIsOpen}>
            <Button size="icon-sm" variant="secondary">
              <IconCode />
            </Button>
            <Dialog.Content className="sm:max-w-7xl">
              <Dialog.Header>
                <Dialog.Title>{component.split("/").pop()}</Dialog.Title>
              </Dialog.Header>
              <div className="no-scrollbar -mx-4 max-h-[70vh] overflow-y-auto px-4">
                <Install component={component.split("/").pop() || ""} />
              </div>
            </Dialog.Content>
          </Dialog>
          <LinkButton href={`/block/${component}`} size={"icon-sm"} target="_blank" variant={"secondary"}>
            <IconMaximize />
          </LinkButton>
        </div>
      </div>
      {/** biome-ignore lint/a11y/noStaticElementInteractions: false-positive */}
      <section
        className="bg-background relative flex min-h-56 w-full items-center lg:min-h-80"
        onMouseEnter={() => setIsVisible(true)}
        ref={frameRef}
      >
        <iframe
          allowFullScreen
          className={cn("relative z-20 w-full overflow-hidden", [...screenWidth].flat())}
          height={768}
          loading="lazy"
          src={isVisible ? `/block/${component}` : undefined}
          style={{ zoom: 0.8 }}
          title="Preview"
        />
      </section>
    </div>
  )
}
