import * as React from 'react'
const SvgEraser = (props) => (
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
      d="m13 21 8.3-8.3c1-.9 1-2.4 0-3.4l-5.6-5.6c-.9-1-2.4-1-3.4 0l-9.6 9.6c-1 .9-1 2.4 0 3.4L7 21h15M5 11l9 9"
    />
  </svg>
)
export default SvgEraser
