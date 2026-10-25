import { Pagination } from "@/components/ui/pagination"

export default () => {
  return (
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
  )
}
