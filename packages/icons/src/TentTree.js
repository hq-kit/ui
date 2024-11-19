import * as React from 'react'
const SvgTentTree = (props) => (
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
      d="m14 5 3-3m0 0 3 3m-3-3v12m-3-4 3-3 3 3m-3 4H7l-5 8h20zm-9 0v8m1-8 5 8M6 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
    />
  </svg>
)
export default SvgTentTree
