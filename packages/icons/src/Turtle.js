import * as React from 'react'
const SvgTurtle = (props) => (
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
      d="m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 0 0-16 0m10-4H8m4 0 3.18-2.1M2 14v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4m-6 4h18a2 2 0 0 0 0-4h-3.07M8 10 4.82 7.9"
    />
  </svg>
)
export default SvgTurtle
