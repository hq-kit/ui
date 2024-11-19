import * as React from 'react'
const SvgFlipHorizontal2 = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20v2m0-8v2m0-8v2m0-8v2M3 7l5 5-5 5zm18 0-5 5 5 5z" />
  </svg>
)
export default SvgFlipHorizontal2
