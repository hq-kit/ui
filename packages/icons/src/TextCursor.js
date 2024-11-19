import * as React from 'react'
const SvgTextCursor = (props) => (
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
      d="M17 22h-1a4 4 0 0 1-4-4m0 0V6m0 12a4 4 0 0 1-4 4H7m5-4v-1m0-11a4 4 0 0 1 4-4h1m-5 4a4 4 0 0 0-4-4H7m5 4v1"
    />
  </svg>
)
export default SvgTextCursor
