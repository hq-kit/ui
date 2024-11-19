import * as React from 'react'
const SvgBuildings = (props) => (
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
      d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18M6 22h12M6 22H4a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h2m12 10h2a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2h-2m-8-3h4m-4 4h4m-4 4h4m-4 4h4"
    />
  </svg>
)
export default SvgBuildings
