import DataFormSink from '@/components/sink/data-form-sink'
import LoginFormSink from '@/components/sink/login-form-sink'
import OptionsSink from '@/components/sink/options-sink'
import TableSink from '@/components/sink/table-sink'
import TeamManagementSink from '@/components/sink/team-management-sink'
import UserProfileSink from '@/components/sink/user-profile-sink'
import { Container } from '@/components/ui'
import { Suspense } from 'react'

export default function Sink() {
    return (
        <Container className='my-6 grid w-full grid-cols-1 gap-4 lg:grid-cols-3'>
            <Suspense>
                <LoginFormSink />
            </Suspense>
            <Suspense>
                <DataFormSink />
            </Suspense>
            <Suspense>
                <UserProfileSink />
            </Suspense>
            <Suspense>
                <TeamManagementSink />
            </Suspense>
            <Suspense>
                <TableSink />
            </Suspense>
            <div className='lg:col-span-1'>
                <Suspense>
                    <OptionsSink />
                </Suspense>
            </div>
        </Container>
    )
}
