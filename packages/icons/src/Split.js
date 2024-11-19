import * as React from 'react'
const SvgSplit = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 3h5m0 0v5m0-5-6 6M8 3H3m0 0v5m0-5 7.828 7.828A4 4 0 0 1 12 13.7V22" />
  </svg>
)
export default SvgSplit
