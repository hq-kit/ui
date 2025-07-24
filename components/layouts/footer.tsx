import { Container } from '@/components/ui'

export const Footer = () => (
    <Container className='border-x'>
        <footer className='px-4 py-4 text-center font-mono text-muted-foreground text-sm sm:py-8 lg:py-10 [&_a]:text-foreground'>
            <p>
                HQ UI © 2025 - This UI design was crafted by{' '}
                <a target='_blank' href='https://github.com/dq-alhq' rel='noreferrer'>
                    Diqi Al-Haqqi
                </a>
            </p>
            <p>
                Special thanks for{' '}
                <a target='_blank' href='https://intentui.com/' rel='noreferrer'>
                    Intent UI
                </a>{' '}
                by{' '}
                <a target='_blank' href='https://github.com/irsyadadl' rel='noreferrer'>
                    Irsyad A. Pandjaitan
                </a>{' '}
                for inspiration
            </p>
        </footer>
    </Container>
)
