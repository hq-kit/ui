import { Keyboard } from '@/components/ui'

export default function Page() {
    return (
        <div className='flex items-center justify-center gap-2 min-h-[80vh] max-w-xl mx-auto'>
            <Keyboard keys={['mod', 'k', 'shift']} />
        </div>
    )
}
