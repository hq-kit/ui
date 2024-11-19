import * as React from 'react'
const SvgPawPrint = (props) => (
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
      d="M11 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4M18 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4M20 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045q-.64-2.065-2.7-2.705A3.5 3.5 0 0 1 5.5 10z"
    />
  </svg>
)
export default SvgPawPrint
