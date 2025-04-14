'use client'

import {
    Autocomplete as RACAutocomplete,
    AutocompleteProps as RACAutocompleteProps,
    useFilter
} from 'react-aria-components'

import { SearchField } from '@/components/ui/search-field'

interface AutocompleteProps extends Omit<RACAutocompleteProps, 'filter'> {
    sensitivity?: 'base' | 'accent' | 'case' | 'variant'
    filter?: 'contains' | 'startsWith' | 'endsWith'
}

const Autocomplete = ({ children, sensitivity = 'base', filter = 'contains', ...props }: AutocompleteProps) => {
    const { contains, endsWith, startsWith } = useFilter({ sensitivity: sensitivity })
    return (
        <RACAutocomplete
            filter={filter === 'startsWith' ? startsWith : filter === 'endsWith' ? endsWith : contains}
            {...props}
        >
            {children}
        </RACAutocomplete>
    )
}

Autocomplete.Input = SearchField

export { Autocomplete }
