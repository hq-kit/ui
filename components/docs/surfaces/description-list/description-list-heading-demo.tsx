import { DL, Header } from '@/components/ui'

export default function DescriptionListHeadingDemo() {
    return (
        <div>
            <Header description='PC Gaming' title='PC Gaming' />
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
        </div>
    )
}
