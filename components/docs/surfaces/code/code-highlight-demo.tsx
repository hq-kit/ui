import { Code } from '@/components/ui'

const code = `import { Provider } from './providers'
 
const appElement = (
  <Providers>
    <App {...props} />
  </Providers>
)`

export default function CodeHighlightDemo() {
    return <Code code={code} highlight={['1', '4-6']} />
}
