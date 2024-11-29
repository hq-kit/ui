import { Aside } from '@/components/layouts/aside'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className='flex w-full flex-col'>
            <div className='relative mx-auto flex w-full max-w-7xl 2xl:max-w-screen-2xl flex-auto justify-center lg:px-8'>
                <div className='hidden lg:relative lg:block lg:flex-none'>
                    <div className='sticky top-[1.75rem] -ml-0.5 w-64 h-screen overflow-y-auto overflow-x-hidden py-16 pl-0.5 pr-8 xl:w-72'>
                        <Aside />
                    </div>
                </div>
                {children}
            </div>
        </div>
    )
}
