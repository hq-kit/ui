import * as React from 'react'
const SvgMousePointerBan = (props) => (
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
      d="m11.8 11.8 8.4 8.4M2.034 2.68a.498.498 0 0 1 .647-.646l9 3.5a.5.5 0 0 1-.033.944L8.204 7.545a1 1 0 0 0-.66.66l-1.066 3.443a.5.5 0 0 1-.944.033zM22 16a6 6 0 1 1-12 0 6 6 0 0 1 12 0"
    />
  </svg>
)
export default SvgMousePointerBan
