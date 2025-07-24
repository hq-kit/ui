import { Link, Sidebar } from '@/components/ui'
import { IconBrandCleon, IconDownload, IconFilm, IconFolders, IconHome, IconMusicNotes, IconTrash } from 'hq-icons'

interface Props {
    rootDir: string
    action: (rootDir: string) => void
}

export default function FileSidebar({ rootDir, action }: Props) {
    return (
        <Sidebar collapsible='dock' variant='inset'>
            <Sidebar.Header>
                <Link
                    className='flex items-center gap-x-2 group-data-[collapsible=dock]:size-10 group-data-[collapsible=dock]:justify-center'
                    href='#'
                >
                    <IconBrandCleon className='size-5' />
                    <Sidebar.Label className='font-medium'>FILE MANAGER</Sidebar.Label>
                </Link>
            </Sidebar.Header>
            <Sidebar.Content>
                <Sidebar.Section>
                    <Sidebar.Item onPress={() => action('')} isCurrent={rootDir === ''} href='#'>
                        <IconHome />
                        <Sidebar.Label>Home</Sidebar.Label>
                    </Sidebar.Item>
                    <Sidebar.Item
                        onPress={() => action('Downloads/')}
                        isCurrent={rootDir.startsWith('Downloads/')}
                        href='#'
                    >
                        <IconDownload />
                        <Sidebar.Label>Downloads</Sidebar.Label>
                    </Sidebar.Item>
                    <Sidebar.Item
                        onPress={() => action('Documents/')}
                        isCurrent={rootDir.startsWith('Documents/')}
                        href='#'
                    >
                        <IconFolders />
                        <Sidebar.Label>Documents</Sidebar.Label>
                    </Sidebar.Item>
                    <Sidebar.Item onPress={() => action('Music/')} isCurrent={rootDir.startsWith('Music/')} href='#'>
                        <IconMusicNotes />
                        <Sidebar.Label>Music</Sidebar.Label>
                    </Sidebar.Item>
                    <Sidebar.Item onPress={() => action('Videos/')} isCurrent={rootDir.startsWith('Videos/')} href='#'>
                        <IconFilm />
                        <Sidebar.Label>Videos</Sidebar.Label>
                    </Sidebar.Item>
                </Sidebar.Section>
                <Sidebar.Section>
                    <Sidebar.Item onPress={() => action('Trash/')} isCurrent={rootDir === 'Trash/'} href='#'>
                        <IconTrash />
                        <Sidebar.Label>Trash</Sidebar.Label>
                    </Sidebar.Item>
                </Sidebar.Section>
            </Sidebar.Content>
            <Sidebar.Rail />
        </Sidebar>
    )
}
