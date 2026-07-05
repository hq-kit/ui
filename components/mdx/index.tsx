import type { ComponentProps } from "react"
import Image from "next/image"
import { IconPlaceholder } from "@/components/icon-placeholder"
import { BlockCode } from "@/components/mdx/block-code"
import { CLI } from "@/components/mdx/cli"
import { Code } from "@/components/mdx/code"
import { Demo } from "@/components/mdx/demo"
import { Grid } from "@/components/mdx/grids"
import { Iframe } from "@/components/mdx/iframe"
import { Install } from "@/components/mdx/install"
import { McpRacTabs } from "@/components/mdx/mcp-rac-tabs"
import { McpTabs } from "@/components/mdx/mcp-tabs"
import { Preview } from "@/components/mdx/preview"
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
  pre: BlockCode,
  blockquote: TypographyBlockquote,
  small: TypographySmall,
  Code,
  CLI,
  Image,
  Install,
  Demo,
  Preview,
  Grid,
  Iframe,
  McpTabs,
  McpRacTabs,
  Steps,
  Step,
  Note: ({ children, ...props }: ComponentProps<typeof Alert>) => (
    <Alert
      {...props}
      className="my-4 border-destructive/50 bg-destructive/10 ring-2 ring-destructive/40"
      variant="destructive"
    >
      <IconPlaceholder
        className="my-0.5"
        hugeicons="Alert02Icon"
        lucide="TriangleAlertIcon"
        phosphor="WarningIcon"
        remixicon="RiErrorWarningLine"
        tabler="IconAlertTriangle"
      />
      <Alert.Description className="cols-start-2 not-prose! flex flex-wrap items-center **:text-destructive/90!">
        {children}
      </Alert.Description>
    </Alert>
  )
}
