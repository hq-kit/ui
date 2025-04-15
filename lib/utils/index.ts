import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { titleCase } from 'usemods'

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

export const wait = (number: number = 1000) => new Promise((resolve) => setTimeout(resolve, number))

export const formatDate = (input: string | number): string => {
    const date = new Date(input)
    return date.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    })
}

export const formatTime = (date: Date): string => {
    const hours = date.getHours().toString().padStart(2, '0')
    const minutes = date.getMinutes().toString().padStart(2, '0')
    return `${hours}:${minutes}`
}

export function goodTitle(str: string) {
    return titleCase(str.replaceAll('-', ' '))
}
