import ThemeCustomizer from '@/components/controllers/themes/themes'
import { Hero, HeroDescription, HeroHeader, HeroTitle } from '@/components/layouts/hero'
import { Link } from '@/components/ui'

export const metadata = {
    title: 'Themes'
}

export default function Page() {
    return (
        <>
            <Hero>
                <HeroHeader>
                    <HeroTitle>THEMES</HeroTitle>
                    <HeroDescription>
                        You can always fully customize this UI design with your favor
                        <br />
                        head to <code className='text-primary font-semibold'>.css</code> file and
                        add your own styles
                    </HeroDescription>
                    <HeroDescription className='mt-4'>
                        Feel free to find an inspiration from{' '}
                        <Link href='/colors'>Colors Page</Link>
                    </HeroDescription>
                </HeroHeader>
            </Hero>
            <ThemeCustomizer />
        </>
    )
}
