import * as React from 'react'
const SvgTableColumnsSplit = (props) => (
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
      d="M14 14v2m0 4v2m0-20v2m0 4v2M2 15h8M2 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2M2 9h8m12 6h-4m4-12h-2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2m0-12h-4M5 3v18"
    />
  </svg>
)
export default SvgTableColumnsSplit
