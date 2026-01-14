import type Raws from '@/components/samples/generated/previews.json'
import Previews from '@/components/samples/generated/previews.json'
import View from '../view'

type Raw = keyof typeof Raws
type Props = {
  params: Promise<{ slug: string[] }>
}

export const revalidate = false
export const dynamic = 'force-static'
export const dynamicParams = false

export function generateStaticParams() {
  const blocks = Object.keys(Previews).filter((p) => p.startsWith('layouts'))
  return blocks.map((b) => ({ slug: b.split('/') }))
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  if (!slug || slug.length === 0) return <div className='p-4'>Not found</div>
  const componentKey = slug.join('/') as Raw

  return <View component={componentKey} />
}
