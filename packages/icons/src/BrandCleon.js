import * as React from 'react'
const SvgBrandCleon = (props) => (
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
      fill="currentColor"
      fillRule="evenodd"
      d="M8.4 3A5.4 5.4 0 0 0 3 8.4v7.2A5.4 5.4 0 0 0 8.4 21h7.2a5.4 5.4 0 0 0 5.4-5.4V8.4A5.4 5.4 0 0 0 15.6 3zm.057 11.282a1.575 1.575 0 0 1-.577-2.152l2.925-5.066a1.575 1.575 0 0 1 2.728 1.575l-2.925 5.066a1.575 1.575 0 0 1-2.151.577M7.14 17.805a1.44 1.44 0 1 0 0-2.88 1.44 1.44 0 0 0 0 2.88m9.72 0a1.44 1.44 0 1 0 0-2.88 1.44 1.44 0 0 0 0 2.88m-6.322-2.129a1.575 1.575 0 0 0 2.727 1.575l2.476-4.287a1.575 1.575 0 0 0-2.729-1.575z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgBrandCleon
