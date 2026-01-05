import type Raws from '@/components/samples/generated/previews.json'
import View from '../view'

type Raw = keyof typeof Raws

export default async function Page({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug } = await params
  if (!slug || slug.length === 0) return <div className='p-4'>Not found</div>
  const componentKey = slug.join('/') as Raw

  return <View component={componentKey} />
}
