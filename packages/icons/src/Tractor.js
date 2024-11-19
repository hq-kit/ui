import * as React from 'react'
const SvgTractor = (props) => (
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
      d="m10 11 11 .9a1 1 0 0 1 .8 1.1l-.665 4.158a1 1 0 0 1-.988.842H20m0 0a2 2 0 1 1-4 0m4 0a2 2 0 1 0-4 0m0 0h-5m7-13a1 1 0 0 0-1 1v5.573M3 4h8.129a1 1 0 0 1 .99.863L13 11.246M4 11V4m3 11h.01M8 10.1V4m4 11a5 5 0 1 1-10 0 5 5 0 0 1 10 0"
    />
  </svg>
)
export default SvgTractor
