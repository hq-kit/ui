import * as React from 'react'
const SvgRat = (props) => (
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
      d="M17 5c0-1.7-1.3-3-3-3s-3 1.3-3 3c0 .8.3 1.5.8 2H11c-3.9 0-7 3.1-7 7 0 2.2 1.8 4 4 4m8.8-14.1c.3-.3.6-.5 1-.7 1.5-.6 3.3.1 3.9 1.6s-.1 3.3-1.6 3.9l1.6 2.8c.2.3.2.7.2 1-.2.8-.9 1.2-1.7 1.1 0 0-1.6-.3-2.7-.6H17c-1.7 0-3 1.3-3 3m-.8 2a3 3 0 0 0-2.2-5m2 9H4a2 2 0 1 1 0-4h12m0-9h.01"
    />
  </svg>
)
export default SvgRat
