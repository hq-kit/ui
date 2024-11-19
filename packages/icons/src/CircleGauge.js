import * as React from 'react'
const SvgCircleGauge = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.6 2.7a10 10 0 1 0 5.7 5.7m-7.9 2.2L19 5m-5 7a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
  </svg>
)
export default SvgCircleGauge
