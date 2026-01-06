import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

export default function Page() {
  return (
    <div className='flex h-screen w-full items-center justify-center'>
      <Tooltip isOpen>
        <TooltipTrigger>Test</TooltipTrigger>
        <TooltipContent>Helo</TooltipContent>
      </Tooltip>
    </div>
  )
}
