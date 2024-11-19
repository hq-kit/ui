import * as React from 'react'
const SvgTvMinimalPlay = (props) => (
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
      d="M7 21h10M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.25a.75.75 0 0 1 0 1.277l-3.664 2.25A.75.75 0 0 1 10 12.25zM4 3h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2"
    />
  </svg>
)
export default SvgTvMinimalPlay
