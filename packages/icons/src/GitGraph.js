import * as React from 'react'
const SvgGitGraph = (props) => (
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
      d="M5 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0 0v6m0 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6m7-12v18m7-12a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0 0a9 9 0 0 1-3 6.7"
    />
  </svg>
)
export default SvgGitGraph
