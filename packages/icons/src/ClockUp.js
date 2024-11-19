import * as React from 'react'
const SvgClockUp = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.228 21.925a10 10 0 1 1 8.766-9.587M12 6v6l1.562.781M14 18l4-4m0 0 4 4m-4-4v8" />
  </svg>
)
export default SvgClockUp
