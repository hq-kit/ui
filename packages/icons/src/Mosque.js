import * as React from 'react'
const SvgMosque = (props) => (
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
      d="M3 21h7v-2a2 2 0 0 1 4 0v2h7M4 21V11m16 10V11M4 16h3v-3m0 0h10M7 13a5 5 0 0 1 5-5m5 5v3h3m-3-3a5 5 0 0 0-5-5m0 0V6m0-4a2 2 0 1 0 2 2m7 6.5c0-.329-.077-.653-.224-.947L20 8l-.776 1.553A2.1 2.1 0 0 0 19 10.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5m-16 0c0-.329-.077-.653-.224-.947L4 8l-.776 1.553A2.1 2.1 0 0 0 3 10.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5"
    />
  </svg>
)
export default SvgMosque
