import { Link } from '@/components/ui'
import { IconHome } from 'hq-icons'

export default function NotFound() {
    return (
        <section className='flex h-[80vh] items-center justify-center'>
            <div className='mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16'>
                <div className='mx-auto max-w-screen-sm text-center'>
                    <h1 className='mb-4 font-extrabold text-7xl text-fg tracking-tight lg:text-9xl'>404</h1>
                    <p className='mb-4 font-bold text-3xl text-fg tracking-tight md:text-4xl'>Something's missing.</p>
                    <p className='mb-4 font-light text-lg text-muted-fg'>
                        Sorry, we can't find that page. You'll find lots to explore on the home page.
                    </p>
                    <Link
                        href='/'
                        className='my-4 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-center font-medium text-primary-fg text-sm outline-hidden ring-ring hover:bg-primary/90 focus:ring-4'
                    >
                        <IconHome />
                        Back to Homepage
                    </Link>
                </div>
            </div>
        </section>
    )
}
