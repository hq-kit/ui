import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Avatar } from '@/components/ui/avatar'

const items = [
  {
    name: 'Richard Payne',
    email: 'pwright@yahoo.com',
    avatarImage: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png',
    content:
      'Richard Payne is a remarkable individual known for his exceptional skills and expertise in various fields. With a strong background in technology and a passion for innovation, Richard has made significant contributions to the industry.'
  },
  {
    name: 'Jordan Stevenson',
    email: 'wramirez@outlook.com',
    avatarImage: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png',
    content:
      'Jordan Stevenson is a talented individual with a passion for technology and innovation. Jordan has made significant contributions to various projects and has a deep understanding of programming languages and frameworks.'
  },
  {
    name: 'Nicholas Tanner',
    email: 'snguyen@icloud.com',
    avatarImage: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png',
    content:
      'Nicholas Tanner is a highly skilled individual with a strong passion for technology and innovation. Nicholas has made significant contributions to numerous projects and possesses a deep understanding of various programming languages and frameworks.'
  }
]

const AccordionAvatarDemo = () => {
  return (
    <Accordion className='w-full' defaultExpandedKeys='item-1'>
      {items.map((item, index) => (
        <AccordionItem id={`item-${index + 1}`} key={index}>
          <AccordionTrigger className='items-center hover:no-underline'>
            <span className='flex items-center gap-4'>
              <Avatar alt={item.name} className='size-10.5 rounded-sm' src={item.avatarImage} />
              <span className='flex flex-col space-y-0.5'>
                <span>{item.name}</span>
                <span className='font-normal text-muted-foreground'>{item.email}</span>
              </span>
            </span>
          </AccordionTrigger>
          <AccordionContent className='text-muted-foreground'>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export default AccordionAvatarDemo
