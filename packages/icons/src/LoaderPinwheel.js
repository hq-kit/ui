import * as React from 'react'
const SvgLoaderPinwheel = (props) => (
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
      d="M22 12a5 5 0 1 1-10 0m10 0c0 5.523-4.477 10-10 10S2 17.523 2 12m20 0c0-5.523-4.477-10-10-10S2 6.477 2 12m10 0a5 5 0 0 0-10 0m10 0a5.018 5.018 0 0 0-5 8.7m5-8.7a4.973 4.973 0 1 0 5-8.6M7 3.3a4.974 4.974 0 0 1 5 8.6 4.974 4.974 0 0 0 5 8.6"
    />
  </svg>
)
export default SvgLoaderPinwheel
