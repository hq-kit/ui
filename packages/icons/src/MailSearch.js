import * as React from 'react'
const SvgMailSearch = (props) => (
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
      d="M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5M22 7l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7m16 14a3 3 0 0 0 3-3m-3 3a3 3 0 0 1-3-3m3 3a3 3 0 0 0 3-3m-3 3a3 3 0 0 1-3-3m6 0a3 3 0 0 0-3-3m3 3a3 3 0 0 0-3-3m0 0a3 3 0 0 0-3 3m3-3a3 3 0 0 0-3 3m7 4-1.5-1.5"
    />
  </svg>
)
export default SvgMailSearch
