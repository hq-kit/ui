import * as React from 'react'
const SvgTableRowsSplit = (props) => (
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
      d="M14 10h2m-1 12v-8m0-12v4M2 10h2m16 0h2M3 19h18M3 22v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6M3 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V2M8 10h2M9 22v-8M9 2v4"
    />
  </svg>
)
export default SvgTableRowsSplit
