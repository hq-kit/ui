import * as React from 'react'
const SvgMouseOff = (props) => (
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
      d="M12 6v.343m6.218 11.875A7 7 0 0 1 5 15V9a7 7 0 0 1 .782-3.218M19 13.343V9A7 7 0 0 0 8.56 2.902M22 22 2 2"
    />
  </svg>
)
export default SvgMouseOff
