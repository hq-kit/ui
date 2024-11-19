import * as React from 'react'
const SvgBadgeVo = (props) => (
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
      d="m7 9 2 6 2-6M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm12.5 2a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 1 1-3 0v-3A1.5 1.5 0 0 1 15.5 9"
    />
  </svg>
)
export default SvgBadgeVo
