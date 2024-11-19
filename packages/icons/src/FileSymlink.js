import * as React from 'react'
const SvgFileSymlink = (props) => (
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
      d="m10 18 3-3m0 0-3-3m3 3H6a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v7m10-9v4a2 2 0 0 0 2 2h4"
    />
  </svg>
)
export default SvgFileSymlink
