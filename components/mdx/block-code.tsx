"use client"

import { type HTMLAttributes, type ReactNode, useCallback, useRef } from "react"
import { CopyButton } from "@/components/mdx/copy-button"
import { FileIcon } from "@/components/mdx/file-icon"
import { useCopyButton } from "@/hooks/use-copy"
import { cn } from "@/lib/utils"

export type PreProps = HTMLAttributes<HTMLPreElement> & {
  copy?: boolean
  icon?: string | ReactNode
}

export const BlockCode = ({ className, title, copy = true, ...props }: PreProps) => {
  const areaRef = useRef<HTMLDivElement>(null)
  const onCopy = useCallback(() => {
    const pre = areaRef.current?.getElementsByTagName("pre").item(0)

    if (!pre) return

    const clone = pre.cloneNode(true) as HTMLElement
    for (const node of clone.querySelectorAll(".nd-copy-ignore")) {
      node.remove()
    }
    void navigator.clipboard.writeText(clone.textContent ?? "")
  }, [])
  const [checked, onClick] = useCopyButton(onCopy)
  return (
    <figure
      {...props}
      className={cn(
        "not-prose cn-skeleton relative my-4 overflow-hidden text-sm shadow-sm",
        "border bg-shiki-bg dark:bg-shiki-dark-bg",
        !title && "cn-item-size-sm flex flex-row-reverse items-center pr-0",
        className
      )}
      ref={areaRef}
    >
      {title ? (
        <div className="cn-item-size-sm flex w-full flex-row items-center border-b bg-accent text-accent-foreground">
          <FileIcon className="size-4 text-muted-foreground" lang={title.split(".").at(-1) ?? ""} />
          <figcaption className="flex-1 truncate text-muted-foreground">{title}</figcaption>
          {copy ? (
            <CopyButton className="cn-alert-action z-10" data-icon="inline-end" isCopied={checked} onPress={onClick} />
          ) : null}
        </div>
      ) : (
        copy && (
          <CopyButton
            className="cn-alert-action top-2.5 z-10"
            data-icon="inline-end"
            isCopied={checked}
            onPress={onClick}
          />
        )
      )}
      <pre
        className={cn(
          "peer max-h-64 w-full overflow-auto px-0 leading-relaxed focus-visible:outline-hidden **:[code]:bg-transparent **:[code]:p-0",
          "[&::-webkit-scrollbar-thumb]:rounded-lg [&::-webkit-scrollbar-thumb]:bg-muted-foreground/20 [&::-webkit-scrollbar-track]:rounded-lg [&::-webkit-scrollbar-track]:bg-muted [&::-webkit-scrollbar]:size-1.5 [&::-webkit-scrollbar]:bg-transparent",
          title ? "py-2" : "py-0"
        )}
      >
        {props.children}
      </pre>
    </figure>
  )
}
