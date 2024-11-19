import * as React from 'react'
const SvgAxe = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m14 12-8.5 8.5a2.121 2.121 0 0 1-3-3L11 9m4 4L9 7l4-4 6 6h3a8 8 0 0 1-7 7z" />
  </svg>
)
export default SvgAxe
