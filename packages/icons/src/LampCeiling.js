import * as React from 'react'
const SvgLampCeiling = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v5m-2.83 9a3 3 0 1 0 5.66 0M6 7h12l4 9H2z" />
  </svg>
)
export default SvgLampCeiling
