import * as React from 'react'
const SvgPaintbrushVertical = (props) => (
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
      d="M10 2v2m4-2v4m4 6V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v9m12 0H6m12 0a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2h-2a1 1 0 0 0-1 1v2.9a2 2 0 0 1-4 0V17a1 1 0 0 0-1-1H7a2 2 0 0 1-2-2v-1a1 1 0 0 1 1-1"
    />
  </svg>
)
export default SvgPaintbrushVertical
