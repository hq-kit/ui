'use client'

import type { Root as PageTreeRoot } from 'fumadocs-core/page-tree'
import { IconCheck, IconChevronDown, IconCopy, IconMarkdown } from '@tabler/icons-react'
import { useState } from 'react'
import { IconBrandGithub } from '@/components/icons'
import { MobilePager } from '@/components/mdx/pager'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator
} from '@/components/ui/dropdown-menu'
import { Spinner } from '@/components/ui/spinner'
import { siteConfig } from '@/config/site'
import { copyToClipboard } from '@/lib/modifiers'

function getPromptUrl(baseURL: string, url: string) {
  return `${baseURL}?q=${encodeURIComponent(
    `Read the ${siteConfig.name} docs at ${url} and treat them as the source of truth. Explain how to use the library, provide step by step examples, and help debug issues in my code. Ask clarifying questions only when needed.`
  )}`
}
export function OpenIn({ tree, url, page }: { tree: PageTreeRoot; url: string; page: string }) {
  const fullUrl = `${siteConfig.url}${url}`
  const [pending, setPending] = useState(false)
  const llmUrl = `${fullUrl}.md`

  const [copied, setCopied] = useState<boolean>(false)

  const copyCode = async (text: string) => {
    await copyToClipboard(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  async function getMarkdown() {
    setPending(true)

    try {
      const res = await fetch(llmUrl, { method: 'GET' })
      const text = res.ok ? await res.text() : page
      await copyCode(text)
    } finally {
      setPending(false)
    }
  }

  return (
    <div className='not-prose fixed inset-x-0 bottom-0 z-40 flex items-center justify-between gap-x-1.5 border-t bg-popover p-4 md:static md:z-auto md:ml-auto md:border-transparent md:border-t md:bg-transparent'>
      <Button isPending={pending} onPress={() => void getMarkdown()} size='sm' variant='outline'>
        {pending ? <Spinner /> : copied ? <IconCheck /> : <IconCopy />}
        Copy page
      </Button>
      <div className='flex items-center gap-x-1.5'>
        <DropdownMenu>
          <Button size='sm' variant='outline'>
            Open in
            <IconChevronDown className='rotate-180 sm:rotate-0' />
          </Button>
          <DropdownMenuContent className='min-w-40' placement='bottom end'>
            <DropdownMenuItem
              href={getPromptUrl('https://grok.com', fullUrl)}
              rel='noopener noreferrer'
              target='_blank'
            >
              <img alt='grok' className='size-4!' src='https://grok.com/images/favicon.svg' />
              Grok
            </DropdownMenuItem>
            <DropdownMenuItem
              href={getPromptUrl('https://chatgpt.com', fullUrl)}
              rel='noopener noreferrer'
              target='_blank'
            >
              <img alt='chatgpt' className='size-4!' src='https://chatgpt.com/cdn/assets/favicon-l4nq08hd.svg' />
              ChatGPT
            </DropdownMenuItem>
            <DropdownMenuItem
              href={getPromptUrl('https://t3.chat/new', fullUrl)}
              rel='noopener noreferrer'
              target='_blank'
            >
              <img alt='t3' className='size-4!' src='https://t3.chat/favicon.ico?favicon.71cdc391.ico' />
              T3 chat
            </DropdownMenuItem>
            <DropdownMenuItem
              href={getPromptUrl('https://claude.ai/new', fullUrl)}
              rel='noopener noreferrer'
              target='_blank'
            >
              <img
                alt='claude'
                className='size-4!'
                src='https://assets-proxy.anthropic.com/claude-ai/v2/assets/v1/cd02a42d9-Vq_H3mgS.svg'
              />
              Claude
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem href={`${url}.md`} rel='noopener noreferrer' target='_blank'>
              <IconMarkdown />
              Markdown
            </DropdownMenuItem>
            <DropdownMenuItem
              href={`${siteConfig.repo.url}/blob/main/content${url}.mdx`}
              rel='noopener noreferrer'
              target='_blank'
            >
              <IconBrandGithub />
              Github
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <MobilePager tree={tree} url={url} />
      </div>
    </div>
  )
}
