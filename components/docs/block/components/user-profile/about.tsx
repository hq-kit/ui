import { Card, DescriptionList } from '@/components/ui'

export default function About() {
    return (
        <Card>
            <Card.Header>
                <Card.Title>About Me</Card.Title>
                <Card.Description>My profile information</Card.Description>
            </Card.Header>
            <Card.Content>
                <DescriptionList>
                    <DescriptionList.Term>Full Name</DescriptionList.Term>
                    <DescriptionList.Details>Diqi Al-Haqqi</DescriptionList.Details>
                    <DescriptionList.Term>Address</DescriptionList.Term>
                    <DescriptionList.Details>East Java, Indonesia</DescriptionList.Details>
                    <DescriptionList.Term>Age</DescriptionList.Term>
                    <DescriptionList.Details>25 years</DescriptionList.Details>
                    <DescriptionList.Term>Company</DescriptionList.Term>
                    <DescriptionList.Details>Qomaruddin University Gresik</DescriptionList.Details>
                </DescriptionList>
            </Card.Content>
        </Card>
    )
}
