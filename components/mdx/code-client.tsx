"use client"

import { cn } from "cn"
import { useEffect, useMemo, useState } from "react"
import { copyToClipboard } from "@/lib/modifiers"
import { CopyButton } from "./copy-button"

export interface CodeClientProps {
  lang?: string
  code: string
  className?: string
  copy?: boolean
}

const cache = new Map<string, string>()

export const Code = ({ code, lang = "tsx", className, copy = false, ...props }: CodeClientProps) => {
  const [formattedCode, setFormattedCode] = useState<string>("")
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const cacheKey = useMemo(() => `${lang}::${code}`, [code, lang])

  const [copied, setCopied] = useState(false)

  const copyCode = async () => {
    await copyToClipboard(code).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }
  useEffect(() => {
    let cancelled = false
    const cached = cache.get(cacheKey)

    if (cached !== undefined) {
      setFormattedCode(cached)
      setError(null)
      setIsLoading(false)
      return
    }

    setError(null)
    setIsLoading(true)

    const run = async () => {
      try {
        const { codeToHtml } = await import("shiki")

        const html = await codeToHtml(code, {
          lang,
          themes: {
            light: "catppuccin-latte",
            dark: "catppuccin-macchiato"
          },
          defaultColor: false,
          transformers: [
            {
              line(node, line) {
                node.properties["data-line"] = line
              },
              span(node, line, col) {
                node.properties["data-token"] = `token:${line}:${col}`
              }
            }
          ]
        })

        if (cancelled) return

        cache.set(cacheKey, html)
        setFormattedCode(html)
      } catch {
        if (cancelled) return

        setError("Failed to process code. Please check the configuration.")
        setFormattedCode("")
      } finally {
        if (!cancelled) {
          setIsLoading(false)
        }
      }
    }

    if (typeof window.requestIdleCallback === "function") {
      const id = window.requestIdleCallback(() => {
        void run()
      })

      return () => {
        cancelled = true
        window.cancelIdleCallback?.(id)
      }
    }

    const id = window.setTimeout(() => {
      void run()
    }, 0)

    return () => {
      cancelled = true
      window.clearTimeout(id)
    }
  }, [cacheKey, code, lang])
  if (error) {
    return <p>Error: {error}</p>
  }

  return (
    <div className="relative w-full">
      {isLoading && !formattedCode ? (
        <div className="h-64 w-full animate-pulse border" />
      ) : (
        <div
          {...props}
          className={cn(
            "relative my-4 w-full max-w-none overflow-hidden rounded-lg text-sm/6",
            "border shadow-sm",
            "**:[pre]:box-border **:[pre]:max-h-96 **:[pre]:overflow-auto **:[pre]:p-2",
            className
          )}
          dangerouslySetInnerHTML={{ __html: formattedCode }}
        />
      )}
      {copy && <CopyButton className="absolute top-1 right-1 z-10" isCopied={copied} onPress={copyCode} />}
    </div>
  )
}
