import * as React from 'react'
const SvgSwitchCamera = (props) => (
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
      d="M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5m0 0L6 2m3 3L6 8m7-3h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5m0 0 3 3m-3-3 3-3m-3-4a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
    />
  </svg>
)
export default SvgSwitchCamera
