import * as React from 'react'
const SvgCrop = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 2v14a2 2 0 0 0 2 2h14m-4 4V8a2 2 0 0 0-2-2H2" />
  </svg>
)
export default SvgCrop
