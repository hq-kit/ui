import * as React from 'react'
const SvgSwatchBook = (props) => (
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
      d="M7 21a4 4 0 0 0 4-4V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a4 4 0 0 0 4 4m0 0h12a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2.3M7 17h.01M11 8l2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8"
    />
  </svg>
)
export default SvgSwatchBook
