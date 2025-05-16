import { SidebarInset } from '@/components/ui'
import ChatSidebar from './chat-sidebar'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className='flex'>
            <ChatSidebar />
            <SidebarInset>{children}</SidebarInset>
        </div>
    )
}
