export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main className='flex h-dvh w-full flex-col items-center justify-center gap-6 bg-muted px-4 lg:px-8'>
            {children}
        </main>
    )
}
