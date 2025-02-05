import { Search } from '@/components/controllers/icons/search-icon'
import { SelectSize } from '@/components/controllers/icons/select-size'
import { SelectStroke } from '@/components/controllers/icons/select-stroke'
import { Container } from '@/components/ui'

export function IconsController() {
    return (
        <>
            <div className='bg-bg/60 sticky top-0 z-10 w-full rounded-b-lg py-6 backdrop-blur-xl lg:top-14'>
                <Container className='relative flex flex-col items-center justify-between gap-2 sm:flex-row'>
                    <Search />
                    <div className='flex w-full items-center gap-2 sm:w-auto'>
                        <SelectStroke />
                        <SelectSize />
                    </div>
                </Container>
            </div>
        </>
    )
}
