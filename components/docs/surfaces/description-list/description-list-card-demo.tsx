import { Button, Card, DL } from '@/components/ui'

export default function DescriptionListCardDemo() {
    return (
        <Card>
            <Card.Header>
                <Card.Title>PC Gaming</Card.Title>
                <Card.Description>Here are some features of this product.</Card.Description>
            </Card.Header>
            <Card.Content>
                <DL>
                    <DL.T>Processor</DL.T>
                    <DL.D>Intel Core i7-12700K</DL.D>
                    <DL.T>Memory</DL.T>
                    <DL.D>32GB DDR5 4800MHz</DL.D>
                    <DL.T>Storage</DL.T>
                    <DL.D>1TB SSD M.2 NVMe</DL.D>
                    <DL.T>Graphics Card</DL.T>
                    <DL.D>RTX 4090 24GB</DL.D>
                </DL>
            </Card.Content>
            <Card.Footer>
                <Button>Buy Now</Button>
            </Card.Footer>
        </Card>
    )
}
