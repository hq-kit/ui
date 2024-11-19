import * as React from 'react'
const SvgWaypoints = (props) => (
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
      d="m10.2 6.3-3.9 3.9M7 12a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m0 0h10m0 0a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0m-3.2 5.7 3.9-3.9m-3.2-9.3a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m0 15a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"
    />
  </svg>
)
export default SvgWaypoints
