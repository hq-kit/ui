import * as React from 'react'
const SvgFileBadge = (props) => (
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
      d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3m10-5v4a2 2 0 0 0 2 2h4M7 16.5 8 22l-3-1-3 1 1-5.5m2 .5a3 3 0 1 0 0-5.999A3 3 0 0 0 5 17"
    />
  </svg>
)
export default SvgFileBadge
