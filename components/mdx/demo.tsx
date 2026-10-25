"use client"

import { IconCode } from "@tabler/icons-react"
import { cn } from "cn"
import { useEffect, useState } from "react"
import { previews } from "@/components/samples/generated/previews"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog } from "@/components/ui/dialog"
import { siteConfig } from "@/config/site"
import { CLI } from "./cli"
import { Code } from "./code-client"

export function Demo({
  component,
  containerClassName,
  className
}: {
  component: string
  containerClassName?: string
  className?: string
}) {
  const Component = previews[component]?.component
  const [isOpen, setIsOpen] = useState(false)
  const [code, setCode] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const componentName = component.split("/").pop()

  useEffect(() => {
    if (!isOpen || code || isLoading) return
    setIsLoading(true)
    fetch(`${siteConfig.url}/r/${componentName}`)
      .then(async (res) => {
        if (!res.ok) throw new Error("Failed to load code")
        const data = await res.json()
        setCode(data.files[0].content)
      })
      .catch(() => {
        console.error("Failed to load code")
      })
      .finally(() => setIsLoading(false))
  }, [code, isLoading, isOpen, componentName])

  return (
    <div className={cn("group/demo bg-background relative mt-2 overflow-hidden rounded-lg border", containerClassName)}>
      <div className="bg-muted flex w-full items-center justify-between gap-1 overflow-hidden px-2 py-1 backdrop-blur-2xl">
        <Badge className="text-xs font-medium">{componentName}</Badge>
        <Dialog isOpen={isOpen} onOpenChange={setIsOpen}>
          <Button size="icon-sm" variant="outline">
            <IconCode />
          </Button>
          <Dialog.Content className="sm:max-w-5xl">
            <Dialog.Header>
              <Dialog.Title>{component.split("/").pop()}</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <div className="mb-2 space-y-2">
                <h3 className="text-sm font-medium">CLI</h3>
                <CLI command="add" items={`${component.split("/").pop()}`} />
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Manual Code</h3>
                {code ? (
                  <Code code={code} copy />
                ) : (
                  <div className="bg-muted h-64 w-full animate-pulse rounded-lg border" />
                )}
              </div>
            </Dialog.Body>
          </Dialog.Content>
        </Dialog>
      </div>
      <div
        className={cn(
          "relative flex min-h-52 items-center justify-center px-8 py-12 has-data-[slot=card]:w-full has-data-[slot=chart]:p-2! has-data-[slot=command]:p-0! has-data-[slot=chart]:**:data-[slot=card]:w-full max-sm:px-4",
          className
        )}
      >
        <Component />
      </div>
    </div>
  )
}
