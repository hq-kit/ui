import * as React from 'react'
const SvgHome = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6M5 12H3l9-9 9 9h-2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z" />
  </svg>
)
export default SvgHome
