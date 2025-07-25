import { Header } from '@/components/ui'
import { Button } from '@/components/ui/button'
import { SearchField } from '@/components/ui/search-field'
import { IconUserPlus } from '@tabler/icons-react'

export default function HeaderActionDemo() {
    return (
        <Header title='Users' description='Manage users, groups, and roles.'>
            <Header.Action>
                <SearchField placeholder='Search users' />
                <Button>
                    <IconUserPlus /> New User
                </Button>
            </Header.Action>
        </Header>
    )
}
