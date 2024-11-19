import * as React from 'react'
const SvgAirpods = (props) => (
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
      d="M6 5a4 4 0 0 1 4 3.8v10.7a1.5 1.5 0 0 1-3 0V13H6a4 4 0 0 1-4-3.8V9a4 4 0 0 1 4-4M18 3a4 4 0 0 0-4 3.8v10.7a1.5 1.5 0 1 0 3 0V11h1a4 4 0 0 0 4-3.8V7a4 4 0 0 0-4-4"
    />
  </svg>
)
export default SvgAirpods
