import * as icons from 'hq-icons'

import { cn } from '@/lib/utils'

export interface IconProps extends React.SVGProps<SVGSVGElement> {
    icon: keyof typeof icons
    className?: string
}

export const Icon = ({ icon, className, ...props }: IconProps) => {
    const HQIcon = icons[icon] as React.FC<React.SVGProps<SVGSVGElement>>
    if (!HQIcon) return null
    return <HQIcon className={cn('size-5', className)} {...props} />
}
