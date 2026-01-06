import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent } from '@/components/ui/tooltip'

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

const TooltipTasksDemo = () => {
  return (
    <Tooltip closeDelay={0}>
      <Button variant='link'>Hover Card Tasks</Button>
      <TooltipContent className='w-72 p-4 shadow-md' isInverse={false} showArrow={false}>
        <div className='space-y-4'>
          <p className='font-semibold text-lg'>Today&apos;s task completion</p>
          <ul className='space-y-2.5'>
            {tasks.map((task) => (
              <li className='flex items-start gap-4' key={task.name}>
                <Avatar alt={task.name} fallback={task.fallback} src={task.image} />
                <div className='flex flex-1 flex-col'>
                  <div className='font-medium text-sm'>{task.name}</div>
                  <p className='text-muted-foreground text-xs'>{task.designation}</p>
                </div>
                <span className='text-muted-foreground text-sm'>{`${task.percentage}%`}</span>
              </li>
            ))}
          </ul>
        </div>
      </TooltipContent>
    </Tooltip>
  )
}

export default TooltipTasksDemo
