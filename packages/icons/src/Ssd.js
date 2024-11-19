import * as React from 'react'
const SvgSsd = (props) => (
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
      strokeWidth={2}
      d="M3 17a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3M3 17a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3M3 17 5.902 6.22A3 3 0 0 1 8.8 4h6.402a3 3 0 0 1 2.897 2.22L21 17m-8 0a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1 0-1h1a.5.5 0 0 1 .5.5Zm5 0a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1 0-1h1a.5.5 0 0 1 .5.5Z"
    />
  </svg>
)
export default SvgSsd
