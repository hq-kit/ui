import * as React from 'react'
const SvgUtilityPole = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v20M2 5h20M3 3v2m4-2v2m10-2v2m4-2v2m-2 0-7 7-7-7" />
  </svg>
)
export default SvgUtilityPole
