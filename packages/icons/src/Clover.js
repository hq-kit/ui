import * as React from 'react'
const SvgClover = (props) => (
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
      d="M16.17 7.83 2 22M16.17 7.83A2.828 2.828 0 1 0 12 4.02a2.827 2.827 0 1 0-4.17 3.81m8.34 0A2.827 2.827 0 1 1 19.98 12a2.827 2.827 0 1 1-3.81 4.17M4.02 12a2.827 2.827 0 1 1 3.81-4.17m0 0 8.34 8.34m0 0A2.828 2.828 0 1 1 12 19.98a2.83 2.83 0 0 1-4.076.274 2.826 2.826 0 0 1-.094-4.084A2.831 2.831 0 0 1 4 12"
    />
  </svg>
)
export default SvgClover
