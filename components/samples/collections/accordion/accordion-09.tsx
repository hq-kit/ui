import { IconHeadset, IconPackage, IconRefresh } from '@tabler/icons-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const items = [
  {
    icon: IconPackage,
    title: 'How do I track my order?',
    content: "You'll receive tracking information via email once your order ships.",
    media: 'https://cdn.shadcnstudio.com/ss-assets/components/accordion/image-1.jpg?width=520&format=auto'
  },
  {
    icon: IconRefresh,
    title: 'What is your return policy?',
    content: 'We offer a 30-day return policy for most items.',
    media: 'https://cdn.shadcnstudio.com/ss-assets/components/accordion/image-2.jpg?width=520&format=auto'
  },
  {
    icon: IconHeadset,
    title: 'How can I contact customer support?',
    content: 'You can reach us via live chat, email at support@example.com, or by phone at 1-800-123-4567.',
    media: 'https://cdn.shadcnstudio.com/ss-assets/components/accordion/image-3.jpg?width=520&format=auto'
  }
]

const AccordionMediaContentDemo = () => {
  return (
    <Accordion className='w-full' defaultExpandedKeys='item-1'>
      {items.map((item, index) => (
        <AccordionItem id={`item-${index + 1}`} key={index}>
          <AccordionTrigger>
            <span className='flex items-center gap-4'>
              <item.icon className='size-4 shrink-0' />
              <span>{item.title}</span>
            </span>
          </AccordionTrigger>
          <AccordionContent className='space-y-4'>
            <p className='text-muted-foreground'>{item.content}</p>
            <img alt={item.title} className='w-full rounded-md' src={item.media} />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default AccordionMediaContentDemo
