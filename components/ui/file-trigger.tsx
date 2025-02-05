'use client'

import { IconFolder, IconPaperclip, IconUpload } from 'hq-icons'
import {
    FileTrigger as FileTriggerPrimitive,
    type FileTriggerProps as FileTriggerPrimitiveProps
} from 'react-aria-components'
import { VariantProps } from 'tailwind-variants'

import { Button, buttonStyles } from './button'

interface FileTriggerProps extends FileTriggerPrimitiveProps, VariantProps<typeof buttonStyles> {
    isDisabled?: boolean
    ref?: React.RefObject<HTMLInputElement>
}

const FileTrigger = ({ variant, size, shape, ref, ...props }: FileTriggerProps) => {
    return (
        <FileTriggerPrimitive ref={ref} {...props}>
            <Button isDisabled={props.isDisabled} size={size} shape={shape} variant={variant}>
                {props.children ? (
                    props.children
                ) : (
                    <>
                        {props.allowsMultiple ? (
                            <>
                                <IconUpload /> Browse a files
                            </>
                        ) : props.acceptDirectory ? (
                            <>
                                <IconFolder /> Browse
                            </>
                        ) : (
                            <>
                                <IconPaperclip /> Browse a file
                            </>
                        )}
                        ...
                    </>
                )}
            </Button>
        </FileTriggerPrimitive>
    )
}

export { FileTrigger }
export type { FileTriggerProps }
