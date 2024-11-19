import * as React from 'react'
const SvgBadge3D = (props) => (
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
      d="M7 9.5a.5.5 0 0 1 .5-.5h1a1.5 1.5 0 0 1 0 3m0 0H8m.5 0a1.5 1.5 0 1 1 0 3h-1a.5.5 0 0 1-.5-.5M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm11 2v6h1a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2z"
    />
  </svg>
)
export default SvgBadge3D
