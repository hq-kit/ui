import { Search } from '@/components/controllers/icons/search-icon'
import { SelectSize } from '@/components/controllers/icons/select-size'
import { SelectStroke } from '@/components/controllers/icons/select-stroke'
import { Container } from '@/components/ui'

export function IconsController() {
    return (
        <Container className='sticky top-0 z-10 flex w-full flex-col items-center justify-between gap-2 bg-background/60 py-2 backdrop-blur-xl sm:flex-row lg:top-14 xl:border-x'>
            <Search />
            <div className='flex w-full items-center gap-2 sm:w-auto'>
                <SelectStroke />
                <SelectSize />
            </div>
        </Container>
    )
}
