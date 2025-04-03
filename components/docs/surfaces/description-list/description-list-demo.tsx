import { DL } from '@/components/ui/description-list'

export default function DescriptionListDemo() {
    return (
        <DL>
            <DL.T>Product Name</DL.T>
            <DL.D>PC Gaming Mid End</DL.D>
            <DL.T>Processor</DL.T>
            <DL.D>Intel Core i7-12700K</DL.D>
            <DL.T>Memory</DL.T>
            <DL.D>32GB DDR5 4800MHz</DL.D>
            <DL.T>Storage</DL.T>
            <DL.D>1TB SSD M.2 NVMe</DL.D>
            <DL.T>Graphics Card</DL.T>
            <DL.D>RTX 4090 24GB</DL.D>
        </DL>
    )
}
