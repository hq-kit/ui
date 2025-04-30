'use client'

import { IconLoader, IconSearch, IconX } from 'hq-icons'
import type { Ref } from 'react'
import {
    Button,
    SearchField as RACSearchField,
    type SearchFieldProps as RACSearchFieldProps,
    composeRenderProps
} from 'react-aria-components'

import { cn } from '@/lib/utils'
import { Description, FieldError, FieldGroup, type FieldProps, Input, Label } from './field'

interface SearchFieldProps extends RACSearchFieldProps, FieldProps {
    isPending?: boolean
    ref?: Ref<HTMLDivElement>
}

const SearchField = ({
    className,
    placeholder,
    label,
    description,
    errorMessage,
    isPending,
    ref,
    ...props
}: SearchFieldProps) => {
    return (
        <RACSearchField
            aria-label={placeholder ?? props['aria-label'] ?? 'Search...'}
            className={composeRenderProps(className, (className) => cn('group flex flex-col gap-y-1.5', className))}
            ref={ref}
            {...props}
        >
            {({ isEmpty }) => (
                <>
                    {label && <Label>{label}</Label>}
                    <FieldGroup>
                        {isPending ? (
                            <IconLoader className='ml-2 size-4 shrink-0 animate-spin text-muted-fg' />
                        ) : (
                            <IconSearch className='ml-2 size-4 shrink-0 text-muted-fg' />
                        )}
                        <Input
                            placeholder={placeholder ?? 'Search...'}
                            className='[&::-webkit-search-cancel-button]:hidden'
                        />
                        {!isEmpty && (
                            <Button
                                type='button'
                                aria-label='Clear'
                                className='mr-2 inline-flex items-center justify-center rounded-lg text-muted-fg outline-offset-4'
                            >
                                <IconX aria-hidden />
                            </Button>
                        )}
                    </FieldGroup>
                    {description && <Description>{description}</Description>}
                    <FieldError>{errorMessage}</FieldError>
                </>
            )}
        </RACSearchField>
    )
}

export { SearchField }
