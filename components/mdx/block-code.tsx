'use client'

import { type HTMLAttributes, type ReactNode, useCallback, useRef } from 'react'
import { CopyButton } from '@/components/mdx/copy-button'
import { useCopyButton } from '@/hooks/use-copy'
import { cn } from '@/lib/utils'

export type PreProps = HTMLAttributes<HTMLElement> & {
  copy?: boolean
  icon?: string | ReactNode
}

export const BlockCode = ({ className, title, icon, copy = true, ...props }: PreProps) => {
  const areaRef = useRef<HTMLDivElement>(null)
  const onCopy = useCallback(() => {
    const pre = areaRef.current?.getElementsByTagName('pre').item(0)

    if (!pre) return

    const clone = pre.cloneNode(true) as HTMLElement
    for (const node of clone.querySelectorAll('.nd-copy-ignore')) {
      node.remove()
    }
    void navigator.clipboard.writeText(clone.textContent ?? '')
  }, [])
  const [checked, onClick] = useCopyButton(onCopy)

  return (
    <figure
      {...props}
      className={cn(
        'not-prose relative my-4 rounded-lg text-sm shadow-sm',
        'border bg-shiki-bg dark:bg-shiki-dark-bg',
        className
      )}
      ref={areaRef}
    >
      {title ? (
        <div className='flex w-full flex-row items-center gap-2 rounded-t-lg border-b bg-accent px-3 py-2 text-accent-foreground'>
          {icon ? (
            <div
              className='text-muted-fg [&_svg]:size-3.5'
              dangerouslySetInnerHTML={
                typeof icon === 'string'
                  ? {
                      __html: icon
                    }
                  : undefined
              }
            />
          ) : null}
          <figcaption className='flex-1 truncate text-muted-fg'>{title}</figcaption>
          {copy ? <CopyButton className='absolute top-1 right-1 z-2' isCopied={checked} onPress={onClick} /> : null}
        </div>
      ) : (
        copy && <CopyButton className='absolute top-2 right-2 z-2' isCopied={checked} onPress={onClick} />
      )}
      <pre
        className={cn(
          'peer max-h-64 w-full overflow-auto py-3 leading-relaxed focus-visible:outline-hidden **:[code]:bg-transparent **:[code]:p-0',
          '[&::-webkit-scrollbar-thumb]:rounded-lg [&::-webkit-scrollbar-thumb]:bg-muted-foreground/20 [&::-webkit-scrollbar-track]:rounded-lg [&::-webkit-scrollbar-track]:bg-muted [&::-webkit-scrollbar]:size-1.5 [&::-webkit-scrollbar]:bg-transparent'
        )}
      >
        {props.children}
      </pre>
    </figure>
  )
}
