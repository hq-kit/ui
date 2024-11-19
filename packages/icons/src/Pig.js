import * as React from 'react'
const SvgPig = (props) => (
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
      d="M5 12c0-5.3 7.5-6.5 11-5 .2-.6 1.5-2 3-2v3c.5.5 1 1 1 2h2v4h-2c-.3 1-1 1.5-2 2v4h-4v-2h-3v2H7v-3.5C5 15 5 13.8 5 12m0 0H4c-1.1 0-2-.9-2-2V9m14 2h.01"
    />
  </svg>
)
export default SvgPig
