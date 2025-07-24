'use client'

import { cn } from '@/lib/utils'

import useEmblaCarousel, { type UseEmblaCarouselType } from 'embla-carousel-react'
import { IconChevronLeft, IconChevronRight } from 'hq-icons'
import {
    type ComponentPropsWithRef,
    type KeyboardEvent,
    createContext,
    use,
    useCallback,
    useEffect,
    useState
} from 'react'
import type { ListBoxItemProps, ListBoxSectionProps } from 'react-aria-components'
import { Button, ListBox, ListBoxItem, ListBoxSection, composeRenderProps } from 'react-aria-components'

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselContextProps = {
    carouselRef: ReturnType<typeof useEmblaCarousel>[0]
    api: ReturnType<typeof useEmblaCarousel>[1]
    scrollPrev: () => void
    scrollNext: () => void
    canScrollPrev: boolean
    canScrollNext: boolean
} & CarouselProps

const CarouselContext = createContext<CarouselContextProps | null>(null)

const useCarousel = () => {
    const context = use(CarouselContext)

    if (!context) {
        throw new Error('useCarousel must be used within a <Carousel />')
    }

    return context
}

interface CarouselRootProps {
    CarouselContent?: typeof CarouselContent
    CarouselHandler?: typeof CarouselHandler
    CarouselItem?: typeof CarouselItem
}

interface CarouselProps extends CarouselRootProps, ComponentPropsWithRef<'div'> {
    opts?: CarouselOptions
    plugins?: CarouselPlugin
    orientation?: 'horizontal' | 'vertical'
    setApi?: (api: CarouselApi) => void
}

const Carousel = ({
    orientation = 'horizontal',
    opts,
    setApi,
    plugins,
    className,
    children,
    ...props
}: CarouselProps) => {
    const [carouselRef, api] = useEmblaCarousel(
        {
            ...opts,
            axis: orientation === 'horizontal' ? 'x' : 'y'
        },
        plugins
    )
    const [canScrollPrev, setCanScrollPrev] = useState(false)
    const [canScrollNext, setCanScrollNext] = useState(false)

    const onSelect = useCallback((api: CarouselApi) => {
        if (!api) {
            return
        }

        setCanScrollPrev(api.canScrollPrev())
        setCanScrollNext(api.canScrollNext())
    }, [])

    const scrollPrev = useCallback(() => {
        api?.scrollPrev()
    }, [api])

    const scrollNext = useCallback(() => {
        api?.scrollNext()
    }, [api])

    const handleKeyDown = useCallback(
        (event: KeyboardEvent<HTMLDivElement>) => {
            if (event.key === 'ArrowLeft') {
                event.preventDefault()
                scrollPrev()
            } else if (event.key === 'ArrowRight') {
                event.preventDefault()
                scrollNext()
            }
        },
        [scrollPrev, scrollNext]
    )

    useEffect(() => {
        if (!api || !setApi) {
            return
        }

        setApi(api)
    }, [api, setApi])

    useEffect(() => {
        if (!api) {
            return
        }

        onSelect(api)
        api.on('reInit', onSelect)
        api.on('select', onSelect)

        return () => {
            api?.off('select', onSelect)
        }
    }, [api, onSelect])

    return (
        <CarouselContext.Provider
            value={{
                carouselRef,
                api: api,
                opts,
                orientation: orientation || (opts?.axis === 'y' ? 'vertical' : 'horizontal'),
                scrollPrev,
                scrollNext,
                canScrollPrev,
                canScrollNext
            }}
        >
            <div onKeyDownCapture={handleKeyDown} className={cn('relative', className)} role='region' {...props}>
                {children}
            </div>
        </CarouselContext.Provider>
    )
}

const CarouselContent = <T extends object>({ className, ...props }: ListBoxSectionProps<T>) => {
    const { carouselRef, orientation } = useCarousel()

    return (
        <ListBox
            layout={orientation === 'vertical' ? 'stack' : 'grid'}
            aria-label='Slides'
            orientation={orientation}
            ref={carouselRef}
            className='overflow-hidden'
        >
            <ListBoxSection
                className={cn('flex', orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col', className)}
                {...props}
            />
        </ListBox>
    )
}

const CarouselItem = ({ className, ...props }: ListBoxItemProps) => {
    const { orientation } = useCarousel()

    return (
        <ListBoxItem
            aria-label={`Slide ${props.id}`}
            className={composeRenderProps(className, (className) =>
                cn(
                    'group relative min-w-0 shrink-0 grow-0 basis-full outline-hidden',
                    orientation === 'horizontal' ? 'pl-4' : 'pt-4',
                    className
                )
            )}
            {...props}
        />
    )
}

const CarouselHandler = ({ className, ...props }: ComponentPropsWithRef<'div'>) => {
    const { orientation, scrollPrev, canScrollPrev, scrollNext, canScrollNext } = useCarousel()
    return (
        <div
            slot='carousel-handler'
            className={cn(
                'relative z-10 my-4 flex items-center gap-x-2',
                orientation === 'horizontal' ? 'justify-end' : 'justify-center',
                className
            )}
            {...props}
        >
            <Button
                aria-label='Previous Slide'
                data-handler='previous'
                className='inline-flex size-7 shrink-0 orientation-vertical:rotate-90 items-center justify-center rounded-md border bg-background pressed:bg-accent/80 pressed:text-accent-foreground text-foreground shadow-sm outline-hidden hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50'
                isDisabled={!canScrollPrev}
                onPress={scrollPrev}
            >
                <IconChevronLeft />
            </Button>
            <Button
                aria-label='Next Slide'
                data-handler='next'
                className='inline-flex size-7 shrink-0 orientation-vertical:rotate-90 items-center justify-center rounded-md border bg-background pressed:bg-accent/80 pressed:text-accent-foreground text-foreground shadow-sm outline-hidden hover:bg-accent hover:text-accent-foreground focus-visible:ring-2 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50'
                isDisabled={!canScrollNext}
                onPress={scrollNext}
            >
                <IconChevronRight />
            </Button>
        </div>
    )
}

Carousel.Content = CarouselContent
Carousel.Handler = CarouselHandler
Carousel.Item = CarouselItem

export { Carousel }
export type { CarouselApi }
