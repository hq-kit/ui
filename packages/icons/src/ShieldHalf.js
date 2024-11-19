import * as React from 'react'
const SvgShieldHalf = (props) => (
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
      d="M12 2c-.279 0-.548.099-.76.28C9.5 3.8 7 5 5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01C16.5 20.5 20 18 20 13V6a1 1 0 0 0-1-1c-2 0-4.49-1.19-6.24-2.72A1.17 1.17 0 0 0 12 2m0 0v20"
    />
  </svg>
)
export default SvgShieldHalf
