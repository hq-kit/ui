import * as React from 'react'
const SvgBrandCpp = (props) => (
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
      d="M17.4 12.4H21m-1.8-1.8v3.6m-8.1-1.8h3.6m-1.8-1.8v3.6M9.3 9.7A2.7 2.7 0 0 0 6.6 7h-.45A3.15 3.15 0 0 0 3 10.15v4.5a3.15 3.15 0 0 0 3.15 3.15h.45a2.7 2.7 0 0 0 2.7-2.7"
    />
  </svg>
)
export default SvgBrandCpp
