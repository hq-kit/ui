import * as React from 'react'
const SvgFlashlight = (props) => (
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
    <path fill="currentColor" d="M13 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4m12 0V2H6v4m12 0H6m7 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
    />
  </svg>
)
export default SvgFlashlight
