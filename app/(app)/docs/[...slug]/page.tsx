import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Toc } from '@/components/layouts/toc'
import { mdxComponents } from '@/components/mdx'
import { DocRefs } from '@/components/mdx/references'
import { source } from '@/lib/source'

type Props = {
  params: Promise<{ slug: string[] }>
}

export const revalidate = false
export const dynamic = 'force-static'
export const dynamicParams = false

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { slug } = await props.params
  const doc = source.getPage(slug)

  if (!doc) return {}

  const ogSearchParams = new URLSearchParams()
  ogSearchParams.set('title', doc?.data.title)

  return {
    title: doc?.data.title,
    description: doc?.data.description,
    applicationName: 'HQ UI',
    category: 'Docs',
    keywords: [
      doc?.data.title,
      `${doc?.data.title} components`,
      `${doc?.data.title} component`,
      `${doc?.data.title} on React`,
      'React',
      'Next.js',
      'Inertia.js',
      'Tailwind CSS',
      'UI Components',
      'UI Kit',
      'UI Library',
      'UI Framework',
      'HQ-Kit',
      'HQ-UI',
      'React Aria',
      'React Aria Components',
      'Server Components',
      'React Components',
      'Next UI Components',
      'UI Design System',
      'UI for Laravel Inertia',
      'HQ Components',
      'HQ UI Components',
      'HQ UI Kit',
      'HQ UI Library',
      'HQ UI Framework',
      'HQ Laravel Inertia',
      'HQ Laravel',
      'HQ Inertia'
    ]
  }
}

export function generateStaticParams() {
  return source.generateParams()
}

export default async function DocsPage(props: Props) {
  const { slug } = await props.params

  const page = source.getPage(slug)

  if (!page) {
    notFound()
  }
  const doc = page.data
  const MDX = doc.body

  return (
    <>
      <div className='min-w-0 max-w-2xl flex-auto pt-12 pb-32 sm:pt-16 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16'>
        <main className='rehype max-w-[inherit]'>
          <div className='mb-8'>
            <h1 className='mt-2 font-semibold text-2xl tracking-tight sm:text-4xl'>{doc.title}</h1>
            {doc.description && <p className='mt-2.5 mb-4 text-base leading-relaxed'>{doc.description}</p>}
            {doc?.references && <DocRefs references={doc?.references} />}
          </div>
          <Toc className='mt-4 block sm:mt-8 xl:hidden' items={doc.toc} />

          <MDX components={mdxComponents} />
        </main>
      </div>
      <div className='hidden flex-col xl:flex'>
        <div className='flex-1'>
          <Toc items={page.data.toc} />
        </div>
      </div>
    </>
  )
}
