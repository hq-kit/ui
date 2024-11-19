import * as React from 'react'
const SvgCloudMoon = (props) => (
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
      d="M10.188 8.5A6 6 0 0 1 16 4a4.242 4.242 0 1 0 6 6 6 6 0 0 1-3 5.197M13 16a3 3 0 0 1 0 6H7a5 5 0 1 1 4.9-6z"
    />
  </svg>
)
export default SvgCloudMoon
