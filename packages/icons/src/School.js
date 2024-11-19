import * as React from 'react'
const SvgSchool = (props) => (
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
      d="M14 22v-4a2 2 0 0 0-4 0v4m8-12 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2m12-5v17M4 6l8-4 8 4M6 5v17m8-13a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
    />
  </svg>
)
export default SvgSchool
