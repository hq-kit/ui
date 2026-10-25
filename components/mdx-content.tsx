import * as runtime from "react/jsx-runtime"
import { mdxComponents } from "./mdx"

const useMDXComponent = (code: string) => {
  const fn = new Function(code)
  return fn({ ...runtime }).default
}

interface MDXProps {
  code: string
  [key: string]: any
}

export const MDXContent = ({ code, ...props }: MDXProps) => {
  const Component = useMDXComponent(code)
  return <Component components={{ ...mdxComponents }} {...props} />
}
