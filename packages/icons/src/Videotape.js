import * as React from 'react'
const SvgVideotape = (props) => (
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
      d="M2 8h20M8 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m0 0h8m0 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2"
    />
  </svg>
)
export default SvgVideotape
