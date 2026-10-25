import { IconForbid } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"

export default () => {
  return (
    <Button isDisabled>
      <IconForbid />
      Dsabled Button
    </Button>
  )
}
