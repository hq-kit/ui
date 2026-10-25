import { Pagination } from "@/components/ui/pagination"
import { Select } from "@/components/ui/select"

export default () => {
  return (
    <div className="flex w-full flex-col items-center justify-between sm:flex-row">
      <div className="to-muted-foreground text-sm">Show 10 to 20 from 100 data</div>
      <div className="flex items-center gap-2">
        <Select aria-label="Show" defaultValue={10} name="Show">
          <Select.Trigger>
            <Select.Value />
          </Select.Trigger>
          <Select.Content>
            <Select.Item id={10}>10</Select.Item>
            <Select.Item id={20}>20</Select.Item>
            <Select.Item id={40}>40</Select.Item>
            <Select.Item id={100}>100</Select.Item>
          </Select.Content>
        </Select>
        <Pagination>
          <Pagination.First href="#" />
          <Pagination.Previous href="#" />
          <Pagination.Item href="#">1</Pagination.Item>
          <Pagination.Item isActive>2</Pagination.Item>
          <Pagination.Item href="#">3</Pagination.Item>
          <Pagination.Ellipsis />
          <Pagination.Item href="#">25</Pagination.Item>
          <Pagination.Next href="#" />
          <Pagination.Last href="#" />
        </Pagination>
      </div>
    </div>
  )
}
