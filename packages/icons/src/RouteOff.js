import * as React from 'react'
const SvgRouteOff = (props) => (
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
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 19a3 3 0 1 1-6 0 3 3 0 0 1 6 0m0 0h8.5c.4 0 .9-.1 1.3-.2M5.2 5.2a3.5 3.5 0 0 0-1.758 1.587 3.56 3.56 0 0 0-.36 2.351 3.54 3.54 0 0 0 1.2 2.048c.624.522 1.408.81 2.218.814H12M2 2l20 20m-1-6.7a3.5 3.5 0 0 0-3.3-3.3M15 5h-4.3M15 5a3 3 0 1 0 6 0 3 3 0 0 0-6 0"
    />
  </svg>
)
export default SvgRouteOff
