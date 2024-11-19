import * as React from 'react'
const SvgChefHat = (props) => (
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
      d="M6 17h12m-1 4a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.59 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.589c.41.198.727.585.727 1.04V20a1 1 0 0 0 1 1z"
    />
  </svg>
)
export default SvgChefHat
