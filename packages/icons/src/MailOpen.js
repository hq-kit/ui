import * as React from 'react'
const SvgMailOpen = (props) => (
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
      d="M22 10c0-.63-.3-1.22-.8-1.6l-8-6a2 2 0 0 0-2.4 0l-8 6A2 2 0 0 0 2 10m20 0v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10m20 0-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"
    />
  </svg>
)
export default SvgMailOpen
