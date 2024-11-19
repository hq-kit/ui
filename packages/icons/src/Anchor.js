import * as React from 'react'
const SvgAnchor = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22V8m0 14A10 10 0 0 1 2 12h3m7 10a10 10 0 0 0 10-10h-3m-7-4a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
  </svg>
)
export default SvgAnchor
