import * as React from 'react'
const SvgFileOutput = (props) => (
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
      d="M14 2v4a2 2 0 0 0 2 2h4M4 7V4a2 2 0 0 1 2-2h9l5 5v13a2 2 0 0 1-2 2l-11.937-.001a2 2 0 0 1-2-1M5 11l-3 3m0 0 3 3m-3-3h10"
    />
  </svg>
)
export default SvgFileOutput
