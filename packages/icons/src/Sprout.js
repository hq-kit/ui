import * as React from 'react'
const SvgSprout = (props) => (
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
      d="M7 20h10m-7 0c5.5-2.5.8-6.4 3-10m0 0a7 7 0 0 1 1.1-4c.9-1 2.2-1.9 4.9-2-.1 2.3-.7 3.6-1.7 4.6-1 .8-2.4 1.3-4.3 1.4m-3.5-.6c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8"
    />
  </svg>
)
export default SvgSprout
