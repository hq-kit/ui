import * as React from 'react'
const SvgImage = (props) => (
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
      d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m6 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
    />
  </svg>
)
export default SvgImage
