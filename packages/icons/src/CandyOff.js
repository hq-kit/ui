import * as React from 'react'
const SvgCandyOff = (props) => (
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
      d="m8.5 8.5-1 1a4.95 4.95 0 0 0 7 7l1-1m-3.657-9.313a4.947 4.947 0 0 1 5.922 3.47c.23.815.246 1.676.048 2.5M14 16.5V14m0-7.5v1.843M10 10v7.5M16 7l1-5 1.367.683A3 3 0 0 0 19.708 3H21v1.292a3 3 0 0 0 .317 1.341L22 7l-5 1m-9 9-1 5-1.367-.683A3 3 0 0 0 4.292 21H3v-1.292a3 3 0 0 0-.317-1.341L2 17l5-1M2 2l20 20"
    />
  </svg>
)
export default SvgCandyOff
