import ColorCustomizer from '@/components/controllers/colors/color-customizer'
import { Hero, HeroDescription, HeroHeader, HeroTitle } from '@/components/layouts/hero'

export const metadata = {
    title: 'Colors'
}

export default function Page() {
    return (
        <>
            <Hero>
                <HeroHeader>
                    <HeroTitle>COLORS</HeroTitle>
                    <HeroDescription>
                        Let&apos;s generate color palette based on your favor.
                    </HeroDescription>
                    <HeroDescription className='text-warning mt-4'>
                        This project still in experimental state
                    </HeroDescription>
                </HeroHeader>
            </Hero>
            <ColorCustomizer />
        </>
    )
}
