import * as React from 'react'
const SvgFileCog = (props) => (
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
      d="M14 2v4a2 2 0 0 0 2 2h4M3.2 12.9l-.9-.4m.9 2.6-.9.4m2.377 6a2 2 0 0 0 1.313.5H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2.5m.9 4.7-.4-.9m.4 6.5-.4.9m3-7.4-.4.9m.4 6.5-.4-.9m2.6-4.3-.9.4m.9 2.6-.9-.4M9 14a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
    />
  </svg>
)
export default SvgFileCog
