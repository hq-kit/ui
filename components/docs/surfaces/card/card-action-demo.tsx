import { Button, Card, SearchField } from '@/components/ui'
import { IconUserPlus } from '@tabler/icons-react'

export default function CardActionDemo() {
    return (
        <Card>
            <Card.Header>
                <Card.Title>Users</Card.Title>
                <Card.Description>Manage users, groups, and roles.</Card.Description>
                <Card.Action>
                    <SearchField placeholder='Search users' />
                    <Button>
                        <IconUserPlus /> New User
                    </Button>
                </Card.Action>
            </Card.Header>
        </Card>
    )
}
