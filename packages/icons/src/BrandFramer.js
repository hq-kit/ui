import * as React from 'react'
const SvgBrandFramer = (props) => (
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
    <path fill="currentColor" d="M18.334 2v6.667h-6.667L5 2zM5 8.667h6.667l6.667 6.666h-6.667V22L5 15.333z" />
  </svg>
)
export default SvgBrandFramer
