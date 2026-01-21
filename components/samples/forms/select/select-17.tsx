import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const SelectBackgroundColorDemo = () => {
  return (
    <Select className='w-full' defaultValue='hindi' placeholder='Select a fruit'>
      <Label>Select with background color</Label>
      <SelectTrigger className='w-full border-sky-600 bg-sky-600/10 text-sky-600 shadow-none focus-visible:border-sky-600 focus-visible:ring-sky-600/20 dark:bg-sky-400/10 dark:text-sky-400 dark:focus-visible:ring-sky-400/40 dark:hover:bg-sky-400/10 [&_svg]:text-sky-600! dark:[&_svg]:text-sky-400!'>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup
          className='[&_div:focus]:bg-sky-600/20 [&_div:focus]:text-sky-600 dark:[&_div:focus]:bg-sky-400/20 dark:[&_div:focus]:text-sky-400'
          title='Languages'
        >
          <SelectItem className='focus:[&_svg]:text-sky-600! dark:focus:[&_svg]:text-sky-400!' id='hindi'>
            Hindi
          </SelectItem>
          <SelectItem className='focus:[&_svg]:text-sky-600! dark:focus:[&_svg]:text-sky-400!' id='english'>
            English
          </SelectItem>
          <SelectItem className='focus:[&_svg]:text-sky-600! dark:focus:[&_svg]:text-sky-400!' id='spanish'>
            Spanish
          </SelectItem>
          <SelectItem className='focus:[&_svg]:text-sky-600! dark:focus:[&_svg]:text-sky-400!' id='mandarin'>
            Mandarin
          </SelectItem>
          <SelectItem className='focus:[&_svg]:text-sky-600! dark:focus:[&_svg]:text-sky-400!' id='french'>
            French
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default SelectBackgroundColorDemo
