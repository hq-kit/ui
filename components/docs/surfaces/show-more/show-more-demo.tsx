'use client'

import { IconChevronDown } from 'hq-icons'

import { ShowMore, cn } from '@/components/ui'

export default function ShowMoreDemo() {
    return (
        <div className='py-6'>
            <ShowMore>
                {({ isSelected }) => (
                    <>
                        Show {isSelected ? 'less' : 'more'}
                        <IconChevronDown
                            className={cn(
                                isSelected ? 'rotate-180' : '',
                                'size-4 transition-transform'
                            )}
                        />
                    </>
                )}
            </ShowMore>
        </div>
    )
}
