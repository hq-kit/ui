import * as React from 'react'
const SvgBitcoin = (props) => (
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
      d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.907 1.042-.346 1.97m-2.377-9.558 3.94.694c4.924.869 6.14-6.025 1.215-6.893L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727"
    />
  </svg>
)
export default SvgBitcoin
