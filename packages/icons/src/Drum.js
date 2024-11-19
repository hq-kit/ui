import * as React from 'react'
const SvgDrum = (props) => (
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
      d="m2 2 8 8m12-8-8 8m8-1c0 2.761-4.477 5-10 5m10-5c0-2.761-4.477-5-10-5S2 6.239 2 9m20 0v8c0 1.326-1.054 2.598-2.929 3.535S14.652 22 12 22m0-8C6.477 14 2 11.761 2 9m10 5v8M2 9v8c0 1.326 1.054 2.598 2.929 3.535S9.348 22 12 22m-5-8.6v7.9m10-7.9v7.9"
    />
  </svg>
)
export default SvgDrum
