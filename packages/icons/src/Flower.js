import * as React from 'react'
const SvgFlower = (props) => (
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
      d="M15 12a3 3 0 0 1-3 3m3-3a3 3 0 0 0-3-3m3 3h1.5M12 15a3 3 0 0 1-3-3m3 3v1.5M9 12a3 3 0 0 1 3-3m-3 3H7.5M12 9V7.5m0 9A4.5 4.5 0 1 1 7.5 12m4.5 4.5a4.5 4.5 0 1 0 4.5-4.5m-9 0A4.5 4.5 0 1 1 12 7.5m0 0a4.5 4.5 0 1 1 4.5 4.5M8 8l1.88 1.88m4.24 0L16 8m-8 8 1.88-1.88m4.24 0L16 16"
    />
  </svg>
)
export default SvgFlower
