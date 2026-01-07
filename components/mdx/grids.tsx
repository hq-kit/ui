import type { ComponentProps } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'
import { cn } from '@/lib/utils'

const gridStyle = tv({
  base: 'group/grid my-1 grid gap-1',
  variants: {
    col: {
      1: 'xl:grid-cols-1',
      2: 'xl:grid-cols-2',
      3: 'xl:grid-cols-3',
      4: 'xl:grid-cols-4'
    }
  },
  defaultVariants: {
    col: 1
  }
})

interface GridsProps extends ComponentProps<'div'>, VariantProps<typeof gridStyle> {}

export function Grid({ col, ...props }: GridsProps) {
  return <div className={cn(gridStyle({ col }))} {...props} />
}
