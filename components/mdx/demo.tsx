"use client"

import { useEffect, useState } from "react"
import { toast } from "sonner"
import { IconPlaceholder } from "@/components/icon-placeholder"
import { previews } from "@/components/samples/generated/previews"
import { useStyle } from "@/components/style-provider"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogBody, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
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
  const { style } = useStyle()
  const Component = previews[component].component
  const [isOpen, setIsOpen] = useState(false)
  const [code, setCode] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const componentName = component.split("/").pop()

  useEffect(() => {
    if (!isOpen || code || isLoading) return
    setIsLoading(true)
    fetch(`/r/styles/${style}/${componentName}`)
      .then(async (res) => {
        if (!res.ok) throw new Error("Failed to load code")
        const data = await res.json()
        setCode(data.files[0].content)
      })
      .catch(() => {
        toast.error("Failed to load code")
      })
      .finally(() => setIsLoading(false))
  }, [style, code, isLoading, isOpen])

  return (
    <div
      className={cn(
        "group/demo cn-skeleton relative mt-2 overflow-hidden border bg-background shadow-sm",
        containerClassName
      )}
    >
      <div className="flex w-full items-center justify-between gap-1 overflow-hidden bg-accent/50 p-2 backdrop-blur-2xl">
        <Badge className="font-medium text-xs" variant="outline">
          {componentName}
        </Badge>
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
          <DialogContent className="sm:max-w-5xl">
            <DialogHeader>
              <DialogTitle>{component.split("/").pop()}</DialogTitle>
            </DialogHeader>
            <DialogBody>
              <div className="mb-2 space-y-2">
                <h3 className="font-medium text-sm">CLI</h3>
                <CLI command="add" items={`${component.split("/").pop()}`} />
              </div>
              <div className="space-y-2">
                <h3 className="font-medium text-sm">Manual Code</h3>
                {code ? (
                  <Code className="border shadow-sm" code={code} copy />
                ) : (
                  <div className="cn-skeleton h-64 w-full animate-pulse border" />
                )}
              </div>
            </DialogBody>
          </DialogContent>
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
