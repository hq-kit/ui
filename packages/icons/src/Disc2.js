import * as React from 'react'
const SvgDisc2 = (props) => (
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
      d="M6 12c0-1.7.7-3.2 1.8-4.2M18 12c0 1.7-.7 3.2-1.8 4.2M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10m-8 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
    />
  </svg>
)
export default SvgDisc2
