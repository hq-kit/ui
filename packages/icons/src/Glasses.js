import * as React from 'react'
const SvgGlasses = (props) => (
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
      d="M10 15a4 4 0 1 1-8 0 4 4 0 0 1 8 0m0 0a2 2 0 0 1 4 0m0 0a4 4 0 1 0 8 0 4 4 0 0 0-8 0M2.5 13 5 7c.7-1.3 1.4-2 3-2m13.5 8L19 7c-.7-1.3-1.5-2-3-2"
    />
  </svg>
)
export default SvgGlasses
