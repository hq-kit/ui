import * as React from 'react'
const SvgSofa = (props) => (
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
      d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3m16 0a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2m0-9a2 2 0 0 0-2 2v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-2-2m0 0a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2m0 0h16M4 18v2m16-2v2M12 4v9"
    />
  </svg>
)
export default SvgSofa
