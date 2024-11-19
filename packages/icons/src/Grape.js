import * as React from 'react'
const SvgGrape = (props) => (
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
      d="M22 5V2l-5.89 5.89m3.49 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0M11.11 7.4a3 3 0 1 1-6 0 3 3 0 0 1 6 0m4.24 4.25a3 3 0 1 1-6 0 3 3 0 0 1 6 0m1.56-5.8a3 3 0 1 1-6 0 3 3 0 0 1 6 0m4.24 4.24a3 3 0 1 1-6 0 3 3 0 0 1 6 0M9.56 13.2a3 3 0 1 1-6 0 3 3 0 0 1 6 0m4.24 4.24a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 19a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
    />
  </svg>
)
export default SvgGrape
