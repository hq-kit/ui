import * as React from 'react'
const SvgHandHelping = (props) => (
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
      d="M11 12h2a2 2 0 0 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14m4 4 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2.002 2.002 0 1 0-2.75-2.91l-4.2 3.9M2 13l6 6"
    />
  </svg>
)
export default SvgHandHelping
