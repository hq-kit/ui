import * as React from 'react'
const SvgSignpostBig = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9H4L2 7l2-2h6m4 0h6l2 2-2 2h-6m-4 13V4a2 2 0 1 1 4 0v18m-6 0h8" />
  </svg>
)
export default SvgSignpostBig
