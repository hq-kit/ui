import { Button } from "@/components/ui/button"

export default () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <Button variant={"primary"}>Primary</Button>
      <Button variant={"secondary"}>Secondary</Button>
      <Button variant={"destructive"}>Destructive</Button>
      <Button variant={"success"}>Success</Button>
      <Button variant={"warning"}>Warning</Button>
      <Button variant={"info"}>Info</Button>
      <Button variant={"outline"}>Outline</Button>
      <Button variant={"ghost"}>Ghost</Button>
      <Button variant={"link"}>Link</Button>
    </div>
  )
}
