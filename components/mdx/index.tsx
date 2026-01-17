import type { ComponentProps } from 'react'
import { IconAlertCircle } from '@tabler/icons-react'
import Image from 'next/image'
import { Block } from '@/components/mdx/block'
import { BlockCode } from '@/components/mdx/block-code'
import { CLI } from '@/components/mdx/cli'
import { Code } from '@/components/mdx/code'
import { Demo } from '@/components/mdx/demo'
import { Grid } from '@/components/mdx/grids'
import { Iframe } from '@/components/mdx/iframe'
import { Install } from '@/components/mdx/install'
import { Preview } from '@/components/mdx/preview'
import {
  TypographyA,
  TypographyBlockquote,
  TypographyCode,
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyOl,
  TypographyP,
  TypographySmall,
  TypographyTable,
  TypographyTd,
  TypographyTh,
  TypographyTr,
  TypographyUl
} from '@/components/mdx/typography'
import { Alert } from '@/components/ui/alert'

export const mdxComponents = {
  h1: TypographyH1,
  h2: TypographyH2,
  h3: TypographyH3,
  h4: TypographyH4,
  a: TypographyA,
  p: TypographyP,
  ul: TypographyUl,
  ol: TypographyOl,
  table: TypographyTable,
  tr: TypographyTr,
  td: TypographyTd,
  th: TypographyTh,
  code: TypographyCode,
  pre: BlockCode,
  blockquote: TypographyBlockquote,
  small: TypographySmall,
  Code,
  CLI,
  Block,
  Image,
  Install,
  Demo,
  Preview,
  Grid,
  Iframe,
  Note: ({ children, ...props }: ComponentProps<typeof Alert>) => (
    <Alert
      {...props}
      className='my-4 border-destructive bg-destructive/10 ring-2 ring-destructive/40'
      variant='destructive'
    >
      <IconAlertCircle className='my-0.5' />
      <Alert.Description className='cols-start-2 not-prose! flex flex-wrap items-center **:text-destructive/90!'>
        {children}
      </Alert.Description>
    </Alert>
  )
}
