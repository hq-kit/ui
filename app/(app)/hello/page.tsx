import { Keyboard } from '@/components/ui'

export default function Page() {
    return (
        <div className='mx-auto flex min-h-[80vh] max-w-xl items-center justify-center gap-2'>
            <Keyboard keys={['mod', 'k', 'shift']} />
        </div>
    )
}
