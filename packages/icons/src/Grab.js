import * as React from 'react'
const SvgGrab = (props) => (
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
      d="M18 11.5V9a2 2 0 1 0-4 0v1.4m0-.4V8a2 2 0 1 0-4 0v2m0-.1V9a2 2 0 1 0-4 0v5a2 2 0 0 0-4 0 8 8 0 0 0 8 8h4a8 8 0 0 0 8-8v-3a2 2 0 1 0-4 0"
    />
  </svg>
)
export default SvgGrab
