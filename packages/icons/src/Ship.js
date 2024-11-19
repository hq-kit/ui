import * as React from 'react'
const SvgShip = (props) => (
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
      d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1m-2.62-1A11.6 11.6 0 0 0 21 14l-9-4m0 0-9 4c0 2.9.94 5.34 2.81 7.76M12 10v4m7-1V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6m7-11v3"
    />
  </svg>
)
export default SvgShip
