import * as React from 'react'
const SvgCaravan = (props) => (
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
      d="M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4m0 0v8a2 2 0 0 0 2 2h2M2 9h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2m4 6a2 2 0 1 0 4 0m-4 0a2 2 0 1 1 4 0m12-2v1a1 1 0 0 1-1 1H10m0 0v-9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v9"
    />
  </svg>
)
export default SvgCaravan
