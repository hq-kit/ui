import { IconChevronUp } from '@tabler/icons-react'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Collapsible, CollapsibleContent } from '@/components/ui/collapsible'

const tasks = [
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png',
    fallback: 'HL',
    name: 'Howard Lloyd',
    designation: 'Product Manager',
    percentage: 90
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-6.png',
    fallback: 'OS',
    name: 'Olivia Sparks',
    designation: 'Software Engineer',
    percentage: 60
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png',
    fallback: 'HR',
    name: 'Hallie Richards',
    designation: 'UI/UX Designer',
    percentage: 80
  },
  {
    image: 'https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-16.png',
    fallback: 'JW',
    name: 'Jenny Wilson',
    designation: 'Junior Developer',
    percentage: 15
  }
]

const CollapsibleListDemo = () => {
  return (
    <Collapsible className='flex w-full max-w-87.5 flex-col items-start gap-4'>
      <div className='font-medium'>Today&apos;s task completion</div>
      <ul className='flex w-full flex-col gap-2'>
        {tasks.slice(0, 2).map((task) => (
          <li className='flex items-start gap-4' key={task.name}>
            <Avatar alt={task.name} src={task.image} />
            <div className='flex flex-1 flex-col'>
              <div className='font-medium text-sm'>{task.name}</div>
              <p className='text-muted-foreground text-xs'>{task.designation}</p>
            </div>
            <span className='text-muted-foreground text-sm'>{`${task.percentage}%`}</span>
          </li>
        ))}
        <CollapsibleContent className='flex flex-col gap-2'>
          {tasks.slice(2).map((task) => (
            <li className='flex items-start gap-4' key={task.name}>
              <Avatar alt={task.name} src={task.image} />
              <div className='flex flex-1 flex-col'>
                <div className='font-medium text-sm'>{task.name}</div>
                <p className='text-muted-foreground text-xs'>{task.designation}</p>
              </div>
              <span className='text-muted-foreground text-sm'>{`${task.percentage}%`}</span>
            </li>
          ))}
        </CollapsibleContent>
      </ul>
      <Button size='sm' slot='trigger' variant='outline'>
        <span className='in-data-[expanded=true]:hidden'>Show more</span>
        <span className='in-data-[expanded=true]:block hidden'>Show less</span>
        <IconChevronUp className='in-data-[expanded=true]:rotate-0 rotate-180 transition-transform' />
      </Button>
    </Collapsible>
  )
}

export default CollapsibleListDemo
