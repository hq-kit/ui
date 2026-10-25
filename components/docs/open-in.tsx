"use client"

import { IconBrandGithub, IconBrandOpenai, IconChevronDown, IconMarkdown } from "@tabler/icons-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { siteConfig as app } from "@/config/site"
import { useCopyButton } from "@/hooks/use-copy"
import { copyToClipboard } from "@/lib/modifiers"
import { IconBrandClaude, IconBrandGrok, IconBrandPerplexity } from "../icons"
import { CopyButton } from "../mdx/copy-button"
import { DropdownMenu } from "../ui/dropdown-menu"

function getPromptUrl(baseURL: string, url: string) {
  return `${baseURL}?q=${encodeURIComponent(
    `I'm currently reading the ${app.name} documentation at: ${url}\n\n` +
      `Please help me understand it thoroughly. ` +
      `Explain the key concepts, show practical examples, and be ready to help me debug or implement features based on this documentation.`
  )}`
}

export function OpenIn({ url, page }: { url: string; page: string }) {
  const fullUrl = `${app.url}/${url}`
  const [pending, setPending] = useState(false)
  const llmUrl = `${fullUrl}.md`
  const [copied, onCopy] = useCopyButton(() => void getMarkdown())

  async function getMarkdown() {
    setPending(true)

    try {
      const res = await fetch(llmUrl, { method: "GET" })
      const text = res.ok ? await res.text() : page
      await copyToClipboard(text)
    } finally {
      setPending(false)
    }
  }

  return (
    <ButtonGroup>
      <CopyButton isCopied={copied} isPending={pending} onPress={onCopy} size="sm" variant="outline">
        Copy page
      </CopyButton>
      <DropdownMenu>
        <Button size="sm" variant="outline">
          <IconChevronDown className="transition-transform group-data-pressed:rotate-180" />
        </Button>
        <DropdownMenu.Content className="min-w-64" placement="bottom end">
          <DropdownMenu.Item href={llmUrl} rel="noopener noreferrer" target="_blank">
            <IconMarkdown />
            View as Markdown
          </DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item href={getPromptUrl("https://grok.com", llmUrl)} rel="noopener noreferrer" target="_blank">
            <IconBrandGrok />
            Open in Grok
          </DropdownMenu.Item>
          <DropdownMenu.Item
            href={getPromptUrl("https://chatgpt.com", llmUrl)}
            rel="noopener noreferrer"
            target="_blank"
          >
            <IconBrandOpenai />
            Open in ChatGPT
          </DropdownMenu.Item>
          <DropdownMenu.Item
            href={getPromptUrl("https://www.perplexity.ai/search/new", llmUrl)}
            rel="noopener noreferrer"
            target="_blank"
          >
            <IconBrandPerplexity />
            Open in Perplexity
          </DropdownMenu.Item>
          <DropdownMenu.Item
            href={getPromptUrl("https://claude.ai/new", llmUrl)}
            rel="noopener noreferrer"
            target="_blank"
          >
            <IconBrandClaude />
            Open in Claude
          </DropdownMenu.Item>
          <DropdownMenu.Item
            href={`${app.repo.url}/blob/main/content/${url}.mdx`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <IconBrandGithub />
            Open in GitHub
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu>
    </ButtonGroup>
  )
}
