import { Pagination } from "@/components/ui/pagination"

export default () => {
  return (
    <div className="grid gap-2">
      <Pagination size={"xs"}>
        <Pagination.First href="#" />
        <Pagination.Previous href="#" />
        <Pagination.Next href="#" />
        <Pagination.Last href="#" />
      </Pagination>
      <Pagination size={"sm"}>
        <Pagination.First href="#" />
        <Pagination.Previous href="#" />
        <Pagination.Next href="#" />
        <Pagination.Last href="#" />
      </Pagination>
      <Pagination size={"md"}>
        <Pagination.First href="#" />
        <Pagination.Previous href="#" />
        <Pagination.Next href="#" />
        <Pagination.Last href="#" />
      </Pagination>
      <Pagination size={"lg"}>
        <Pagination.First href="#" />
        <Pagination.Previous href="#" />
        <Pagination.Next href="#" />
        <Pagination.Last href="#" />
      </Pagination>
    </div>
  )
}
