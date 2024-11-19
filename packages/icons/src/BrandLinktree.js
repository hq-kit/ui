import * as React from 'react'
const SvgBrandLinktree = (props) => (
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
      d="m13.422 7.39 3.277-3.088 1.903 1.786-3.438 3.003H20v2.479h-4.86l3.463 3.08-1.904 1.751L12 12.074 7.302 16.4l-1.904-1.744 3.462-3.08H4V9.09h4.836L5.398 6.087l1.903-1.786 3.277 3.087V3h2.844zm-2.844 7.728h2.844V21h-2.844z"
    />
  </svg>
)
export default SvgBrandLinktree
