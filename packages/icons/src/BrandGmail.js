import * as React from 'react'
const SvgBrandGmail = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
    className={`cleon-icons ${props.className ? props.className : 'size-4'}`}
    data-slot="icon"
    aria-hidden="true"
  >
    <path
      fill="currentColor"
      d="M22 6.912v10.815C22 18.43 21.39 19 20.637 19h-3.183v-7.21L12 15.609 6.546 11.79V19H3.363c-.179 0-.356-.033-.522-.097a1.4 1.4 0 0 1-.442-.276 1.3 1.3 0 0 1-.295-.413A1.2 1.2 0 0 1 2 17.727V6.912c0-1.573 1.924-2.47 3.273-1.527L12 10.093l6.727-4.708C20.075 4.442 22 5.34 22 6.912"
    />
  </svg>
)
export default SvgBrandGmail
