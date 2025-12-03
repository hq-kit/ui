import type { ComponentProps } from 'react'
import { IconAlertCircle } from '@tabler/icons-react'
import Image from 'next/image'
import * as runtime from 'react/jsx-runtime'
import {
  TypographyA,
  TypographyCode,
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyOl,
  TypographyP,
  TypographyPre,
  TypographyTable,
  TypographyTd,
  TypographyTh,
  TypographyTr,
  TypographyUl
} from '@/components/mdx/typography'
import { Alert } from '../ui'
import { Block } from './block'
import { CLI } from './cli'
import { Code } from './code'

const components = {
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
  pre: TypographyPre,
  Code,
  CLI,
  Block,
  Image,
  Note: ({ children, ...props }: ComponentProps<typeof Alert>) => (
    <Alert {...props} className='my-4' variant='destructive'>
      <IconAlertCircle className='my-0.5' />
      <Alert.Description className='cols-start-2'>{children}</Alert.Description>
    </Alert>
  )
}

const useMDXComponent = (code: string) => {
  const fn = new Function(code)
  return fn({ ...runtime }).default
}

export function MDXContent({ code }: { code: string }) {
  const Component = useMDXComponent(code)
  return <Component components={{ ...components }} />
}
