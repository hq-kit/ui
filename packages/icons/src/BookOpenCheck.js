import * as React from 'react'
const SvgBookOpenCheck = (props) => (
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
      d="M12 21V7m0 14a3 3 0 0 0-3-3H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4m0 14a3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3M12 7a4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v2m-6 6 2 2 4-4"
    />
  </svg>
)
export default SvgBookOpenCheck
