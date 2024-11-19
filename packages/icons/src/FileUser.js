import * as React from 'react'
const SvgFileUser = (props) => (
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
      d="M14 2v4a2 2 0 0 0 2 2h4m-5 10a3 3 0 0 0-3-3m0 0a3 3 0 0 0-3 3m3-3a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-13H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"
    />
  </svg>
)
export default SvgFileUser
