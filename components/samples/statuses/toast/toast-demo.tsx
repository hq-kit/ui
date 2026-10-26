"use client"

import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/toast"

export default () => {
  return <Button onPress={() => toast("Hello I'm a Toast")}>Show Toast</Button>
}
