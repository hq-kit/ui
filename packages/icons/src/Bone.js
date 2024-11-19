import * as React from 'react'
const SvgBone = (props) => (
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
      d="M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 0 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 0 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 0 0 5 0c0-.81-.7-1.8 0-2.5z"
    />
  </svg>
)
export default SvgBone
