import 'rehype-pretty-code'

declare module 'react-syntax-highlighter/dist/esm/styles/prism'

declare module 'rehype-pretty-code' {
  interface Options {
    theme?: string
    onVisitLine?: (node: React.ReactNode) => void
    onVisitHighlightedLine?: (node: React.ReactNode) => void
    onVisitHighlightedWord?: (node: React.ReactNode) => void
  }
}
