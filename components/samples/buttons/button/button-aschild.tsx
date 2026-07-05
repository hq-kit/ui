import { buttonVariants } from "@/components/ui/button"
import { Link } from "@/components/ui/link"

export default function ButtonAsChild() {
  return (
    <Link className={buttonVariants()} href="/login">
      Login
    </Link>
  )
}
