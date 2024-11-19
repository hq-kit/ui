import * as React from 'react'
const SvgBaggage = (props) => (
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
      d="M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2m15 9V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10M9 6h11a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1m11 14a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-9 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
    />
  </svg>
)
export default SvgBaggage
