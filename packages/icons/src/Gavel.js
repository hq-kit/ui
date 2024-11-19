import * as React from 'react'
const SvgGavel = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m14.5 12.5-8 8a2.121 2.121 0 0 1-3-3l8-8M16 16l6-6M8 8l6-6M9 7l8 8m4-4-8-8" />
  </svg>
)
export default SvgGavel
