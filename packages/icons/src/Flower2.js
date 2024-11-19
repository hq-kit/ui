import * as React from 'react'
const SvgFlower2 = (props) => (
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
      d="M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1m3 2a3 3 0 1 1-3 3m3-3h-1M9 8a3 3 0 1 0 3 3M9 8h1m2-2a2 2 0 0 0-2 2m2-2a2 2 0 0 1 2 2m-2 3v-1m-2-2a2 2 0 0 0 2 2m2-2a2 2 0 0 1-2 2m0 0v12m0 0c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5m0 0c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5"
    />
  </svg>
)
export default SvgFlower2
