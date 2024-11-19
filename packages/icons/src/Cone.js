import * as React from 'react'
const SvgCone = (props) => (
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
      d="m20.9 18.55-8-15.98a1 1 0 0 0-1.8 0l-8 15.98M21 19c0 1.657-4.03 3-9 3s-9-1.343-9-3 4.03-3 9-3 9 1.343 9 3"
    />
  </svg>
)
export default SvgCone
