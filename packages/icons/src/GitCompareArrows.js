import * as React from 'react'
const SvgGitCompareArrows = (props) => (
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
      d="M5 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0 0v7a2 2 0 0 0 2 2h5m0-12h5a2 2 0 0 1 2 2v7m-7-9 3 3m-3-3 3-3m4 12a3 3 0 1 0 0 6 3 3 0 0 0 0-6m-7 3-3-3m3 3-3 3"
    />
  </svg>
)
export default SvgGitCompareArrows
