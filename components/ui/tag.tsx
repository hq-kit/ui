'use client'

import type { TagGroupProps as RACTagGroupProps, TagListProps, TagProps } from 'react-aria-components'
import { IconX } from '@tabler/icons-react'
import { createContext, type KeyboardEvent, use, useEffect, useMemo, useRef, useState } from 'react'
import {
    Button,
    composeRenderProps,
    type Key,
    Tag as RACTag,
    TagList as RACTagList,
    type Selection,
    TagGroup,
    type TextFieldProps
} from 'react-aria-components'
import { tv } from 'tailwind-variants'
import { cn } from '@/lib/utils'
import { badgeVariants } from './badge'
import { FieldError, TextField } from './field'

type TagGroupStyles = {
    variant: keyof Omit<typeof badgeVariants.variants.variant, 'outline'>
}

const TagGroupContext = createContext<TagGroupStyles>({
    variant: 'default'
})

interface TagGroupProps extends RACTagGroupProps {
    variant?: TagGroupStyles['variant']
}

const TagList = <T extends object>({ items, className, ...props }: TagGroupProps & TagListProps<T>) => {
    return (
        <TagGroupContext.Provider
            value={{
                variant: props.variant || 'default'
            }}
        >
            <RACTagList
                className={composeRenderProps(className, (className) => cn('flex flex-wrap gap-1', className))}
                {...props}
            />
        </TagGroupContext.Provider>
    )
}

const tagStyle = tv({
    extend: badgeVariants,
    variants: {
        isSelected: { false: '!border-border !bg-transparent !text-muted-foreground' },
        isFocusVisible: {
            true: 'outline-0 ring-[3px] ring-ring/50 ring-offset-1'
        },
        isDisabled: { true: 'cursor-default opacity-50', false: 'cursor-pointer' },
        allowsRemoving: { true: 'pr-1' }
    }
})

const Tag = (props: TagProps) => {
    const groupContext = use(TagGroupContext)

    return (
        <RACTag
            textValue={typeof props.children === 'string' ? props.children : undefined}
            {...props}
            className={composeRenderProps(props.className, (className, renderProps) =>
                tagStyle({
                    ...renderProps,
                    variant: groupContext.variant,
                    className
                })
            )}
        >
            {(values) => {
                return (
                    <>
                        {typeof props.children === 'function' ? props.children(values) : props.children}
                        {values.allowsRemoving && (
                            <Button
                                className='mr-px grid size-3.5 cursor-pointer place-content-center rounded-lg focus:outline-none focus-visible:ring-1 focus-visible:ring-ring/50'
                                slot='remove'
                            >
                                <IconX className='size-3 shrink-0' />
                            </Button>
                        )}
                    </>
                )
            }}
        </RACTag>
    )
}

interface TagInputProps extends Pick<TextFieldProps, 'children' | 'aria-label' | 'aria-labelledby'> {
    value?: Selection
    onChange?: (next: Selection) => void
    defaultValue?: string[]
    splitPattern?: RegExp
    className?: string
    inputValue?: string
    onInputValueChange?: (v: string) => void
    isRequired?: boolean
    requiredMessage?: string
    name?: string
}

const TagField = ({
    value,
    onChange,
    defaultValue = [],
    splitPattern = /[,;]/,
    className,
    inputValue: controlledInput,
    onInputValueChange,
    isRequired,
    requiredMessage,
    name = 'tags',
    children,
    ...props
}: TagInputProps) => {
    const [internalSelection, setInternalSelection] = useState<Selection>(new Set(defaultValue))
    const [uncontrolledInput, setUncontrolledInput] = useState('')
    const [touched, setTouched] = useState(false)
    const hiddenRef = useRef<HTMLInputElement>(null)

    const selection: Selection = value ?? internalSelection
    const inputValue = controlledInput ?? uncontrolledInput
    const setInputValue = onInputValueChange ?? setUncontrolledInput
    const applySelection = (next: Selection) => (onChange ?? setInternalSelection)(next as Selection)

    const list = useMemo(() => {
        return selection === 'all' ? [] : Array.from(selection).map((v) => String(v))
    }, [selection])

    const isInvalid = Boolean(isRequired && list.length === 0 && touched)
    const errorText = requiredMessage ?? 'At least one item is required'

    useEffect(() => {
        const input = hiddenRef.current
        const form = input?.form
        if (!form || !input) return
        const onSubmit = (e: Event) => {
            if (isRequired && list.length === 0) {
                e.preventDefault()
                setTouched(true)
                input.setCustomValidity(errorText)
                form.reportValidity()
            } else {
                input.setCustomValidity('')
            }
        }
        form.addEventListener('submit', onSubmit)
        return () => form.removeEventListener('submit', onSubmit)
    }, [isRequired, list.length, errorText])

    function handleKeyDown(e: KeyboardEvent) {
        if (e.key === 'Enter' || e.key === ',' || e.key === ';') {
            e.preventDefault()
            addTag()
        }
    }

    function addTag() {
        if (selection === 'all') return
        const next = new Set<Key>(Array.from(selection))
        inputValue.split(splitPattern).forEach((raw) => {
            const formatted = raw
                .trim()
                .replace(/\s\s+/g, ' ')
                .replace(/\t|\\t|\r|\\r|\n|\\n/g, '')
            if (formatted === '') return
            const exists = Array.from(next).some(
                (id) => String(id).toLocaleLowerCase() === formatted.toLocaleLowerCase()
            )
            if (!exists) next.add(formatted)
        })
        applySelection(next)
        setInputValue('')
        setTouched(true)
    }

    function removeKeys(keys: Selection) {
        if (selection === 'all') return
        const next = new Set<Key>(Array.from(selection))
        if (keys !== 'all') {
            for (const k of keys) next.delete(k)
        }
        applySelection(next)
        setTouched(true)
    }

    return (
        <div className={cn('flex flex-col gap-y-1', className)}>
            <TextField
                isInvalid={isInvalid}
                onBlur={() => setTouched(true)}
                onChange={setInputValue}
                onKeyDown={handleKeyDown}
                value={inputValue}
                {...props}
            >
                {(values) => (
                    <>
                        {typeof children === 'function' ? children(values) : children}
                        <FieldError>{isInvalid ? errorText : undefined}</FieldError>
                    </>
                )}
            </TextField>
            {selection ? (
                <TagGroup aria-label='Selected tags' className='mt-1' onRemove={removeKeys}>
                    <Tag.List>
                        {list.map((id) => (
                            <Tag id={id} key={id}>
                                {id}
                            </Tag>
                        ))}
                    </Tag.List>
                </TagGroup>
            ) : null}
            <input
                aria-hidden='true'
                className='-z-10 sr-only absolute h-0 w-0 opacity-0'
                name={name}
                readOnly
                ref={hiddenRef}
                required={Boolean(isRequired)}
                tabIndex={-1}
                value={list.join(',')}
            />
        </div>
    )
}

Tag.List = TagList
Tag.Field = TagField

export { Tag, TagList, TagField }
export type { TagGroupProps, TagGroupStyles }
