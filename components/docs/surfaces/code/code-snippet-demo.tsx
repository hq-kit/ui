import { Code } from '@/components/ui'

const code = 'npx hq-kit@latest init'

export default function CodeSnippetDemo() {
    return <Code code={code} lang='bash' />
}
