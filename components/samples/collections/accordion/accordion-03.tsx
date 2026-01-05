import { IconHeadset, IconPackage, IconRotate } from '@tabler/icons-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

const items = [
  {
    icon: IconPackage,
    title: 'How do I track my order?',
    content: `You can track your order by logging into your account and visiting the "Orders" section. You'll receive tracking information via email once your order ships. For real-time updates, you can also use the tracking number provided in your shipping confirmation email.`
  },
  {
    icon: IconRotate,
    title: 'What is your return policy?',
    content:
      'We offer a 30-day return policy for most items. Products must be unused and in their original packaging. To initiate a return, please contact our customer service team or use the return portal in your account dashboard.'
  },
  {
    icon: IconHeadset,
    title: 'How can I contact customer support?',
    content:
      'Our customer support team is available 24/7. You can reach us via live chat, email at support@example.com, or by phone at 1-800-123-4567. For faster service, please have your order number ready when contacting us.'
  }
]

const AccordionLeftIconDemo = () => {
  return (
    <Accordion className='w-full' defaultExpandedKeys='item-1'>
      {items.map((item, index) => (
        <AccordionItem id={`item-${index + 1}`} key={index}>
          <AccordionTrigger className='justify-start [&>svg]:order-first'>
            <span className='flex items-center gap-4'>
              <item.icon className='size-4 shrink-0 text-muted-foreground' />
              <span>{item.title}</span>
            </span>
          </AccordionTrigger>
          <AccordionContent className='text-muted-foreground'>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default AccordionLeftIconDemo
