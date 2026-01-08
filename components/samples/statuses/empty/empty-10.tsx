import { IconFileText, IconPlus, IconUpload } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from '@/components/ui/empty'

export const title = 'No Files'

const Example = () => (
  <Empty>
    <EmptyHeader>
      <EmptyMedia variant='icon'>
        <IconFileText />
      </EmptyMedia>
      <EmptyTitle>No files uploaded</EmptyTitle>
      <EmptyDescription>This folder is empty. Upload files or create new documents to get started.</EmptyDescription>
    </EmptyHeader>
    <EmptyContent>
      <div className='flex gap-2'>
        <Button>
          <IconUpload />
          Upload Files
        </Button>
        <Button variant='outline'>
          <IconPlus />
          Create Document
        </Button>
      </div>
    </EmptyContent>
  </Empty>
)

export default Example
