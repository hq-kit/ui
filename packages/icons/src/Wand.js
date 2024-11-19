import * as React from 'react'
const SvgWand = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 4V2m0 14v-2M8 9h2m10 0h2m-4.2 2.8L19 13m-4-4h.01m2.79-2.8L19 5M3 21l9-9m.2-5.8L11 5" />
  </svg>
)
export default SvgWand
