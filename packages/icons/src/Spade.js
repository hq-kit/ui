import * as React from 'react'
const SvgSpade = (props) => (
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
      d="M12 18c-1.5 1.5-2.7 2-4.5 2A5.5 5.5 0 0 1 2 14.5c0-2.3 1.5-4 3-5.5l7-7 7 7c1.5 1.5 3 3.2 3 5.5a5.5 5.5 0 0 1-5.5 5.5c-1.8 0-3-.5-4.5-2m0 0v4"
    />
  </svg>
)
export default SvgSpade
