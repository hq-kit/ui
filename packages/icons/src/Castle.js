import * as React from 'react'
const SvgCastle = (props) => (
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
      d="M22 11v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9m20 0H2m20 0V9M2 11V9m16 2V4m0 0H6m12 0V2M6 4v7m0-7V2m9 20v-4a3 3 0 0 0-6 0v4m1-18V2m4 2V2"
    />
  </svg>
)
export default SvgCastle
