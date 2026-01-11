import { IconPlus } from '@tabler/icons-react'
import { Fragment } from 'react'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemSeparator,
  ItemTitle
} from '@/components/ui/item'

const people = [
  {
    username: 'haydenbleasel',
    avatar: 'https://github.com/haydenbleasel.png',
    email: 'h****n@vercel.com'
  },
  {
    username: 'shadcn',
    avatar: 'https://github.com/shadcn.png',
    email: 's****n@vercel.com'
  },
  {
    username: 'rauchg',
    avatar: 'https://github.com/rauchg.png',
    email: 'r****g@vercel.com'
  }
]

const Example = () => (
  <div className='flex w-full max-w-md flex-col gap-6'>
    <ItemGroup>
      {people.map((person, index) => (
        <Fragment key={person.username}>
          <Item>
            <ItemMedia>
              <Avatar fallback={person.username.charAt(0)} src={person.avatar} />
            </ItemMedia>
            <ItemContent className='gap-1'>
              <ItemTitle>{person.username}</ItemTitle>
              <ItemDescription>{person.email}</ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button className='rounded-full' size='icon' variant='ghost'>
                <IconPlus />
              </Button>
            </ItemActions>
          </Item>
          {index !== people.length - 1 && <ItemSeparator />}
        </Fragment>
      ))}
    </ItemGroup>
  </div>
)

export default Example
