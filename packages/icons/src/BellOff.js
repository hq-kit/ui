import * as React from 'react'
const SvgBellOff = (props) => (
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
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.7 3A6 6 0 0 1 18 8c.002 1.685.203 3.363.6 5M17 17H3s3-2 3-9a4.7 4.7 0 0 1 .3-1.7m4 14.7a1.941 1.941 0 0 0 3.4 0M2 2l20 20"
    />
  </svg>
)
export default SvgBellOff
