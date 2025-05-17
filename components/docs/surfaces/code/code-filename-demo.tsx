import { Code } from '@/components/ui'

const code = `export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )`

export default function CodeFilenameDemo() {
    return <Code code={code} filename='src/app/layout.tsx' />
}
