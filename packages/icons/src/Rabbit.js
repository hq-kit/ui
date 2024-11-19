import * as React from 'react'
const SvgRabbit = (props) => (
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
      d="M13 16a3 3 0 0 1 2.24 5M18 12h.01M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1.98 1.98 0 1 1 2.8-2.8L15.8 7h.2m0 0c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3m0-12V4a2 2 0 1 1 4 0v4.54M7.612 12.524a3 3 0 1 0-1.6 4.3"
    />
  </svg>
)
export default SvgRabbit
