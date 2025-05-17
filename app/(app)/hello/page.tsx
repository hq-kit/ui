'use client'

import { Code, Container } from '@/components/ui'

const code = `export default function Page() {
    return (
        <Container className='py-6 xl:py-12'>
            <Code code={code} lang='bash' highlight={['2-4']} lineNumbers={false} />
        </Container>
    )
}`
export default function Page() {
    return (
        <Container className='w-sm space-y-6 py-6 xl:py-12'>
            <Code code={code} lang='tsx' highlight={['2-4', '7']} filename='page.tsx' />
            <Code code={'npx hq-kit add button menu modal code toolbar tooltip'} lang='bash' lineNumbers={false} />
        </Container>
    )
}
