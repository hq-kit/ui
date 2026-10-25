import type { ComponentProps } from "react"
import { IconAlertTriangle } from "@tabler/icons-react"
import Image from "next/image"
import { CLI } from "@/components/mdx/cli"
import { Code } from "@/components/mdx/code"
import { Demo } from "@/components/mdx/demo"
import { Iframe } from "@/components/mdx/iframe"
import { Install } from "@/components/mdx/install"
import { McpRacTabs } from "@/components/mdx/mcp-rac-tabs"
import { McpTabs } from "@/components/mdx/mcp-tabs"
import { Step, Steps } from "@/components/mdx/step"
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
  TypographyUl
} from "@/components/mdx/typography"
import { Alert } from "@/components/ui/alert"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/native-table"
import { Figure } from "./block-code"

export const mdxComponents = {
  h1: TypographyH1,
  h2: TypographyH2,
  h3: TypographyH3,
  h4: TypographyH4,
  a: TypographyA,
  p: TypographyP,
  ul: TypographyUl,
  ol: TypographyOl,
  table: Table,
  tr: TableRow,
  td: TableCell,
  th: TableHead,
  thead: TableHeader,
  tbody: TableBody,
  code: TypographyCode,
  figure: Figure,
  blockquote: TypographyBlockquote,
  small: TypographySmall,
  Code,
  CLI: (props: any) => <CLI className="my-2" {...props} />,
  Image,
  Install,
  Demo,
  Iframe,
  McpTabs,
  McpRacTabs,
  Steps,
  Step,
  Note: ({ children, ...props }: ComponentProps<typeof Alert>) => (
    <Alert {...props} className="my-2" variant="warning">
      <IconAlertTriangle className="text-foreground! my-0.5" />
      <Alert.Title>{children}</Alert.Title>
    </Alert>
  )
}
