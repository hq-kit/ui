import * as React from 'react'
const SvgTablets = (props) => (
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
      d="M22 17a5 5 0 0 1-10 0m10 0a5 5 0 0 0-10 0m10 0H12m-8.54-6.46 7.08-7.08M12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0"
    />
  </svg>
)
export default SvgTablets
