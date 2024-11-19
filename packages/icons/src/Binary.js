import * as React from 'react'
const SvgBinary = (props) => (
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
      d="M6 20h4m4-10h4M6 14h2v6m6-16h2v6m0 4a2 2 0 0 1 2 2v2a2 2 0 1 1-4 0v-2a2 2 0 0 1 2-2M8 4a2 2 0 0 1 2 2v2a2 2 0 1 1-4 0V6a2 2 0 0 1 2-2"
    />
  </svg>
)
export default SvgBinary
