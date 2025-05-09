import { Aside } from '@/components/layouts/aside'
import type { ReactNode } from 'react'

export default async function Layout({ children }: { children: ReactNode }) {
    return (
        <div className='flex w-full flex-col'>
            <div className='relative mx-auto flex w-full max-w-7xl flex-auto justify-center border border-t-0 lg:px-8 2xl:max-w-screen-2xl'>
                <div className='hidden lg:relative lg:block lg:flex-none'>
                    <div className='-ml-0.5 sticky top-[1.75rem] h-screen w-64 overflow-y-auto overflow-x-hidden py-16 pr-8 pl-0.5 xl:w-72'>
                        <Aside />
                    </div>
                </div>
                {children}
            </div>
        </div>
    )
}
