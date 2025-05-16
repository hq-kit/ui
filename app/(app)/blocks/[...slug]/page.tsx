import BlockCard from '@/components/controllers/blocks/block-card'
import { BlocksBreadcrumbs } from '@/components/controllers/blocks/breadcrumbs'
import BlocksCategories from '@/components/controllers/blocks/categories'
import { listBlocks } from '@/components/docs/generated/list-blocks'
import { Block } from '@/components/mdx/block'
import { Fragment } from 'react'

type Props = {
    params: Promise<{ slug: string[] }>
}
export default async function Page(props: Props) {
    const { slug } = await props.params
    return (
        <div className='mx-auto w-full max-w-7xl space-y-2 lg:max-w-(--breakpoint-xl) xl:border-x 2xl:max-w-(--breakpoint-2xl)'>
            <BlocksCategories section={slug[0]} />
            <div className='border-b px-4 pb-2'>
                <BlocksBreadcrumbs pages={slug} />
            </div>
            <div className='space-y-4 px-4 pt-4'>
                {slug.length < 2 ? (
                    <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                        {listBlocks
                            .filter((l) => l.section === slug[0])
                            .map((l, i) => (
                                <BlockCard
                                    href={`/blocks/${l.section}/${l.category}`}
                                    title={l.category}
                                    description={`${l.blocks.length} blocks`}
                                    key={i}
                                />
                            ))}
                    </div>
                ) : slug.length === 2 ? (
                    listBlocks
                        .filter((l) => l.section === slug[0] && l.category === slug[1])
                        .map((l, i) => (
                            <Fragment key={i}>
                                {l.blocks.map((b, i) => (
                                    <Block key={i} page={b.slug} />
                                ))}
                            </Fragment>
                        ))
                ) : (
                    <Block page={slug.join('/')} />
                )}
            </div>
        </div>
    )
}

export async function generateStaticParams() {
    const blocks = []
    for (const block of listBlocks) {
        for (const b of block.blocks) {
            blocks.push({ slug: [block.section, block.category, b.slug] })
        }
    }

    return blocks
}
