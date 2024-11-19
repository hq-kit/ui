import * as React from 'react'
const SvgPizza = (props) => (
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
      d="M15 11h.01M11 15h.01M16 16h.01m-10.3 1.11a17.04 17.04 0 0 1 11.4-11.4M2 16l20 6-6-20A20 20 0 0 0 2 16"
    />
  </svg>
)
export default SvgPizza
