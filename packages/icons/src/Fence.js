import * as React from 'react'
const SvgFence = (props) => (
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
      d="M6 8h4M6 18h4m4-10h4m-4 10h4M4 3 2 5v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5zm8 0-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5zm8 0-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5z"
    />
  </svg>
)
export default SvgFence
