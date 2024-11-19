import * as React from 'react'
const SvgCroissant = (props) => (
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
      d="m10.5 9.5-1-2.29C9.2 6.48 8.8 6 8 6m0 0H4.5C2.79 6 2 6.5 2 8.5a7.7 7.7 0 0 0 2 4.83M8 6c0-1.55.24-4-2-4-2 0-2.5 2.17-2.5 4m11 7.5 2.29 1c.73.3 1.21.7 1.21 1.5m0 0v3.5c0 1.71-.5 2.5-2.5 2.5a7.7 7.7 0 0 1-4.83-2M18 16c1.55 0 4-.24 4 2 0 2-2.17 2.5-4 2.5M4.6 13.11l5.79-3.21c1.89-1.05 4.79 1.78 3.71 3.71l-3.22 5.81C8.8 23.16.79 15.23 4.6 13.11"
    />
  </svg>
)
export default SvgCroissant
