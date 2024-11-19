import * as React from 'react'
const SvgAntenna = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 12 7 2m0 10 5-10m0 10 5-10m0 10 5-10M4.5 7h15M12 16v6" />
  </svg>
)
export default SvgAntenna
