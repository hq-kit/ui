import DataFormSink from '@/components/sink/data-form-sink'
import LoginFormSink from '@/components/sink/login-form-sink'
import OptionsSink from '@/components/sink/options-sink'
import TableSink from '@/components/sink/table-sink'
import TeamManagementSink from '@/components/sink/team-management-sink'
import UserProfileSink from '@/components/sink/user-profile-sink'
import { Container } from '@/components/ui'

export default function Sink() {
    return (
        <Container className='grid my-6 grid-cols-1 lg:grid-cols-3 gap-4 w-full'>
            <LoginFormSink />
            <DataFormSink />
            <UserProfileSink />
            <div className='lg:col-span-2 grid gap-4'>
                <TeamManagementSink />
                <TableSink />
            </div>
            <div className='lg:col-span-1'>
                <OptionsSink />
            </div>
        </Container>
    )
}
