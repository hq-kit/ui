import * as React from 'react'
const SvgCoins = (props) => (
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
      d="M18.09 10.37A5.999 5.999 0 1 1 10.34 18M7 6h1v4m8.71 3.88.7.71-2.82 2.82M14 8A6 6 0 1 1 2 8a6 6 0 0 1 12 0"
    />
  </svg>
)
export default SvgCoins
