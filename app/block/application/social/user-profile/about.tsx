import { Card, DL } from '@/components/ui'

export default function About() {
    return (
        <Card className='w-full'>
            <Card.Header>
                <Card.Title>About Me</Card.Title>
                <Card.Description>My profile information</Card.Description>
            </Card.Header>
            <Card.Content>
                <DL>
                    <DL.T>Full Name</DL.T>
                    <DL.D>Diqi Al-Haqqi</DL.D>
                    <DL.T>Address</DL.T>
                    <DL.D>East Java, Indonesia</DL.D>
                    <DL.T>Age</DL.T>
                    <DL.D>25 years</DL.D>
                    <DL.T>Company</DL.T>
                    <DL.D>Qomaruddin University Gresik</DL.D>
                </DL>
            </Card.Content>
        </Card>
    )
}
