import * as React from 'react'
const SvgTempleBudha = (props) => (
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
      d="m8 8 4-5 4 5M8 8H7m1 0h8M7 8v4m0-4a3 3 0 0 1-3-3m3 7H5m2 0h10M5 12v9h5v-3a2 2 0 1 1 4 0v3h5v-9M5 12a3 3 0 0 1-3-3m14-1h1m0 0v4m0-4a3 3 0 0 0 3-3m-3 7h2m0 0a3 3 0 0 0 3-3"
    />
  </svg>
)
export default SvgTempleBudha
