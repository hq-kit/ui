'use client'

import { IconCheck, IconChevronDown, IconSearch } from '@tabler/icons-react'
import {
    Autocomplete,
    Button,
    type ButtonProps,
    Collection,
    composeRenderProps,
    Header,
    Input,
    Label,
    ListBox,
    ListBoxItem,
    type ListBoxItemProps,
    type ListBoxProps,
    ListBoxSection,
    type ListBoxSectionProps,
    Popover,
    type PopoverProps,
    Select as RACSelect,
    SelectValue as RACSelectValue,
    SearchField,
    type SelectProps,
    type SelectValueProps,
    Separator,
    type SeparatorProps
} from 'react-aria-components'
import { cn } from '@/lib/utils'

const Select = <T extends object, M extends 'single' | 'multiple' = 'single'>({
    className,
    ...props
}: SelectProps<T, M>) => {
    return (
        <RACSelect
            className={composeRenderProps(className, (className) => cn('group/select grid gap-3', className))}
            data-slot='control'
            {...props}
        />
    )
}

const SelectValue = <T extends object>(props: SelectValueProps<T>) => (
    <RACSelectValue data-slot='select-value' {...props} />
)

const SelectTrigger = ({
    className,
    size = 'default',
    children,
    ...props
}: ButtonProps & {
    size?: 'sm' | 'default'
}) => (
    <Button
        className={cn(
            "flex w-full items-center justify-between gap-2 whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs outline-none transition-[color,box-shadow] focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 *:data-placeholder:text-muted-foreground dark:bg-input/30 dark:aria-invalid:ring-destructive/40 dark:hover:bg-input/50 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0",
            className
        )}
        data-size={size}
        data-slot='select-trigger'
        type='button'
        {...props}
    >
        {(values) => (
            <>
                {typeof children === 'function' ? children(values) : children}
                <IconChevronDown className='size-4 text-muted-foreground transition group-data-open/select:rotate-180' />
            </>
        )}
    </Button>
)

const SelectContent = <T extends object>({
    className,
    offset = 4,
    placement = 'bottom',
    isSearchable,
    ...props
}: ListBoxProps<T> & Pick<PopoverProps, 'offset' | 'placement'> & { isSearchable?: boolean }) => {
    const renderContent = () => (
        <ListBox
            className='flex max-h-[calc(var(--visual-viewport-height)-10rem)] flex-col overflow-auto rounded-lg p-1 outline-hidden sm:max-h-[inherit]'
            data-slot='select-content'
            layout='stack'
            orientation='vertical'
            renderEmptyState={() => (
                <div className='col-span-full p-4 text-center text-muted-foreground'>No results found</div>
            )}
            {...props}
        />
    )
    return (
        <Popover
            className={cn(
                'data-exiting:fade-out-0 data-entering:fade-in-0 data-exiting:zoom-out-95 data-entering:zoom-in-95 data-[placement=bottom]:slide-in-from-top-2 data-[placement=left]:slide-in-from-right-2 data-[placement=right]:slide-in-from-left-2 data-[placement=top]:slide-in-from-bottom-2 z-50 min-w-(--trigger-width) overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md outline-hidden data-entering:animate-in data-exiting:animate-out',
                className
            )}
            offset={offset}
            placement={placement}
        >
            {isSearchable ? (
                <Autocomplete
                    filter={(textValue, inputValue) => {
                        if (inputValue.length === 0) return true
                        if (textValue.length === 0) return false
                        let textIndex = 0
                        let inputIndex = 0
                        while (textIndex < textValue.length && inputIndex < inputValue.length) {
                            if (textValue.toLowerCase()[textIndex] === inputValue.toLowerCase()[inputIndex]) {
                                inputIndex++
                            }
                            textIndex++
                        }
                        return inputIndex === inputValue.length
                    }}
                >
                    <SearchField aria-label='Search' autoFocus className='relative'>
                        <Label>
                            <IconSearch className='-translate-y-1/2 absolute top-1/2 left-3 size-4 text-muted-foreground' />
                        </Label>
                        <Input
                            className='h-9 w-full appearance-none border-b px-3 py-1 pl-9 text-sm outline-hidden [&::-webkit-search-cancel-button]:hidden'
                            placeholder='Search'
                        />
                    </SearchField>
                    {renderContent()}
                </Autocomplete>
            ) : (
                renderContent()
            )}
        </Popover>
    )
}

const SelectGroup = <T extends object>({ title, ...props }: ListBoxSectionProps<T> & { title?: string }) => (
    <ListBoxSection className={cn('flex flex-col text-sm', props.className)} data-slot='select-group' {...props}>
        {title && (
            <Header className='pointer-events-none px-2 py-1 font-medium text-muted-foreground text-xs'>{title}</Header>
        )}
        <Collection items={props.items}>{props.children}</Collection>
    </ListBoxSection>
)

const SelectItem = ({ className, children, ...props }: ListBoxItemProps) => (
    <ListBoxItem
        className={cn(
            "relative flex w-full cursor-default select-none items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
            className
        )}
        data-slot='select-item'
        {...props}
    >
        {(values) => (
            <>
                {typeof children === 'function' ? children(values) : children}
                {values.isSelected && (
                    <span className='absolute right-2 flex size-3.5 items-center justify-center'>
                        <IconCheck className='size-4' />
                    </span>
                )}
            </>
        )}
    </ListBoxItem>
)

const SelectSeparator = ({ className, ...props }: SeparatorProps) => (
    <Separator
        className={cn('-mx-1 pointer-events-none my-1 h-px bg-border', className)}
        data-slot='select-separator'
        {...props}
    />
)

Select.Content = SelectContent
Select.Group = SelectGroup
Select.Item = SelectItem
Select.Separator = SelectSeparator
Select.Trigger = SelectTrigger
Select.Value = SelectValue

export { Select, SelectContent, SelectGroup, SelectItem, SelectSeparator, SelectTrigger, SelectValue }
