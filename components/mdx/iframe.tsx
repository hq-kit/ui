"use client"

import type { Key } from "react-aria-components"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { toast } from "sonner"
import { IconPlaceholder } from "@/components/icon-placeholder"
import { Install } from "@/components/mdx/install"
import { useStyle } from "@/components/style-provider"
import { cn } from "@/lib/utils"
import { Badge } from "../ui/badge"
import { Button, buttonVariants } from "../ui/button"
import { Dialog, DialogBody, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog"
import { ToggleGroup } from "../ui/toggle-group"

export function Iframe({ component }: { component: string }) {
  const { style } = useStyle()
  const [screenWidth, setScreenWidth] = useState(new Set<Key>(["max-w-none"]))
  const [isVisible, setIsVisible] = useState(false)
  const frameRef = useRef<HTMLDivElement | null>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [code, setCode] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (!isOpen || code || isLoading) return
    setIsLoading(true)
    fetch(`/r/styles/${style}/${component}`)
      .then(async (res) => {
        if (!res.ok) throw new Error("Failed to load code")
        const data = await res.json()
        setCode(data.files[0].content)
      })
      .catch(() => {
        toast.error("Failed to load code.")
      })
      .finally(() => setIsLoading(false))
  }, [style, code, isLoading, isOpen])

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
    <div className="group/demo cn-card relative overflow-hidden py-0">
      <div className="flex h-0 w-full items-center justify-between gap-1 overflow-hidden bg-accent/50 backdrop-blur-2xl transition-[height,padding] group-hover/demo:h-12 group-hover/demo:p-2">
        <Badge className="font-medium text-xs" variant="outline">
          {component.split("/").pop()}
        </Badge>
        <div className="hidden gap-1 sm:flex">
          <ToggleGroup
            onSelectionChange={setScreenWidth}
            selectedKeys={screenWidth}
            selectionMode="single"
            size="sm"
            spacing={0}
            variant="outline"
          >
            <ToggleGroup.Item id="max-w-sm">
              <IconPlaceholder
                hugeicons="SmartPhone01Icon"
                lucide="SmartphoneIcon"
                phosphor="DeviceMobileIcon"
                remixicon="RiSmartphoneLine"
                tabler="IconDeviceMobile"
              />
            </ToggleGroup.Item>
            <ToggleGroup.Item id="max-w-3xl">
              <IconPlaceholder
                hugeicons="Tablet01Icon"
                lucide="TabletIcon"
                phosphor="DeviceTabletIcon"
                remixicon="RiTabletLine"
                tabler="IconDeviceTablet"
              />
            </ToggleGroup.Item>
            <ToggleGroup.Item id="max-w-none">
              <IconPlaceholder
                hugeicons="ComputerIcon"
                lucide="MonitorIcon"
                phosphor="DesktopIcon"
                remixicon="RiComputerLine"
                tabler="IconDeviceDesktop"
              />
            </ToggleGroup.Item>
          </ToggleGroup>
          <Dialog isOpen={isOpen} onOpenChange={setIsOpen}>
            <Button size="icon-sm" variant="outline">
              <IconPlaceholder
                hugeicons="CodeXmlIcon"
                lucide="CodeXmlIcon"
                phosphor="CodeIcon"
                remixicon="RiCodeSSlashLine"
                tabler="IconCode"
              />
            </Button>
            <DialogContent className="sm:max-w-7xl">
              <DialogHeader>
                <DialogTitle>{component.split("/").pop()}</DialogTitle>
              </DialogHeader>
              <DialogBody>
                <Install component={component.split("/").pop() || ""} />
              </DialogBody>
            </DialogContent>
          </Dialog>
          <Link
            className={buttonVariants({
              variant: "outline",
              size: "icon-sm"
            })}
            href={`/block/${component}`}
            target="_blank"
          >
            <IconPlaceholder
              hugeicons="FullScreenIcon"
              lucide="MaximizeIcon"
              phosphor="CornersOutIcon"
              remixicon="RiFullscreenLine"
              tabler="IconMaximize"
            />
          </Link>
        </div>
      </div>
      {/** biome-ignore lint/a11y/noStaticElementInteractions: false-positive */}
      <div
        className="relative flex min-h-56 w-full items-center bg-background lg:min-h-80"
        onMouseEnter={() => setIsVisible(true)}
        ref={frameRef}
      >
        <iframe
          allowFullScreen
          className={cn("relative z-20 w-full overflow-hidden", [...screenWidth].flat())}
          height={768}
          loading="lazy"
          src={isVisible ? `/block/${component}` : undefined}
          style={{ zoom: 0.95 }}
          title="Preview"
        />
      </div>
    </div>
  )
}
