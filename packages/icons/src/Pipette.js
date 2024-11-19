import * as React from 'react'
const SvgPipette = (props) => (
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
      d="m2 22 1-1m0 0h3l9-9M3 21v-3l9-9m3-3 3.4-3.4a2.121 2.121 0 1 1 3 3L18 9l.4.4a2.12 2.12 0 0 1-3 3l-3.8-3.8a2.121 2.121 0 1 1 3-3z"
    />
  </svg>
)
export default SvgPipette
