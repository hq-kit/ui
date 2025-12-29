import { Container } from '@/components/ui/container'

export const Footer = () => (
  <Container>
    <footer className='px-4 py-4 text-center font-mono text-muted-foreground text-sm sm:py-8 lg:py-10 [&_a]:text-foreground'>
      <p>
        HQ UI © 2025 - This UI design was crafted by{' '}
        <a href='https://github.com/dq-alhq' rel='noreferrer' target='_blank'>
          Diqi Al-Haqqi
        </a>
      </p>
      <p>
        Special thanks for{' '}
        <a href='https://intentui.com/' rel='noreferrer' target='_blank'>
          Intent UI
        </a>{' '}
        by{' '}
        <a href='https://github.com/irsyadadl' rel='noreferrer' target='_blank'>
          Irsyad A. Pandjaitan
        </a>{' '}
        for inspiration
      </p>
    </footer>
  </Container>
)
