import * as React from 'react'
const SvgIceCreamBowl = (props) => (
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
      d="M8 21h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0m.29 0a3.5 3.5 0 1 1 6.71 0M15.5 6.5a3.5 3.5 0 1 0-7 0M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6"
    />
  </svg>
)
export default SvgIceCreamBowl
