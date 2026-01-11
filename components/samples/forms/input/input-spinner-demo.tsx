import { IconLoader } from '@tabler/icons-react'
import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText } from '@/components/ui/input'
import { Spinner } from '@/components/ui/spinner'

export default function InputGroupSpinner() {
  return (
    <div className='grid w-full max-w-sm gap-4'>
      <InputGroup data-disabled>
        <InputGroupInput disabled placeholder='Searching...' />
        <InputGroupAddon align='inline-end'>
          <Spinner />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup data-disabled>
        <InputGroupInput disabled placeholder='Processing...' />
        <InputGroupAddon>
          <Spinner />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup data-disabled>
        <InputGroupInput disabled placeholder='Saving changes...' />
        <InputGroupAddon align='inline-end'>
          <InputGroupText>Saving...</InputGroupText>
          <Spinner />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup data-disabled>
        <InputGroupInput disabled placeholder='Refreshing data...' />
        <InputGroupAddon>
          <IconLoader className='animate-spin' />
        </InputGroupAddon>
        <InputGroupAddon align='inline-end'>
          <InputGroupText className='text-muted-foreground'>Please wait...</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
