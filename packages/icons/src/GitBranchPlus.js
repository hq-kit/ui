import * as React from 'react'
const SvgGitBranchPlus = (props) => (
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
      d="M6 3v12m0 0a3 3 0 1 1 0 6 3 3 0 0 1 0-6m0 0a9 9 0 0 1 9-9m0 0a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3 9v6m3-3h-6"
    />
  </svg>
)
export default SvgGitBranchPlus
