'use client'

import { motion } from 'motion/react'
import { useEffect, useState } from 'react'

export function ColourfulText({ text }: { text: string }) {
    const colors = [
        'rgb(131, 179, 32)',
        'rgb(47, 195, 106)',
        'rgb(42, 169, 210)',
        'rgb(4, 112, 202)',
        'rgb(107, 10, 255)',
        'rgb(183, 0, 218)',
        'rgb(218, 0, 171)',
        'rgb(230, 64, 92)',
        'rgb(232, 98, 63)',
        'rgb(249, 129, 47)'
    ]

    const [currentColors, setCurrentColors] = useState<string[]>(colors)
    const [count, setCount] = useState<number>(0)

    useEffect(() => {
        const interval = setInterval(() => {
            const shuffled = [...colors].sort(() => Math.random() - 0.5)
            setCurrentColors(shuffled)
            setCount((prev) => prev + 1)
        }, 5000)

        return () => clearInterval(interval)
    }, [])

    return text.split('').map((char, index) => (
        <motion.span
            animate={{
                color: currentColors[index % currentColors.length],
                y: [0, -3, 0],
                scale: [1, 1.01, 1],
                filter: ['blur(0px)', 'blur(5px)', 'blur(0px)'],
                opacity: [1, 0.8, 1]
            }}
            className='inline-block whitespace-pre font-sans tracking-tight'
            initial={{
                y: 0
            }}
            key={`${char}-${count}-${index}`}
            transition={{
                duration: 0.5,
                delay: index * 0.05
            }}
        >
            {char}
        </motion.span>
    ))
}
