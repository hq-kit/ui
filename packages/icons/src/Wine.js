import * as React from 'react'
const SvgWine = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 22h8M7 10h10M7 10c0-2 .5-4 2-8h6c1.5 4 2 6 2 8M7 10a5 5 0 0 0 5 5m5-5a5 5 0 0 1-5 5m0 0v7" />
  </svg>
)
export default SvgWine
