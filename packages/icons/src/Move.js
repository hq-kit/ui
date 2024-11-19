import * as React from 'react'
const SvgMove = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v20m0-20L9 5m3-3 3 3m-3 17 3-3m-3 3-3-3M19 9l3 3m0 0-3 3m3-3H2m0 0 3-3m-3 3 3 3" />
  </svg>
)
export default SvgMove
