import * as React from 'react'
const SvgBiohazard = (props) => (
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
      d="M12 13.9a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 0v1.6M6.7 3.4c-.9 2.5 0 5.2 2.2 6.7m0 0C6.5 9 3.7 9.6 2 11.6m6.9-1.5 1.4.8m7-7.5c.9 2.5 0 5.2-2.2 6.7m0 0c2.4-1.2 5.2-.6 6.9 1.5m-6.9-1.5-1.4.8m3 9.9c-2.6-.4-4.6-2.6-4.7-5.3m0 0c-.2 2.6-2.1 4.8-4.7 5.2m6.2-15.3q-1.5-.3-3 0m6.5 11c.7-.7 1.2-1.6 1.5-2.5m-13 0c.3.9.8 1.8 1.5 2.5"
    />
  </svg>
)
export default SvgBiohazard
