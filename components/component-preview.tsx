import type { PropsWithChildren } from "react"
import { Code as _Code } from "@/components/mdx/code-client"

const ComponentPreview = (props: PropsWithChildren) => (
  <div {...props} className="flex flex-col gap-2 lg:flex-row-reverse" />
)

const Settings = (props: PropsWithChildren) => (
  <div className="flex flex-col gap-2 border-b p-4 lg:border-b-0 lg:border-l" {...props} />
)
const View = (props: PropsWithChildren) => <div className="grid min-h-52 w-full place-items-center" {...props} />
const Code = ({ code }: { code: string }) => (
  <_Code className="my-0 size-full border-t **:[pre]:rounded-t-none" code={code} copy />
)

const spreadOptions = (options: Record<string, any>) =>
  Object.entries(options)
    .map(([key, value]) => `${key}=${typeof value === "string" ? `"${value}"` : `{${value}}`}`)
    .join(" ")

ComponentPreview.Settings = Settings
ComponentPreview.View = View
ComponentPreview.Code = Code

export { Code, ComponentPreview, Settings, spreadOptions, View }
