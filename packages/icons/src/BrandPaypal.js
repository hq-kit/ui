import * as React from 'react'
const SvgBrandPaypal = (props) => (
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
      d="M17.5 7.223C19.2 8.23 20 10.04 20 12.05c0 2.514-2.5 4.525-5 4.525h-2.6l-.6 3.62a1.006 1.006 0 0 1-1 .805H8.1a.5.5 0 0 1-.495-.38.5.5 0 0 1-.005-.224l.2-1.407m2.2-5.933h2.5c2.5 0 5-2.514 5-5.028C17.5 5.01 15.6 3 12.5 3H7c-.5 0-1 .503-1 1.006L4 18.084c0 .502.5 1.005 1 1.005h2.8L9 14.061c.1-.603.4-1.005 1-1.005"
    />
  </svg>
)
export default SvgBrandPaypal
