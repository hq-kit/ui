'use client'

import { IconLoaderCircle, IconSearch, IconX } from 'hq-icons'
import {
    Button,
    composeRenderProps,
    SearchField as RACSearchField,
    type SearchFieldProps as RACSearchFieldProps,
    type ValidationResult
} from 'react-aria-components'

import { cn } from '@/lib/utils'

import { Description, FieldError, FieldGroup, Input, Label } from './field'

interface SearchFieldProps extends RACSearchFieldProps {
    label?: string
    placeholder?: string
    description?: string
    errorMessage?: string | ((validation: ValidationResult) => string)
    isPending?: boolean
}

const SearchField = ({
    className,
    placeholder,
    label,
    description,
    errorMessage,
    isPending,
    ...props
}: SearchFieldProps) => {
    return (
        <RACSearchField
            aria-label={placeholder ?? props['aria-label'] ?? 'Search...'}
            {...props}
            className={composeRenderProps(className, (className) =>
                cn('group flex flex-col gap-y-1.5', className)
            )}
        >
            {({ isEmpty }) => (
                <>
                    {label && <Label>{label}</Label>}
                    <FieldGroup>
                        <IconSearch aria-hidden className='text-muted-fg ml-2 size-4 shrink-0' />
                        <Input
                            placeholder={placeholder ?? 'Search...'}
                            className='[&::-webkit-search-cancel-button]:hidden'
                        />
                        {isPending && (
                            <IconLoaderCircle className='animate-spin size-4 mr-2 to-muted-fg' />
                        )}
                        {!isEmpty && (
                            <Button
                                type='button'
                                aria-label='Clear'
                                className='mr-2 rounded-lg outline-offset-4 inline-flex items-center justify-center text-muted-fg'
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
export type { SearchFieldProps }
