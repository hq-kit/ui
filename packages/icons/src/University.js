import * as React from 'react'
const SvgUniversity = (props) => (
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
      d="M6 17v.01M6 13v.01M18 17v.01M18 13v.01M14 22v-5a2 2 0 0 0-4 0v5m3-12a1 1 0 1 1-2 0 1 1 0 0 1 2 0m9 10V8h-4l-6-4-6 4H2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2"
    />
  </svg>
)
export default SvgUniversity
