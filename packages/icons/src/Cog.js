import * as React from 'react'
const SvgCog = (props) => (
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
      d="M12 20a8 8 0 0 0 0-16m0 16a8 8 0 0 1-8-8m8 8v2m0-18a8 8 0 0 0-8 8m8-8V2M4 12H2m12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m0 0h8m-5 8.66-1-1.73m-5-8.66L7 3.34M20.66 17l-1.73-1M3.34 7l1.73 1m15.59-1-1.73 1M3.34 17l1.73-1M17 3.34l-1 1.73m-5 8.66-4 6.93"
    />
  </svg>
)
export default SvgCog
