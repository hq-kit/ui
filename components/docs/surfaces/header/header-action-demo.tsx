import { IconUserPlus } from '@tabler/icons-react'
import { Header } from '@/components/ui'
import { Button } from '@/components/ui/button'
import { SearchField } from '@/components/ui/search-field'

export default function HeaderActionDemo() {
    return (
        <Header description='Manage users, groups, and roles.' title='Users'>
            <Header.Action>
                <SearchField placeholder='Search users' />
                <Button>
                    <IconUserPlus /> New User
                </Button>
            </Header.Action>
        </Header>
    )
}
