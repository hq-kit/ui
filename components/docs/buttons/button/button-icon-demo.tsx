import { Button } from '@/components/ui'
import { IconBrandGithub } from '@tabler/icons-react'

export default function ButtonIconDemo() {
    return (
        <div className='flex flex-col gap-2 md:flex-row md:flex-wrap'>
            <Button size='xs'>
                <IconBrandGithub />
                Github
            </Button>
            <Button size='sm'>
                <IconBrandGithub />
                Github
            </Button>
            <Button>
                <IconBrandGithub />
                Github
            </Button>
            <Button size='lg'>
                <IconBrandGithub />
                Github
            </Button>
        </div>
    )
}
