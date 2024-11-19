import * as React from 'react'
const SvgShapes = (props) => (
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
      d="M8.3 10a.7.7 0 0 1-.626-1.079l3.726-5.92a.7.7 0 0 1 1.198-.044L16.3 8.9a.701.701 0 0 1-.572 1.1zM9 14H4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1M17.5 21a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"
    />
  </svg>
)
export default SvgShapes
