import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))
export const fuzzyMatch = (textValue: string, inputValue: string): boolean => {
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
}
