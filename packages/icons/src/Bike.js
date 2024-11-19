import * as React from 'react'
const SvgBike = (props) => (
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
      d="M12 17.5V14l-3-3 4-3 2 3h2m5 6.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-13 0a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0M16 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
    />
  </svg>
)
export default SvgBike
