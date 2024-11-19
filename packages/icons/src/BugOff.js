import * as React from 'react'
const SvgBugOff = (props) => (
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
      d="M15 7.13V6a3 3 0 0 0-5.14-2.1L8 2m6.12 1.88L16 2m6 11h-4v-2a4 4 0 0 0-4-4h-1.3m8.27-2c0 2.1-1.6 3.8-3.5 4M2 2l20 20M7.7 7.7A4 4 0 0 0 6 11v3a6 6 0 0 0 11.13 3.13M12 20v-8m-6 1H2m1 8c0-2.1 1.7-3.9 3.8-4"
    />
  </svg>
)
export default SvgBugOff
