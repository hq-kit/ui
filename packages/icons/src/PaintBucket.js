import * as React from 'react'
const SvgPaintBucket = (props) => (
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
      d="m5 2 5 5m-8 6h15m2-2-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0zm3 9a2 2 0 0 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4"
    />
  </svg>
)
export default SvgPaintBucket
