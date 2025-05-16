export default function Layout({ children }: { children: React.ReactNode }) {
    return <main className='grid h-dvh w-full lg:grid-cols-2'>{children}</main>
}
