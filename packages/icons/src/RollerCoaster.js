import * as React from 'react'
const SvgRollerCoaster = (props) => (
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
      d="M6 19V5m0 0a4 4 0 0 0-4 4v10M6 5c2 0 4 1.33 6 4s4 4 6 4m-8 6V6.8M14 19v-7.8M18 5v4m0 10v-6m0 0a4 4 0 1 0-3-6.65M22 19V9"
    />
  </svg>
)
export default SvgRollerCoaster
