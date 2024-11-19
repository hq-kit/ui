import * as React from 'react'
const SvgKeyframes = (props) => (
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
      d="m17 5 4.586 5.836a1.844 1.844 0 0 1 0 2.328L17 19M13 5l4.586 5.836a1.844 1.844 0 0 1 0 2.328L13 19m-3.775-.588A1.6 1.6 0 0 1 8 19c-.468 0-.914-.214-1.225-.588l-4.361-5.248a1.844 1.844 0 0 1 0-2.328l4.361-5.248A1.6 1.6 0 0 1 8 5c.468 0 .914.214 1.225.588l4.361 5.248a1.844 1.844 0 0 1 0 2.328z"
    />
  </svg>
)
export default SvgKeyframes
