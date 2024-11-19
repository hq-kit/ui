import * as React from 'react'
const SvgClockAlert = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2m0 7.16a10 10 0 1 1 5-13.516M20 11.5v6m0 4h.01" />
  </svg>
)
export default SvgClockAlert
