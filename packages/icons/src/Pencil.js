import * as React from 'react'
const SvgPencil = (props) => (
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
      d="m15 5 4 4m2.174-2.188a2.819 2.819 0 1 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83L2.02 21.356a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
    />
  </svg>
)
export default SvgPencil
