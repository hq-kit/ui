import { DocsNavigation } from '@/components/layouts/docs-navigation'
import { getAllDocs } from '@/lib/hooks/docs'

export default async function Aside() {
    const docs = await getAllDocs()
    return (
        <aside>
            <DocsNavigation docs={docs} />
        </aside>
    )
}
