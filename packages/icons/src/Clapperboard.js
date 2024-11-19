import * as React from 'react'
const SvgClapperboard = (props) => (
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
      d="m3 11 17.2-5-.8-2.6c-.3-1-1.4-1.6-2.5-1.3l-13.5 4c-1 .3-1.6 1.4-1.3 2.5zm0 0h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm3.2-5.7 3.1 3.9m3.1-5.8 3.1 4"
    />
  </svg>
)
export default SvgClapperboard
