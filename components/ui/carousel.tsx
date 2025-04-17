'use client'

import React from 'react'

import useEmblaCarousel, { type UseEmblaCarouselType } from 'embla-carousel-react'
import { IconChevronLeft, IconChevronRight } from 'hq-icons'
import type { ListBoxItemProps, ListBoxSectionProps } from 'react-aria-components'
import { Button, ListBox, ListBoxItem, ListBoxSection, composeRenderProps } from 'react-aria-components'

import { cn } from '@/lib/utils'

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

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

const useCarousel = () => {
    const context = React.use(CarouselContext)

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

interface CarouselProps extends React.HTMLAttributes<HTMLDivElement>, CarouselRootProps {
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
    const [canScrollPrev, setCanScrollPrev] = React.useState(false)
    const [canScrollNext, setCanScrollNext] = React.useState(false)

    const onSelect = React.useCallback((api: CarouselApi) => {
        if (!api) {
            return
        }

        setCanScrollPrev(api.canScrollPrev())
        setCanScrollNext(api.canScrollNext())
    }, [])

    const scrollPrev = React.useCallback(() => {
        api?.scrollPrev()
    }, [api])

    const scrollNext = React.useCallback(() => {
        api?.scrollNext()
    }, [api])

    const handleKeyDown = React.useCallback(
        (event: React.KeyboardEvent<HTMLDivElement>) => {
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

    React.useEffect(() => {
        if (!api || !setApi) {
            return
        }

        setApi(api)
    }, [api, setApi])

    React.useEffect(() => {
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

const CarouselHandler = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
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
                className={composeRenderProps(
                    className,
                    (className, { isPressed, isHovered, isFocusVisible, isDisabled }) =>
                        cn(
                            'inline-flex size-8 items-center justify-center rounded-lg border bg-bg text-muted-fg outline-hidden',
                            isHovered && 'bg-primary/40',
                            isFocusVisible && 'ring-4 ring-primary/20',
                            isPressed && 'bg-primary/50',
                            isDisabled && 'opacity-50',
                            orientation === 'vertical' ? 'rotate-90' : '',
                            className
                        )
                )}
                isDisabled={!canScrollPrev}
                onPress={scrollPrev}
            >
                <IconChevronLeft />
            </Button>
            <Button
                aria-label='Next Slide'
                data-handler='next'
                className={composeRenderProps(
                    className,
                    (className, { isPressed, isHovered, isFocusVisible, isDisabled }) =>
                        cn(
                            'inline-flex size-8 items-center justify-center rounded-lg border bg-bg text-muted-fg outline-hidden',
                            isHovered && 'bg-primary/40',
                            isFocusVisible && 'ring-4 ring-primary/20',
                            isPressed && 'bg-primary/50',
                            isDisabled && 'opacity-50',
                            orientation === 'vertical' ? 'rotate-90' : '',
                            className
                        )
                )}
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
