import * as React from 'react'
const SvgDoorOpen = (props) => (
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
      d="M13 4h3a2 2 0 0 1 2 2v14M2 20h3m0 0 6.758 1.689a1 1 0 0 0 1.242-.97V4.562a2.004 2.004 0 0 0-1.585-1.956 2 2 0 0 0-.9.016l-4 1A2 2 0 0 0 5 5.562zm8 0h9m-12-8v.01"
    />
  </svg>
)
export default SvgDoorOpen
