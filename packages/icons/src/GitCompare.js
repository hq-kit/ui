import * as React from 'react'
const SvgGitCompare = (props) => (
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
      d="M18 15a3 3 0 1 0 0 6 3 3 0 0 0 0-6m0 0V8a2 2 0 0 0-2-2h-3M6 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0 0v7a2 2 0 0 0 2 2h3"
    />
  </svg>
)
export default SvgGitCompare
