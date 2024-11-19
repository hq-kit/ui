import * as React from 'react'
const SvgFlipVertical2 = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12H2m8 0H8m8 0h-2m8 0h-2m-3-9-5 5-5-5zm0 18-5-5-5 5z" />
  </svg>
)
export default SvgFlipVertical2
