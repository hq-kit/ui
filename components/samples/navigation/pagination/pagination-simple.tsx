import { Pagination } from "@/components/ui/pagination"

export default () => {
  return (
    <Pagination>
      <Pagination.First href="#" />
      <Pagination.Previous href="#" />
      <Pagination.Item className={"tracking-widest"}>5 / 10</Pagination.Item>
      <Pagination.Next href="#" />
      <Pagination.Last href="#" />
    </Pagination>
  )
}
